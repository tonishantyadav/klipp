import { Container } from '@/components/Container'
import UploadPdfFileButton from '@/components/UploadPdfFileButton'

const DashboardPage = () => {
  return (
    <Container className="grid h-screen grid-rows-[5rem,1fr] border border-black">
      <div className="flex items-center justify-between border border-green-500 px-3">
        <h1 className="text-3xl font-medium text-slate-700/90">My Uploads</h1>
        <UploadPdfFileButton />
      </div>
      <div className="border border-red-500 px-3">
        <h1>Hello World</h1>
      </div>
    </Container>
  )
}

export default DashboardPage
