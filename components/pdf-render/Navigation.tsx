'use client'

import { Button } from '@/components/ui/button'
import { usePdfViewStore } from '@/store/PdfViewStore'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

export const Navigation = () => {
  const { numPages, currentPage, setCurrentPage } = usePdfViewStore()

  const goToPrevPage = () => {
    const newPage = Math.max(currentPage - 1, 1)
    setCurrentPage(newPage)
  }

  const goToNextPage = () => {
    const newPage = Math.min(currentPage + 1, numPages)
    setCurrentPage(newPage)
  }

  return (
    <div className="flex items-center justify-between">
      <Button
        className="rounded-full"
        disabled={currentPage <= 1}
        variant="outline"
        size="icon"
        onClick={goToPrevPage}
      >
        <ArrowLeftIcon />
      </Button>
      <span className="text-sm text-zinc-700">{`${currentPage} / ${numPages}`}</span>
      <Button
        className="rounded-full"
        disabled={currentPage >= numPages}
        variant="outline"
        size="icon"
        onClick={goToNextPage}
      >
        <ArrowRightIcon />
      </Button>
    </div>
  )
}
