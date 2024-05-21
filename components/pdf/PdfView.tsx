'use client'

import { PdfViewScaling } from '@/components/pdf'
import { Loader } from '@/components/ui/loader'
import { usePdfUploadStore } from '@/store/PdfUploadStore'
import { Pdf } from '@prisma/client'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { useResizeDetector } from 'react-resize-detector'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export const PdfView = ({ pdf }: { pdf: Pdf }) => {
  const queryClient = useQueryClient()
  const { ref, width, height } = useResizeDetector()
  const { setFile, setIsUploadingDone, setUploadProgress } = usePdfUploadStore()
  const [isLoading, setIsLoading] = useState(true)
  const [scale, setScale] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [numPages, setNumPages] = useState(0)

  useEffect(() => {
    setFile(null)
    setIsUploadingDone(false)
    setUploadProgress(0)
    queryClient.invalidateQueries({ queryKey: ['pdfs'] })
    queryClient.invalidateQueries({ queryKey: ['chats'] })
    // eslint-disable-next-line
  }, [])

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setIsLoading(false)
    setNumPages(numPages)
  }

  const onScroll = () => {
    if (ref.current && numPages) {
      const scrollTop = ref.current.scrollTop
      const pageHeight = ref.current.scrollHeight / numPages
      const newCurrentPage = Math.floor(scrollTop / pageHeight) + 1
      setCurrentPage(newCurrentPage)
    }
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
          <div className="flex items-center justify-between gap-1.5 border-b border-gray-300 p-2">
            <span className="text-sm text-slate-700/90">
              {currentPage} / {numPages}
            </span>
            <PdfViewScaling setScale={setScale} />
          </div>
        )}
        <div className="h-full overflow-hidden">
          <div
            ref={ref}
            className="scrollbar flex h-full w-full flex-col overflow-auto"
            onScroll={onScroll}
          >
            <Document
              file={pdf.url}
              onLoadSuccess={onLoadSuccess}
              loading={null}
            >
              {!isLoading &&
                numPages &&
                Array.from({ length: numPages }, (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={width}
                    height={height}
                    loading={null}
                    scale={scale}
                  />
                ))}
            </Document>
          </div>
        </div>
      </div>
    </>
  )
}
