import { cn } from '@/lib/utils'
import prisma from '@/prisma/client'
import { auth } from '@clerk/nextjs/server'
import { Pdf } from '@prisma/client'
import { MessageSquareText } from 'lucide-react'
import Link from 'next/link'

export const ChatHistory = async ({ pdfId }: { pdfId: string }) => {
  const { userId: clerkUserId } = auth()

  let user = null
  if (clerkUserId) {
    user = await prisma.user.findUnique({ where: { clerkUserId } })
  }

  if (!user) return null

  const pdfs = await prisma.pdf.findMany({
    where: { userId: user!.id },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div className="scrollbar h-full w-full overflow-auto">
      {pdfs && (
        <ul className="w-full">
          {pdfs.map((pdf, index) => (
            <ChatRow pdf={pdf} pdfId={pdfId} key={pdf.id} />
          ))}
        </ul>
      )}
    </div>
  )
}

const ChatRow = async ({ pdf, pdfId }: { pdf: Pdf; pdfId: string }) => {
  const chat = await prisma.chat.findUnique({
    where: { pdfId: pdf.id },
  })

  return (
    <Link href={`/chats/${chat?.id}`}>
      <li
        className={cn(
          'my-1 flex w-full cursor-pointer items-center gap-1.5 text-nowrap rounded-sm border p-1.5 md:text-xs lg:text-sm',
          pdf.id === pdfId
            ? 'bg-emerald-600 text-white hover:bg-emerald-500'
            : 'text-slate-700/90 hover:bg-slate-100/80 hover:text-slate-900'
        )}
        key={pdf.id}
      >
        <MessageSquareText className="h-4 w-4" />
        <span>
          {' '}
          {pdf.name.length > 22 ? `${pdf.name.slice(0, 22)}...` : pdf.name}
        </span>
      </li>
    </Link>
  )
}
