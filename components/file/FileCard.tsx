import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useFileDelete } from '@/hooks/file/useFileDelete'
import { File } from '@prisma/client'
import {
  DotsHorizontalIcon,
  FileTextIcon,
  Pencil1Icon,
  TrashIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

let randomColor = require('randomcolor')

export const FileCard = ({ file }: { file: File }) => {
  const color = randomColor({
    luminosity: 'dark',
  })

  return (
    <Card className="group mx-2 cursor-pointer">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <FileTextIcon
            className="h-4 w-4"
            style={{
              color: color,
            }}
          />
          <Link href={`/dashboard/file/${file.id}`}>{file.name}</Link>
        </div>
        <div className="opacity-0 group-hover:opacity-100">
          <FileCardOptionDialog file={file} />
        </div>
      </CardHeader>
    </Card>
  )
}

const FileCardOptionDialog = ({ file }: { file: File }) => {
  const deleteFile = useFileDelete()

  const onDelete = async () => {
    await deleteFile.mutateAsync(file.id)
  }

  return (
    <Popover>
      <PopoverTrigger>
        <DotsHorizontalIcon />
      </PopoverTrigger>
      <PopoverContent className=" max-w-fit space-y-1" side="right">
        <Button
          className="flex w-full cursor-pointer items-center space-x-1"
          variant="ghost"
        >
          <Pencil1Icon />
          <span>Edit</span>
        </Button>
        <Button
          className="flex w-full cursor-pointer items-center space-x-1"
          variant="ghost"
          onClick={onDelete}
        >
          <TrashIcon />
          <span>Delete</span>
        </Button>
      </PopoverContent>
    </Popover>
  )
}
