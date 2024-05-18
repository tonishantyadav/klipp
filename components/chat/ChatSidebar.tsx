'use client'

import { CirclePlus, Home, LayoutDashboard } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export const ChatSidebar = () => {
  const router = useRouter()

  return (
    <div className="flex h-full w-full flex-col p-2">
      <Button
        className="flex w-full items-center gap-1.5 border-2 border-dashed border-blue-300 text-blue-600"
        variant="outline"
      >
        <CirclePlus className="h-4 w-4 text-blue-600" />
        <span>New Chat</span>
      </Button>
      <div className="my-2 flex-grow flex-col border">
        <span className="font-medium text-slate-600/90">History</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <Button
          className="flex items-center gap-1.5"
          onClick={() => router.push('/')}
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Button>
        <Button
          className="flex items-center gap-1.5 bg-purple-800 hover:bg-purple-700"
          onClick={() => router.push('/dashboard')}
        >
          <LayoutDashboard className="h-4 w-4" />
          <span>Dashboard</span>
        </Button>
      </div>
    </div>
  )
}
