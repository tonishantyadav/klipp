import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const files = await prisma.file.findMany()
    return NextResponse.json(files)
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Unable to fetch the uploaded files at the moment!',
      },
      { status: 500 }
    )
  }
}
