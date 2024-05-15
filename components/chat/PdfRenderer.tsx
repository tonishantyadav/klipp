'use client'

import { Topbar } from '@/components/pdf-render'
import { Loader } from '@/components/ui/loader'
import { File } from '@prisma/client'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { useResizeDetector } from 'react-resize-detector'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const PdfRenderer = ({ file }: { file: File }) => {
  const { ref, width, height } = useResizeDetector()
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [scale, setScale] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setIsLoading(false)
    setNumPages(numPages)
  }

  return (
    <>
      {isLoading && (
        <div className="flex h-full flex-col items-center justify-center">
          <Loader />
        </div>
      )}
      <div className="flex h-full flex-col gap-1.5 overflow-hidden">
        {!isLoading && (
          <Topbar
            file={file}
            numPages={numPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setScale={setScale}
          />
        )}
        <div className="h-full overflow-hidden">
          <div ref={ref} className="flex h-full flex-col overflow-auto">
            <Document
              file={file.url}
              onLoadSuccess={onLoadSuccess}
              loading={null}
            >
              <Page
                key={`page_${currentPage}`}
                pageNumber={currentPage}
                width={width}
                height={height}
                loading={null}
                scale={scale}
              />
            </Document>
          </div>
        </div>
      </div>
    </>
  )
}
