import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const file = await prisma.file.findUnique({ where: { id } })

  if (!file)
    return NextResponse.json({ error: 'File not found!' }, { status: 404 })

  try {
    await prisma.file.delete({ where: { id } })
    return NextResponse.json(
      { success: 'Your file is been deleted.' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const body = await request.json()
  const validation = z
    .object({
      name: z.string(),
    })
    .safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  const { name } = validation.data

  const file = await prisma.file.findUnique({ where: { id } })

  if (!file)
    return NextResponse.json({ error: 'File not found!' }, { status: 404 })

  try {
    await prisma.file.update({ where: { id }, data: { name } })
    return NextResponse.json(
      { success: 'Your file name is been updated.' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
