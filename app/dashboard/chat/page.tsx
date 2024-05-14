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
      <div className="m-5 grid h-screen grid-cols-1 rounded-lg border-2 border-gray-300 md:grid-cols-[60%_40%] lg:grid-cols-[60%_40%]">
        <div>
          <FileContainer />
        </div>
        <div>
          <ChatContainer />
        </div>
      </div>
    </>
  )
}

export default ChatPage
