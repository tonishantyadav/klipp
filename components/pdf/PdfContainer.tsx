import { Pdf } from '@prisma/client'
import { PdfView } from '@/components/pdf'

export const PdfContainer = ({ pdf }: { pdf: Pdf }) => {
  return <PdfView pdf={pdf} />
}
