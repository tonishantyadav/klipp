import { Button } from '@/components/ui/button'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { SetStateAction } from 'react'

export const Navigation = ({
  numPages,
  currentPage,
  setCurrentPage,
}: {
  numPages: number
  currentPage: number
  setCurrentPage: (currentPage: SetStateAction<number>) => void
}) => {
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
