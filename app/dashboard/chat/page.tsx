import { ChatContainer, FileContainer } from '@/components/chat'
import ToastContainer from '@/components/ui/toast'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'

const ChatPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string }
}) => {
  const file = await prisma.file.findUnique({
    where: { id: searchParams?.file },
  })
  if (!file) notFound()

  return (
    <>
      <ToastContainer />
      <div className="m-3 grid h-screen grid-cols-1 grid-rows-[60%_40%] gap-2.5 rounded-2xl p-2 md:grid-cols-[60%_40%] md:grid-rows-1 lg:grid-cols-[60%_40%] lg:grid-rows-1">
        <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-300">
          <FileContainer file={file} />
        </div>
        <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-300">
          <ChatContainer />
        </div>
      </div>
    </>
  )
}

export default ChatPage
