'use client'

import { FileCard } from '@/components/file/FileCard'
import { useFiles } from '@/hooks/file/useFiles'
import { File } from '@prisma/client'
import { RocketIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const FileContainer = () => {
  const { data: response, isSuccess, isLoading } = useFiles()
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    if (isSuccess) setFiles(response.data)
  }, [response, isSuccess])

  return (
    <div className="boder-green-600 mx-3 mb-5 flex h-96 flex-col items-center justify-center rounded-lg border bg-gray-100/60 ring-1 ring-inset ring-gray-900/10">
      {isLoading ? (
        <ClipLoader color="gray" />
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
    <div className="hide-scrollbar grid h-full grid-cols-1 gap-x-2 gap-y-4 overflow-y-auto px-2.5 py-6 md:grid-cols-2 lg:grid-cols-3">
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

export default FileContainer
