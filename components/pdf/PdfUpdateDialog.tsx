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
import { Input } from '@/components/ui/input'
import { usePdfUpdate } from '@/hooks/pdf'
import { Pdf } from '@prisma/client'
import { Pencil2Icon } from '@radix-ui/react-icons'
import { ChangeEvent, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

export const PdfUpdateDialog = ({ pdf }: { pdf: Pdf }) => {
  const pdfUpdate = usePdfUpdate()
  const [fileName, setFileName] = useState('')

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Pencil2Icon className="text-primary" />
      </AlertDialogTrigger>
      <AlertDialogContent className="w-80 rounded-lg md:w-full lg:w-full">
        <AlertDialogTitle>Edit your file name</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently update your file
          name and remove the old file name from our servers.
        </AlertDialogDescription>
        <Input
          placeholder={pdf.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFileName(e.target.value)
          }
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={!fileName}
            onClick={() =>
              pdfUpdate.mutateAsync({ id: pdf.id, name: fileName })
            }
          >
            {pdfUpdate.isPending ? (
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
