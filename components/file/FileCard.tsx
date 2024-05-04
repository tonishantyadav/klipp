import { File } from '@prisma/client'
import { DotsHorizontalIcon, FileTextIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import Link from 'next/link'
import { Card, CardFooter, CardHeader } from '../ui/card'

var randomColor = require('randomcolor')

const FileCard = ({ file }: { file: File }) => {
  const color = randomColor({
    luminosity: 'dark',
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <FileTextIcon
            className="h-5 w-5"
            style={{
              color: color,
            }}
          />
          <Link
            className="text-lg font-semibold text-slate-700/90 hover:text-slate-500 hover:underline hover:underline-offset-1"
            href={`/dashboard/file/${file.id}`}
          >
            {file.name}
          </Link>
        </div>
        <DotsHorizontalIcon />
      </CardHeader>
      <CardFooter className="flex justify-end">
        <span className="text-sm">
          {format(new Date(file.createdAt), 'MM YYY')}
        </span>
      </CardFooter>
    </Card>
  )
}

export default FileCard
