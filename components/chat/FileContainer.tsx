import React from 'react'
import { PdfRenderer } from './PdfRenderer'
import { File } from '@prisma/client'

export const FileContainer = ({ file }: { file: File }) => {
  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden">
      <div className="border p-2">Topbar</div>
      <div className="h-full overflow-hidden">
        <PdfRenderer fileUrl={file.url} />
      </div>
    </div>
  )
}
