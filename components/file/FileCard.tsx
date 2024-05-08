import FileDeleteDialog from '@/components/file/FileDeleteDialog'
import FileEditDialog from '@/components/file/FileEditDialog'
import { Card, CardHeader } from '@/components/ui/card'
import { File } from '@prisma/client'
import { FileTextIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'

let randomColor = require('randomcolor')

export const FileCard = ({ file }: { file: File }) => {
  const [fileName, setFileName] = useState(file.name)

  useEffect(() => {
    setFileName(() =>
      fileName.length > 20 ? `${fileName.slice(0, 16)}...` : fileName
    )
  }, [fileName])

  const color = randomColor({
    luminosity: 'dark',
  })

  return (
    <Card className="group mx-2 cursor-pointer">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileTextIcon
              style={{
                color: color,
              }}
            />
            <Link href={`/dashboard/files/${file.id}`}>{fileName}</Link>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100">
            <FileEditDialog file={file} />
            <FileDeleteDialog file={file} />
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
