import FileDeleteDialog from '@/components/file/FileDeleteDialog'
import FileEditDialog from '@/components/file/FileEditDialog'
import { Card, CardHeader } from '@/components/ui/card'
import { File } from '@prisma/client'
import { FileTextIcon } from '@radix-ui/react-icons'
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
        <div className="flex gap-2 opacity-0 group-hover:opacity-100">
          <FileEditDialog file={file} />
          <FileDeleteDialog file={file} />
        </div>
      </CardHeader>
    </Card>
  )
}
