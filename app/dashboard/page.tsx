import Container from '@/components/Container'
import { Dropzone, RecentUploads } from '@/components/dashboard'
import ToastContainer from '@/components/ui/toast'
import prisma from '@/prisma/client'
import { calculateUploadsPerDay } from '@/utils/UploadsCount'
import dynamic from 'next/dynamic'
import BeatLoader from 'react-spinners/BeatLoader'

const Insights = dynamic(
  () => import('@/components/dashboard/Insights').then((mod) => mod.Insights),
  {
    loading: () => <BeatLoader color="gray" />,
    ssr: false,
  }
)

const DashboardPage = async () => {
  const files = await prisma.file.findMany()
  const result = calculateUploadsPerDay(files)

  return (
    <>
      <ToastContainer />
      <Container className="grid gap-2">
        <div className="mt-20 grid gap-2 bg-neutral-50/80 md:grid-cols-2 lg:grid-cols-2">
          <Dropzone />
          <RecentUploads />
        </div>
        <div className="hide-scrollbar mb-20 flex w-full items-center justify-center overflow-y-auto rounded-md border-2 border-gray-300 bg-neutral-50/80 p-2 shadow-sm">
          <Insights />
        </div>
      </Container>
    </>
  )
}

export default DashboardPage
