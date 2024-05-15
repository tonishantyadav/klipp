import { PdfRenderer } from '@/components/chat/PdfRenderer'
import { File } from '@prisma/client'
import { FileTextIcon } from '@radix-ui/react-icons'

export const FileContainer = ({ file }: { file: File }) => {
  return (
    <div className="flex h-full flex-col gap-2 overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-gray-300 p-2">
        <FileTextIcon className="text-blue-600" />
        <span className="text-sm text-zinc-700">
          {file.name.length > 64 ? `${file.name.slice(0, 64)}...` : file.name}
        </span>
      </div>
      <div className="h-full overflow-hidden">
        <PdfRenderer fileUrl={file.url} />
      </div>
    </div>
  )
}
