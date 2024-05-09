'use client'

import { Button } from '@/components/ui/button'
import { useDropzone } from 'react-dropzone'
import { UploadIcon } from '@radix-ui/react-icons'

export const FileDropzone = () => {
  const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({
    noClick: true,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
    },
  })

  return (
    <div
      {...getRootProps()}
      className="m-2.5 flex h-60 flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-500  bg-gray-200/60  text-zinc-500"
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-2">
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
          <span className="text-lg font-medium">Drag n Drop here</span>
        </div>
      </div>
      <span className="font-medium">or</span>
      <Button
        className="my-2 flex gap-1 transition hover:scale-110"
        onClick={open}
      >
        <span>Browse</span>
        <UploadIcon />
      </Button>
    </div>
  )
}

const ALLOWED_EXTENSIONS = ['pdf']
