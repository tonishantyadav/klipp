import prisma from '@/prisma/client'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId } = auth()

  if (!userId)
    return NextResponse.json({ error: 'Uauthorized user.' }, { status: 401 })

  const { id } = params
  const pdf = await prisma.pdf.findUnique({ where: { id } })

  if (!pdf)
    return NextResponse.json({ error: 'PDF not found.' }, { status: 404 })

  const chat = await prisma.chat.findUnique({ where: { pdfId: pdf.id } })

  if (!chat)
    return NextResponse.json({ error: 'Chat not found.' }, { status: 404 })

  try {
    await prisma.chat.delete({ where: { id: chat.id } })
    await prisma.pdf.delete({ where: { id } })
    return NextResponse.json(
      { success: 'Your PDF is been deleted.' },
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

  const pdf = await prisma.pdf.findUnique({ where: { id } })

  if (!pdf)
    return NextResponse.json({ error: 'PDF not found.' }, { status: 404 })

  try {
    await prisma.pdf.update({ where: { id }, data: { name } })
    return NextResponse.json(
      { success: 'Your PDF name is been updated.' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
