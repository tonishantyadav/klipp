import { PdfPreview } from '@/components/chat/PdfPreview'
import { File } from '@prisma/client'

export const PdfContainer = ({ file }: { file: File }) => {
  return <PdfPreview file={file} />
}
