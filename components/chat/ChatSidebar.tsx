import { ChatHistory } from '@/components/chat'
import { Button } from '@/components/ui/button'
import { Pdf } from '@prisma/client'
import { CirclePlus, History, Home, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'

export const ChatSidebar = ({ pdf }: { pdf: Pdf }) => {
  return (
    <div className="flex h-full w-full flex-col p-2">
      <Button
        className="flex w-full items-center gap-1.5 border-2 border-dashed font-medium text-slate-700/90"
        variant="ghost"
      >
        <CirclePlus className="h-4 w-4" />
        <span>New Chat</span>
      </Button>
      <div className="my-2 flex flex-grow flex-col gap-1.5 overflow-hidden">
        <div className="flex items-center gap-1 font-medium text-slate-800/90">
          <History className="h-4 w-4" />
          <span>Recent</span>
        </div>
        <div className="h-0 flex-grow overflow-auto">
          <ChatHistory pdfId={pdf.id} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Link href="/">
          <Button className="flex w-full items-center gap-1.5">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button className="flex w-full items-center gap-1.5 bg-purple-800 hover:bg-purple-700">
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
