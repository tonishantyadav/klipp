'use client'

import { Loader } from '@/components/ui/loader'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { useResizeDetector } from 'react-resize-detector'
import { Button } from '@/components/ui/button'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const PdfRenderer = ({ fileUrl }: { fileUrl: string }) => {
  const { ref, width, height } = useResizeDetector()
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setIsLoading(false)
    setNumPages(numPages)
  }

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = Math.max(prevPage - 1, 1)
      return newPage
    })
  }

  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = Math.min(prevPage + 1, numPages)
      return newPage
    })
  }

  return (
    <>
      {isLoading && (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Loader />
        </div>
      )}
      <div
        ref={ref}
        className="hide-scrollbar flex h-full flex-col overflow-auto"
      >
        {!isLoading && (
          <div className="flex items-center justify-between p-2">
            <Button
              className="rounded-full"
              variant="outline"
              size="icon"
              disabled={currentPage <= 1}
              onClick={goToPrevPage}
            >
              <ArrowLeftIcon />
            </Button>
            <span className="text-sm text-zinc-700">{`Page ${currentPage} of ${numPages}`}</span>
            <Button
              className="rounded-full"
              variant="outline"
              size="icon"
              disabled={currentPage >= numPages}
              onClick={goToNextPage}
            >
              <ArrowRightIcon />
            </Button>
          </div>
        )}
        <Document file={fileUrl} onLoadSuccess={onLoadSuccess} loading={null}>
          <Page
            key={`page_${currentPage}`}
            pageNumber={currentPage}
            width={width}
            height={height}
            loading={null}
          />
        </Document>
      </div>
    </>
  )
}
