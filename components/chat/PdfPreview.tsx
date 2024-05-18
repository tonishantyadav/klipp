'use client'

import { Topbar } from '@/components/pdf-render'
import { Loader } from '@/components/ui/loader'
import { usePdfStore } from '@/store/PdfStore'
import { File } from '@prisma/client'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { useResizeDetector } from 'react-resize-detector'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const PdfPreview = ({ file }: { file: File }) => {
  const { ref, width, height } = useResizeDetector()
  const { numPages, currentPage, scale, isLoading, setNumPages, setIsLoading } =
    usePdfStore()

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
        {/* {!isLoading && <Topbar fileName={file.name} />} */}
        <div className="h-full overflow-hidden">
          <div ref={ref} className="flex h-full flex-col overflow-auto">
            <Document
              file={file.url}
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
