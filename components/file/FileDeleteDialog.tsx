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
import { useFileDelete } from '@/hooks/file/useFileDelete'
import { File } from '@prisma/client'
import { TrashIcon } from '@radix-ui/react-icons'
import BeatLoader from 'react-spinners/BeatLoader'

const FileDeleteDialog = ({ file }: { file: File }) => {
  const deleteFile = useFileDelete()

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <TrashIcon className="text-destructive" />
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
          <AlertDialogAction
            onClick={async () => deleteFile.mutateAsync(file.id)}
          >
            {deleteFile.isPending ? (
              <BeatLoader size={5} color="white" />
            ) : (
              'Continue'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default FileDeleteDialog
