import { File } from '@prisma/client'
import { FileTextIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Card, CardHeader } from '@/components/ui/card'

var randomColor = require('randomcolor')

const FileCard = ({ file }: { file: File }) => {
  const color = randomColor({
    luminosity: 'dark',
  })

  return (
    <Card className="mx-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <CardHeader className="flex flex-row items-center">
        <div className="flex items-center gap-2">
          <FileTextIcon
            className="h-4 w-4"
            style={{
              color: color,
            }}
          />
          <Link href={`/dashboard/file/${file.id}`}>{file.name}</Link>
        </div>
      </CardHeader>
    </Card>
  )
}

export default FileCard
