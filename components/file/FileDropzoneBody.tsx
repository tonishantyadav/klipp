import { Button } from '@/components/ui/button'
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone'

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
      className="flex h-full flex-col items-center justify-center rounded-lg text-zinc-400/95"
    >
      <input {...getInputProps()} />
      <UploadCloudSvg />
      <span className="text-xl font-medium">Drag and Drop</span>
      <span>or</span>
      <Button className="my-2" onClick={open}>
        Browse
      </Button>

      <span className="text-sm font-medium">Upload PDF upto 4mb</span>
    </div>
  )
}

const UploadCloudSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
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
    </svg>
  )
}
