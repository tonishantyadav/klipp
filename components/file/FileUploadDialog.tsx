import { FileDropzone } from '@/components/file'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { UploadIcon } from '@radix-ui/react-icons'

export const FileUploadDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex space-x-1">
          <span>Upload</span>
          <UploadIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex w-80 flex-col rounded-lg md:w-full lg:w-full">
        <FileDropzone />
      </DialogContent>
    </Dialog>
  )
}
