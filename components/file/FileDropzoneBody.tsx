import React from 'react'
import { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone'
import { Button } from '@/components/ui/button'

export const FileDropzoneBody = ({
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
