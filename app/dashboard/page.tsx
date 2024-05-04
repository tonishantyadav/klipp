import { Container } from '@/components/Container'
import UploadFileDialog from '@/components/UploadFileDialog'
import { SearchInput } from '@/components/ui/search-input'

const DashboardPage = () => {
  return (
    <Container className="grid grid-rows-[20rem,1fr]">
      <div className="flex flex-col items-center justify-center gap-5 border border-pink-500 ">
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
      <div className="grid grid-rows-[auto,1fr] border border-blue-600">
        <div className="m-2 flex justify-end px-2">
          <UploadFileDialog />
        </div>
        <div></div>
      </div>
    </Container>
  )
}

export default DashboardPage
