import { ChatContainer, ChatSidebar } from '@/components/chat'
import { PdfContainer } from '@/components/pdf'
import { Button } from '@/components/ui/button'
import { OpenIcon } from '@/components/ui/icon'
import ToastContainer from '@/components/ui/toast'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'

const ChatPage = async ({ params }: { params: { id: string } }) => {
  const chat = await prisma.chat.findUnique({ where: { id: params.id } })
  if (!chat) notFound()

  const pdf = await prisma.pdf.findUnique({ where: { id: chat.pdfId } })
  if (!pdf) notFound()

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col bg-white">
        <div className="inline-flex justify-end pr-3 md:hidden lg:hidden">
          <Button className="flex gap-1.5">
            <span>Open</span>
            <OpenIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid h-screen grid-cols-1 md:grid-cols-[60%_40%] md:grid-rows-1 lg:grid-cols-[15%_50%_35%] lg:grid-rows-1">
          <div className="hidden lg:inline-block">
            <ChatSidebar />
          </div>
          <div className="hidden overflow-hidden border-2 border-gray-300 md:inline-block lg:inline-block">
            <PdfContainer pdf={pdf} />
          </div>
          <div className="overflow-hidden border-2 border-gray-300 md:h-full lg:h-full">
            <ChatContainer message="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatPage
