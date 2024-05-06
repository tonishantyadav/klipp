import Container from '@/components/Container'
import UploadFileDialog from '@/components/UploadFileDialog'
import FileContainer from '@/components/file/FIleContainer'
import { SearchInput } from '@/components/ui/search-input'
import ToastContainer from '@/components/ui/toast'

const DashboardPage = () => {
  return (
    <>
      <ToastContainer />
      <Container className="grid grid-rows-[20rem,1fr]">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-2 p-3">
            <h1 className="text-center text-2xl font-medium text-slate-700/90 md:text-4xl lg:text-5xl">
              Welcome to your Klipp Dashboard
            </h1>
            <p className="text-center text-sm text-zinc-500 md:text-lg lg:text-lg">
              Manage your conversation with ease.
            </p>
          </div>
          <SearchInput />
        </div>
        <div className="grid grid-rows-[auto,1fr]">
          <div className="m-3 flex items-center justify-end rounded-lg ">
            <div className="rounded-xl border bg-gray-100/60 p-2 ring-1 ring-inset ring-gray-900/10">
              <UploadFileDialog />
            </div>
          </div>
          <FileContainer />
        </div>
      </Container>
    </>
  )
}

export default DashboardPage
