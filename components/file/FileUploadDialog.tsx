import { FileDropzone } from '@/components/file'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { UploadIcon } from '@radix-ui/react-icons'

export const FileUploadDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg flex space-x-1">
          <UploadIcon className="h-4 w-4" />
          <span>Upload</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex w-80 flex-col rounded-lg md:w-full lg:w-full">
        <FileDropzone />
      </DialogContent>
    </Dialog>
  )
}
