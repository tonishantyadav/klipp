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
  const words = file.name.split(' ')
  const displayName = words.length > 2 ? `${words[0]} ${words[1]}` : file.name

  return (
    <Card className="group cursor-pointer">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileTextIcon
              style={{
                color: color,
              }}
            />
            <Link
              href={`/dashboard/files/${file.id}`}
              className="text-md truncate text-slate-700/90"
            >
              {displayName}
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
