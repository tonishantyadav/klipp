'use client'

import { Navigation, Scaling } from '@/components/pdf-render'
import { FileTextIcon } from '@radix-ui/react-icons'

export const Topbar = ({ fileName }: { fileName: string }) => {
  return (
    <div className="flex flex-col gap-1.5 border-b border-gray-300 p-2">
      <div className="flex justify-between">
        <div className="hidden items-center gap-1.5 pl-2.5 md:inline-flex lg:inline-flex">
          <FileTextIcon className="text-blue-600" />
          <span className="text-sm text-zinc-700">
            {fileName.length > 64 ? `${fileName.slice(0, 64)}...` : fileName}
          </span>
        </div>
        <Scaling />
      </div>
      <Navigation />
    </div>
  )
}
