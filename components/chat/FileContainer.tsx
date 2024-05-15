import { PdfRenderer } from '@/components/chat/PdfRenderer'
import { File } from '@prisma/client'

export const FileContainer = ({ file }: { file: File }) => {
  return <PdfRenderer file={file} />
}
