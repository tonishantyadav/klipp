import prisma from '@/prisma/client'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { userId: clerkUserId } = auth()

  try {
    if (clerkUserId) {
      const user = await prisma.user.findUnique({
        where: { clerkUserId },
      })
      const pdfs = await prisma.pdf.findMany({
        where: { userId: user!.id },
        orderBy: {
          createdAt: 'desc',
        },
      })
      return NextResponse.json(pdfs)
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Unable to fetch the uploaded PDFs at the moment!',
      },
      { status: 500 }
    )
  }
}
