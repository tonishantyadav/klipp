import { PdfView } from '@/components/pdf/PdfView'
import { Pdf } from '@prisma/client'

export const PdfContainer = ({ pdf }: { pdf: Pdf }) => {
  return <PdfView pdf={pdf} />
}
