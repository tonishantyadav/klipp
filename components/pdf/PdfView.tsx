'use client'

import { Loader } from '@/components/ui/loader'
import { usePdfUploadStore } from '@/store/PdfUploadStore'
import { usePdfViewStore } from '@/store/PdfViewStore'
import { Pdf } from '@prisma/client'
import { useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { useResizeDetector } from 'react-resize-detector'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const PdfView = ({ pdf }: { pdf: Pdf }) => {
  const { ref, width, height } = useResizeDetector()
  const { file, isUploadingDone, setFile, setIsUploadingDone } =
    usePdfUploadStore()
  const { numPages, currentPage, scale, isLoading, setNumPages, setIsLoading } =
    usePdfViewStore()

  useEffect(() => {
    if (file && isUploadingDone) {
      setFile(null)
      setIsUploadingDone(false)
    }
    // eslint-disable-next-line
  }, [])

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
        <div className="h-full overflow-hidden">
          <div ref={ref} className="flex h-full flex-col overflow-auto">
            <Document
              file={pdf.url}
              onLoadSuccess={onLoadSuccess}
              loading={null}
            >
              {!isLoading && numPages && (
                <Page
                  key={`page_${currentPage}`}
                  pageNumber={currentPage}
                  width={width}
                  height={height}
                  loading={null}
                  scale={scale}
                />
              )}
            </Document>
          </div>
        </div>
      </div>
    </>
  )
}