'use client'

import { Button } from '@/components/ui/button'
import { SendIcon } from '@/components/ui/icon'
import { Textarea } from '@/components/ui/textarea'
import { usePdfStore } from '@/store/PdfStore'

export const MessageInput = () => {
  const { isLoading } = usePdfStore()

  return (
    <div className="relative mb-2">
      <Textarea
        rows={1}
        maxRows={4}
        autoFocus
        placeholder="What's in your mind?"
        className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch resize-none py-3 pr-12 text-base"
      />
      <Button
        className="absolute bottom-1.5 right-2.5"
        size="icon"
        disabled={isLoading}
      >
        <SendIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
