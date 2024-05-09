'use client'

import { FileCard } from '@/components/file/FileCard'
import { useFiles } from '@/hooks/file'
import { File } from '@prisma/client'
import { RocketIcon } from '@radix-ui/react-icons'
import BarLoader from 'react-spinners/BarLoader'

export const FileContainer = () => {
  const { data: files, isLoading } = useFiles()

  return (
    <div className="mx-3 mb-5 grid h-96 rounded-lg border bg-gray-100/60 ring-1 ring-inset ring-gray-900/10">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <div>
            <BarLoader color="gray" />
          </div>
        </div>
      ) : files && files.length ? (
        <FiledFileContainer files={files} />
      ) : (
        <EmptyFileContainer />
      )}
    </div>
  )
}

const FiledFileContainer = ({ files }: { files: File[] }) => {
  return (
    <div className="hide-scrollbar grid h-full grid-cols-1 gap-x-2 gap-y-4 overflow-y-auto border px-3 py-6 md:grid-cols-2 lg:grid-cols-3">
      {files.map((file) => (
        <FileCard file={file} key={file.id} />
      ))}
    </div>
  )
}

const EmptyFileContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-5">
      <div className="flex flex-col items-center">
        <span className="text-center text-xl font-medium text-slate-500/40 md:text-2xl lg:text-2xl">
          Umm nothing is cooked yet!
        </span>
        <span className="text-xs text-slate-500/35 md:text-sm lg:text-sm">
          Start your cooking by uploading a file.
        </span>
      </div>
      <RocketIcon className="h-10 w-10 text-slate-500/40" />
    </div>
  )
}
