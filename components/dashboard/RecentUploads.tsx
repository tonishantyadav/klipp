'use client'

import { PdfDeleteDialog, PdfUpdateDialog } from '@/components/pdf'
import { FireIcon } from '@/components/ui/icon'
import { Loader } from '@/components/ui/loader'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { useChats } from '@/hooks/chat'
import { usePdfs } from '@/hooks/pdf'
import { Chat, Pdf } from '@prisma/client'
import { FileTextIcon, RocketIcon } from '@radix-ui/react-icons'
import { useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const RecentUploads = () => {
  const { data: pdfs, isLoading, isError } = usePdfs()

  return (
    <div className="flex h-96 flex-col gap-3 rounded-2xl border-2 bg-white p-3 shadow-sm">
      {isLoading ? (
        <div className="flex h-full flex-col items-center justify-center">
          <Loader />
        </div>
      ) : !isLoading && pdfs && pdfs.length ? (
        <FiledRecentUploads pdfs={pdfs} />
      ) : (
        <EmptyRecentUploads />
      )}
    </div>
  )
}

const FiledRecentUploads = ({ pdfs }: { pdfs: Pdf[] }) => {
  return (
    <>
      <div className="flex items-center gap-2 p-2 font-medium text-slate-800/90">
        <RocketIcon className="h-5 w-5" />
        <span className="text-2xl">Recent Uploads</span>
      </div>
      <div className="flex flex-grow overflow-auto">
        <Table>
          <TableBody>
            {pdfs.map((pdf, index) => (
              <FiledRecentUploadsRow pdf={pdf} key={index} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

const FiledRecentUploadsRow = ({ pdf }: { pdf: Pdf }) => {
  const { data: chats } = useChats()
  const [chat, setChat] = useState<Chat | undefined>(undefined)

  useEffect(() => {
    if (chats) {
      const c = chats.find((chat) => chat.pdfId === pdf.id)
      setChat(c)
    }
  }, [chats, pdf])

  return (
    <>
      {chat && (
        <TableRow key={pdf.id}>
          <TableCell className="group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileTextIcon className="text-blue-600" />
                <Link
                  className="text-xs text-slate-700/90 group-hover:text-slate-900 md:text-sm lg:text-sm"
                  href={`/chats/${chat.id}`}
                  key={pdf.id}
                >
                  {pdf.name.length > 32
                    ? `${pdf.name.slice(0, 32)}...`
                    : pdf.name}
                </Link>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100">
                <PdfUpdateDialog pdf={pdf} />
                <PdfDeleteDialog pdf={pdf} />
              </div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

const EmptyRecentUploads = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-5">
      <div className="flex flex-col items-center">
        <span className="text-center text-3xl font-medium text-slate-500/40">
          Umm nothing is cooked yet!
        </span>
        <span className="text-md text-center text-slate-500/35">
          Start your cooking by uploading a file.
        </span>
      </div>
      <FireIcon className="h-8 w-8 text-slate-500/40" />
    </div>
  )
}
