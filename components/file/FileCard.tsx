import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { File } from '@prisma/client'
import {
  DotsHorizontalIcon,
  FileTextIcon,
  Pencil1Icon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import FileDeleteAlertDialog from './FileDeleteAlertDialog'

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
  return (
    <Popover>
      <PopoverTrigger>
        <DotsHorizontalIcon />
      </PopoverTrigger>
      <PopoverContent className="w-[200px] space-y-1" side="right">
        <Button
          className="flex w-full cursor-pointer items-center space-x-1"
          size="sm"
        >
          <Pencil1Icon />
          <span>Edit</span>
        </Button>
        <FileDeleteAlertDialog id={file.id} />
      </PopoverContent>
    </Popover>
  )
}
