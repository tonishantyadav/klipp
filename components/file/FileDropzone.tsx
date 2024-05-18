'use client'

import { FileDropzoneBody, ShowUploadedFile } from '@/components/file'
import { useFileOnDrop } from '@/hooks/file'
import { useDropzone } from 'react-dropzone'

export const FileDropzone = () => {
  const { onDrop, isUploading, isUploadDone, uploadProgress, file } =
    useFileOnDrop()
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    accept: { 'application/pdf': ['.pdf'] },
  })

  return (
    <div className="mx-5 my-5 h-full rounded-2xl border-2 border-dashed border-gray-300 bg-blue-50/95">
      {file ? (
        <ShowUploadedFile
          file={file}
          isUploading={isUploading}
          isUploadDone={isUploadDone}
          uploadProgress={uploadProgress}
        />
      ) : (
        <FileDropzoneBody
          open={open}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
        />
      )}
    </div>
  )
}
