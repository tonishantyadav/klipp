'use client'

import { FileDropzoneBody, ShowUploadedFile } from '@/components/file'
import { useFileOnDrop } from '@/hooks/file'
import { useDropzone } from 'react-dropzone'

export const FileDropzone = () => {
  const { onDrop, isUploading, uploadProgress, file } = useFileOnDrop()
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    accept: { 'application/pdf': ['.pdf'] },
  })

  return (
    <>
      {file ? (
        <ShowUploadedFile
          file={file}
          isUploading={isUploading}
          uploadProgress={uploadProgress}
        />
      ) : (
        <FileDropzoneBody
          open={open}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
        />
      )}
    </>
  )
}
