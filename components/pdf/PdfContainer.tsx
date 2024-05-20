import { PdfView } from '@/components/pdf'
import { Pdf } from '@prisma/client'

export const PdfContainer = ({ pdf }: { pdf: Pdf }) => {
  return <PdfView pdf={pdf} />
}
