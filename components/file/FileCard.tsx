import { FileDeleteDialog, FileUpdateDialog } from '@/components/file'
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
    <Card className="group mx-2 w-80 cursor-pointer">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileTextIcon
              style={{
                color: color,
              }}
            />
            <Link href={`/dashboard/files/${file.id}`}>
              {file.name.length > 20
                ? `${file.name.slice(0, 15)}...`
                : file.name}
            </Link>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100">
            <FileUpdateDialog file={file} />
            <FileDeleteDialog file={file} />
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
