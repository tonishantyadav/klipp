import { Navigation, Scaling } from '@/components/pdf-render'
import { File } from '@prisma/client'
import { FileTextIcon } from '@radix-ui/react-icons'
import { SetStateAction } from 'react'

interface TopbarProps {
  file: File
  numPages: number
  currentPage: number
  setCurrentPage: (currentPage: SetStateAction<number>) => void
  setScale: (scale: SetStateAction<number>) => void
}

export const Topbar = ({
  file,
  numPages,
  currentPage,
  setCurrentPage,
  setScale,
}: TopbarProps) => {
  return (
    <div className="flex flex-col gap-1.5 border-b border-gray-300 p-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-1.5 pl-2.5">
          <FileTextIcon className="text-blue-600" />
          <span className="text-sm text-zinc-700">
            {file.name.length > 64 ? `${file.name.slice(0, 64)}...` : file.name}
          </span>
        </div>
        <Scaling setScale={setScale} />
      </div>
      <Navigation
        numPages={numPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
