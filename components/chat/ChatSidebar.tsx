import { ChatHistory } from '@/components/chat'
import { Button } from '@/components/ui/button'
import { Pdf } from '@prisma/client'
import { CirclePlus, History, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'

export const ChatSidebar = ({ pdf }: { pdf: Pdf }) => {
  return (
    <div className="flex h-full w-full flex-col p-2">
      <div className="flex flex-col gap-1.5">
        <Button
          className="flex w-full items-center gap-1.5 border  font-medium text-slate-800/90"
          variant="outline"
        >
          <CirclePlus className="h-4 w-4" />
          <span>New Chat</span>
        </Button>
        <Link href="/dashboard">
          <Button className="text-md flex w-full items-center gap-1  bg-purple-800 hover:bg-purple-700">
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </Button>
        </Link>
      </div>
      <div className="my-5 flex flex-grow flex-col gap-1.5 overflow-hidden">
        <div className="flex items-center gap-1 font-medium text-slate-800/90">
          <History className="h-4 w-4" />
          <span>Recent</span>
        </div>
        <div className="h-0 flex-grow overflow-auto">
          <ChatHistory pdfId={pdf.id} />
        </div>
      </div>
    </div>
  )
}
