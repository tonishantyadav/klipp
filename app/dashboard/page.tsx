import Container from '@/components/Container'
import { RecentUploads, Dropzone } from '@/components/dashboard'
import ToastContainer from '@/components/ui/toast'

const DashboardPage = () => {
  return (
    <>
      <ToastContainer />
      <Container>
        <div className="mb-5 mt-20 grid gap-2 bg-neutral-50/80 md:grid-cols-2 lg:grid-cols-2">
          <Dropzone />
          <RecentUploads />
        </div>
      </Container>
    </>
  )
}

export default DashboardPage
