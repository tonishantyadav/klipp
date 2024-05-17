'use client'

import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { usePdfStore } from '@/store/PdfStore'

export const MessageInput = () => {
  const { isLoading } = usePdfStore()

  return (
    <div>
      <Textarea placeholder="What's in your mind?" disabled={isLoading} />
    </div>
  )
}
