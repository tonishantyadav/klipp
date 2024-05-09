'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import {
  DropzoneInputProps,
  DropzoneRootProps,
  useDropzone,
} from 'react-dropzone'

export const FileDropzone = () => {
  const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({
    noClick: true,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
    },
  })
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    if (acceptedFiles && acceptedFiles.length && acceptedFiles[0])
      setFile(acceptedFiles[0])
  }, [acceptedFiles])

  return (
    <>
      {file ? (
        <ShowUploadedFile file={file} />
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

const FileDropzoneBody = ({
  open,
  getRootProps,
  getInputProps,
}: {
  open: () => void

  getRootProps: () => DropzoneRootProps
  getInputProps: () => DropzoneInputProps
}) => {
  return (
    <div
      {...getRootProps()}
      className="m-2.5 flex h-60 flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-500 bg-gray-200/60  py-2  text-zinc-400/95"
    >
      <input {...getInputProps()} />
      <div>
        <div className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-cloud-upload text-blue-600"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M12 12v9" />
            <path d="m16 16-4-4-4 4" />
          </svg>{' '}
          <span className="text-md font-medium">Drag n Drop here</span>
        </div>
      </div>
      <span>or</span>
      <Button className="my-2 flex gap-1" onClick={open}>
        <span>Browse</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-up-from-line"
        >
          <path d="m18 9-6-6-6 6" />
          <path d="M12 3v14" />
          <path d="M5 21h14" />
        </svg>
      </Button>
      <span className="text-xs">Upload PDF upto 5mb</span>
    </div>
  )
}

const ShowUploadedFile = ({ file }: { file: File }) => {
  return (
    <div className="m-2.5 flex h-60 flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-500  bg-gray-200/60  text-zinc-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-file-text text-blue-600"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </svg>
      <span className="px-2 pt-2 text-center text-xs">
        {file.name.length > 30 ? `${file.name.slice(0, 30)}...` : file.name}
      </span>
    </div>
  )
}
