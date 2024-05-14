'use client'

import { Document, Page, pdfjs } from 'react-pdf'
import { useResizeDetector } from 'react-resize-detector'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const PdfRenderer = ({ fileUrl }: { fileUrl: string }) => {
  const { ref, width, height } = useResizeDetector()

  return (
    <div ref={ref} className="flex h-full overflow-auto p-2">
      <Document file={fileUrl}>
        <Page pageNumber={1} height={height} width={width} />
      </Document>
    </div>
  )
}
