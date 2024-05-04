import prisma from '@/prisma/client'
import { NextResponse } from 'next/server'

export async function GET(request: NextResponse) {
  const files = await prisma.file.findMany()
  return NextResponse.json(files)
}
