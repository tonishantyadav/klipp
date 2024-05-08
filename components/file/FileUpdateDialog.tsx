'use client'

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
import { Input } from '@/components/ui/input'
import { useFileUpdate } from '@/hooks/file'
import { File } from '@prisma/client'
import { Pencil2Icon } from '@radix-ui/react-icons'
import { ChangeEvent, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

export const FileUpdateDialog = ({ file }: { file: File }) => {
  const fileUpdate = useFileUpdate()
  const [fileName, setFileName] = useState('')

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Pencil2Icon className="text-primary" />
      </AlertDialogTrigger>
      <AlertDialogContent className="w-80 rounded-lg md:w-full lg:w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>Edit your file name</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently update your file
            name and remove the old file name from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          placeholder={file.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFileName(e.target.value)
          }
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={!fileName}
            onClick={() =>
              fileUpdate.mutateAsync({ id: file.id, name: fileName })
            }
          >
            {fileUpdate.isPending ? (
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
