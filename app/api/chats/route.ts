import prisma from '@/prisma/client'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = z
    .object({
      pdfId: z.string(),
    })
    .safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  const { pdfId } = validation.data

  const pdf = await prisma.pdf.findUnique({ where: { id: pdfId } })
  if (!pdf)
    return NextResponse.json({ error: 'PDF not found.' }, { status: 404 })

  try {
    const chat = await prisma.chat.create({
      data: {
        pdfId: pdf.id,
        userId: pdf.userId,
      },
    })
    return NextResponse.json(
      {
        data: { id: chat.id },
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
