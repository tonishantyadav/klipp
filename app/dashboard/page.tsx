import { Container } from '@/components/Container'
import UploadFileDialog from '@/components/UploadFileDialog'
import FileCard from '@/components/file/FileCard'
import { SearchInput } from '@/components/ui/search-input'
import prisma from '@/prisma/client'

const DashboardPage = async () => {
  const files = await prisma.file.findMany()

  return (
    <Container className="grid grid-rows-[20rem,1fr]">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-2 p-3">
          <h1 className="text-center text-2xl font-medium text-slate-700/90 md:text-4xl lg:text-4xl">
            Welcome to your klipp dashboard
          </h1>
          <p className="text-center text-sm text-zinc-500 md:text-lg lg:text-lg">
            Begin your conversation by uploading a file.
          </p>
        </div>
        <SearchInput />
      </div>
      <div className="grid grid-rows-[auto,1fr]">
        <div className="m-2 flex items-center justify-end p-2">
          <UploadFileDialog />
        </div>
        <div className="grid grid-cols-1 gap-6 px-3 pb-10 md:grid-cols-2 lg:grid-cols-3">
          {files && files.map((file) => <FileCard file={file} key={file.id} />)}
        </div>
      </div>
    </Container>
  )
}

export default DashboardPage
