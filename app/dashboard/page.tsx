import Container from '@/components/Container'
import { Dropzone, RecentUploads } from '@/components/dashboard'
import { LineChartIcon } from '@/components/ui/icon'
import { Loader } from '@/components/ui/loader'
import ToastContainer from '@/components/ui/toast'
import { currentMonthYear } from '@/utils/CurrentMonthYear'
import dynamic from 'next/dynamic'

const MonthlyUploadsGraph = dynamic(
  () =>
    import('@/components/dashboard/MonthlyUploadsGraph').then(
      (mod) => mod.MonthlyUploadsGraph
    ),
  {
    loading: () => (
      <div className="flex h-96 flex-col items-center justify-center">
        <Loader />
      </div>
    ),
    ssr: false,
  }
)

const DashboardPage = () => {
  const { month, year } = currentMonthYear()

  return (
    <>
      <ToastContainer />
      <Container className="grid gap-2">
        <div className="mt-20 grid gap-2 bg-neutral-50/80 md:grid-cols-2 lg:grid-cols-2">
          <Dropzone />
          <RecentUploads />
        </div>
        <div className="hide-scrollbar mb-20 flex w-full items-center justify-center overflow-y-auto rounded-lg border-2 border-gray-300 bg-neutral-50/80 p-2 shadow-sm">
          <div className="flex w-full flex-col">
            <div className="flex items-center justify-between gap-2 p-2 font-medium">
              <div className="flex items-center gap-2 text-slate-700/90">
                <LineChartIcon className="h-5 w-5" />
                <span className="text-2xl">Monthly Uploads</span>
              </div>
              <div className="flex gap-1 text-sm text-slate-500">
                <span>{month}</span>
                <span>{year}</span>
              </div>
            </div>{' '}
            <MonthlyUploadsGraph />
          </div>
        </div>
      </Container>
    </>
  )
}

export default DashboardPage
