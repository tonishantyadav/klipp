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
import { TrashIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useFileDelete } from '@/hooks/file/useFileDelete'
import BeatLoader from 'react-spinners/BeatLoader'

const FileDeleteAlertDialog = ({ id }: { id: string }) => {
  const deleteFile = useFileDelete()

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="flex w-full cursor-pointer items-center space-x-1"
          variant="destructive"
          size="sm"
        >
          {deleteFile.isPending ? (
            <BeatLoader size={5} />
          ) : (
            <>
              <TrashIcon />
              <span>Delete</span>
            </>
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your file
            and remove your conversation from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={async () => deleteFile.mutateAsync(id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default FileDeleteAlertDialog
