import { Dropzone, RecentUploads } from '@/components/dashboard'
import { DashboardIcon, LineChartIcon } from '@/components/ui/icon'
import { Loader } from '@/components/ui/loader'
import SearchBarSkeleton from '@/components/ui/search-bar-skeleton'
import ToastContainer from '@/components/ui/toast'
import { currentMonthYear } from '@/utils/CurrentMonthYear'
import dynamic from 'next/dynamic'

const SearchBar = dynamic(
  () => import('@/components/ui/search-bar').then((mod) => mod.SearchBar),
  {
    loading: () => <SearchBarSkeleton />,
    ssr: false,
  }
)

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
      <div className="my-10 flex h-full w-full flex-col gap-6 md:my-20 lg:my-20">
        <div className="mx-2 flex flex-col justify-between space-y-2.5 py-2 md:mx-10 md:flex-row lg:mx-10 lg:flex-row">
          <div className="flex items-center gap-1.5">
            <DashboardIcon className="h-7 w-7 text-slate-800/90 md:h-9 md:w-9 lg:h-9 lg:w-9" />
            <h1 className="m text-4xl font-semibold  text-slate-800/90 md:text-5xl lg:text-5xl">
              Dashboard{' '}
            </h1>
          </div>
          <SearchBar />
        </div>
        <div className="mx-2 grid gap-5 md:mx-10 lg:mx-10">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
            <RecentUploads />
            <Dropzone />
          </div>
          <div className="hide-scrollbar flex w-full items-center justify-center overflow-y-auto rounded-2xl border-2  bg-white p-2 shadow-sm">
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between gap-2 p-2 font-medium">
                <div className="flex items-center gap-2 text-slate-800/90">
                  <LineChartIcon className="h-5 w-5" />
                  <span className="text-2xl text-slate-800/90">
                    Monthly Uploads
                  </span>
                </div>
                <div className="flex gap-1 text-sm text-slate-500">
                  <span>{month}</span>
                  <span>{year}</span>
                </div>
              </div>{' '}
              <MonthlyUploadsGraph />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
