'use client'

import { FileCard } from '@/components/file/FileCard'
import { useFiles } from '@/hooks/file/useFiles'
import { File } from '@prisma/client'
import { RocketIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'

const FileContainer = () => {
  const { data: response, isSuccess, isLoading } = useFiles()
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    if (isSuccess) setFiles(response.data)
  }, [response, isSuccess])

  return (
    <div className="mx-3 mb-5 rounded-lg bg-gray-100/60 ring-1 ring-inset ring-gray-900/10">
      {isLoading ? (
        <FileContainerSkeleton />
      ) : files.length ? (
        <FiledFileContainer files={files} />
      ) : (
        <EmptyFileContainer />
      )}
    </div>
  )
}

const FiledFileContainer = ({ files }: { files: File[] }) => {
  return (
    <div className="m-3 grid grid-cols-1 gap-x-2 gap-y-4 p-3 md:grid-cols-2 lg:grid-cols-3">
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
        <span className="text-2xl font-medium text-slate-500/40">
          Umm nothing is cooked yet!
        </span>
        <span className="text-sm text-slate-500/35">
          Start your cooking by uploading a file.
        </span>
      </div>
      <RocketIcon className="h-10 w-10 text-slate-500/40" />
    </div>
  )
}

const FileContainerSkeleton = () => {
  return (
    <div className="flex h-[200px] flex-col items-center justify-center">
      <PacmanLoader color="#cbd5e1" size={20} />
    </div>
  )
}

export default FileContainer
