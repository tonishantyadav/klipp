import prisma from '@/prisma/client'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { createContext } from '@/lib/langchain'
// import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

export async function GET(request: NextRequest) {
  const { userId: clerkUserId } = auth()

  try {
    if (clerkUserId) {
      const user = await prisma.user.findUnique({
        where: { clerkUserId },
      })
      const chats = await prisma.chat.findMany({
        where: { userId: user!.id },
      })
      return NextResponse.json(chats, { status: 200 })
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Unable to fetch the chats at the moment!',
      },
      { status: 500 }
    )
  }
}

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
    const context = await createContext(pdf)
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
    await prisma.pdf.delete({ where: { id: pdfId } })
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    )
  }
}
