import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { File } from '@prisma/client'
import { Pencil2Icon } from '@radix-ui/react-icons'

const FileDeleteDialog = ({ file }: { file: File }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Pencil2Icon className=" text-primary" />
      </AlertDialogTrigger>
      <AlertDialogContent className="w-80 rounded-lg md:w-full lg:w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your file
            and remove your conversation from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default FileDeleteDialog
