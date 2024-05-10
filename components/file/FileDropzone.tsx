'use client'

import { FileDropzoneBody, ShowUploadedFile } from '@/components/file'
import { useFileOnDrop } from '@/hooks/file'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export const FileDropzone = () => {
  const { isUploading, onDrop } = useFileOnDrop()
  const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    accept: { 'application/pdf': ['.pdf'] },
  })
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    if (acceptedFiles && acceptedFiles.length && acceptedFiles[0])
      setFile(acceptedFiles[0])
  }, [acceptedFiles])

  return (
    <>
      {file ? (
        <ShowUploadedFile file={file} isUploading={isUploading} />
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
