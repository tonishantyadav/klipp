import { ChatContainer, FileContainer } from '@/components/chat'
import { Button } from '@/components/ui/button'
import { OpenIcon } from '@/components/ui/icon'
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

  const message = ''

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col">
        <div className="inline-flex justify-end pr-3 md:hidden lg:hidden">
          <Button className="flex gap-1.5">
            <span>Open</span>
            <OpenIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="mb-5 grid h-screen grid-cols-1 grid-rows-2 gap-2.5 rounded-2xl p-2 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1">
          <div className="hidden h-full overflow-hidden rounded-2xl border-2 border-gray-300 md:inline-block lg:inline-block">
            <FileContainer file={file} />
          </div>
          <div className="h-screen overflow-hidden rounded-2xl border-2 border-gray-300 md:h-full lg:h-full">
            <ChatContainer message={message} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatPage
