'use client'

import { Container } from '@/components/Container'
import UploadFileDialog from '@/components/UploadFileDialog'
import FileCard from '@/components/file/FileCard'
import { SearchInput } from '@/components/ui/search-input'
import { useFiles } from '@/hooks/file/useFiles'
import { File } from '@prisma/client'
import { RocketIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'

const DashboardPage = () => {
  const { data: response, isLoading, isSuccess, isError } = useFiles()
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    if (isSuccess) setFiles(response.data)
  }, [response, isSuccess])

  return (
    <Container className="grid grid-rows-[20rem,1fr]">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-2 p-3">
          <h1 className="text-center text-2xl font-medium text-slate-700/90 md:text-4xl lg:text-5xl">
            Welcome to your klipp dashboard
          </h1>
          <p className="text-center text-sm text-zinc-500 md:text-lg lg:text-lg">
            Manage your conversation with ease.
          </p>
        </div>
        <SearchInput />
      </div>
      <div className="grid grid-rows-[auto,1fr]">
        <div className="m-3 flex items-center justify-end rounded-lg ">
          <div className="rounded-xl border bg-gray-100/60 p-3 ring-1 ring-inset ring-gray-900/10">
            <UploadFileDialog />
          </div>
        </div>
        <div className="mx-3 mb-5 rounded-lg bg-gray-100/60 ring-1 ring-inset ring-gray-900/10">
          {files.length ? (
            <FileContainer files={files} />
          ) : (
            <EmptyFileContainer />
          )}
        </div>
      </div>
    </Container>
  )
}

const FileContainer = ({ files }: { files: File[] }) => {
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

export default DashboardPage
