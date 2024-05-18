import { Button } from '@/components/ui/button'
import { UploadCloudIcon } from '@/components/ui/icon'
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
      <UploadCloudIcon className="text-blue-600" />
      <span className="text-xl font-medium">Drop a PDF file</span>
      <span>or</span>
      <Button className="my-2" onClick={open}>
        Browse
      </Button>
    </div>
  )
}
