import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const file = await prisma.file.findUnique({ where: { id } })

  if (!file)
    return NextResponse.json({ success: 'File not found!' }, { status: 404 })

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
