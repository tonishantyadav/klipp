'use client'

import { usePdfUpload } from '@/hooks/pdf'
import { useDropzone } from 'react-dropzone'
import { PdfDropzoneBody } from './PdfDropzoneBody'
import { PdfUploadPreview } from './PdfUploadPreview'
import { usePdfUploadStore } from '@/store/PdfUploadStore'

export const PdfDropzone = () => {
  const { onDrop } = usePdfUpload()
  const { file } = usePdfUploadStore()
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    accept: { 'application/pdf': ['.pdf'] },
  })

  return (
    <div className="mx-5 my-5 h-full rounded-2xl border-2 border-dashed border-gray-300 bg-blue-50/95">
      {file ? (
        <PdfUploadPreview />
      ) : (
        <PdfDropzoneBody
          open={open}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
        />
      )}
    </div>
  )
}
