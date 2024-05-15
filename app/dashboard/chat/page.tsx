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
      <div className="m-5 grid h-screen grid-cols-1 gap-5 rounded-lg p-5 md:grid-cols-[60%_40%] lg:grid-cols-[60%_40%]">
        <div className="h-full overflow-hidden rounded-xl border-2 border-gray-300 bg-neutral-50/80 p-2 shadow-sm">
          <FileContainer file={file} />
        </div>
        <div className="h-full overflow-hidden rounded-xl border-2 border-gray-300 bg-neutral-50/80 p-2 shadow-sm">
          <ChatContainer />
        </div>
      </div>
    </>
  )
}

export default ChatPage
