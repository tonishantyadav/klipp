'use client'

import { Document, Page, pdfjs } from 'react-pdf'
import { useResizeDetector } from 'react-resize-detector'
import { Loader } from '@/components/ui/loader'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { useState } from 'react'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const PdfRenderer = ({ fileUrl }: { fileUrl: string }) => {
  const { ref, width, height } = useResizeDetector()
  const [numPages, setNumPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setIsLoading(false)
    setNumPages(numPages)
  }

  return (
    <div ref={ref} className="flex h-full overflow-y-auto overflow-x-hidden">
      {isLoading && (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Loader />
        </div>
      )}
      <Document file={fileUrl} onLoadSuccess={onLoadSuccess} loading={null}>
        <div>
          {!isLoading &&
            numPages &&
            Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={width}
                height={height}
                loading={null}
              />
            ))}
        </div>
      </Document>
    </div>
  )
}
