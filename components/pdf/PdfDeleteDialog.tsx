'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { usePdfDelete } from '@/hooks/pdf'
import { Pdf } from '@prisma/client'
import { TrashIcon } from '@radix-ui/react-icons'
import BeatLoader from 'react-spinners/BeatLoader'

export const PdfDeleteDialog = ({ pdf }: { pdf: Pdf }) => {
  const deletePdf = usePdfDelete()

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <TrashIcon className="text-destructive" />
      </AlertDialogTrigger>
      <AlertDialogContent className="w-80 rounded-lg md:w-full lg:w-full">
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your file
          and remove your conversation from our servers.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => deletePdf.mutateAsync(pdf.id)}>
            {deletePdf.isPending ? (
              <BeatLoader size={5} color="white" />
            ) : (
              'Continue'
            )}{' '}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
