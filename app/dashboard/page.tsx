import Container from '@/components/Container'
import { FileContainer } from '@/components/file'
import { SearchInput } from '@/components/ui/search-input'
import { FileUploadDialog } from '@/components/file'
import ToastContainer from '@/components/ui/toast'

const DashboardPage = () => {
  return (
    <>
      <ToastContainer />
      <Container className="grid grid-rows-[20rem,1fr]">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-2 p-3">
            <h1 className="text-center text-4xl font-bold text-slate-700/90 md:text-4xl lg:text-5xl">
              Welcome to your <span className="text-primary">Dashboard</span>
            </h1>
            <p className="text-center text-sm text-zinc-500 md:text-lg lg:text-lg">
              Manage your files and conversations with ease.
            </p>
          </div>
          <SearchInput />
        </div>
        <div className="grid grid-rows-[auto,1fr]">
          <div className="m-3 flex items-center justify-end rounded-lg ">
            <FileUploadDialog />
          </div>
          <FileContainer />
        </div>
      </Container>
    </>
  )
}

export default DashboardPage
