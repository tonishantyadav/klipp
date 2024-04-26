import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import fileUploadPreview from '../../public/file-upload-preview.jpg'

const HomePage = () => {
  return (
    <MaxWidthWrapper className="grid grid-rows-3 space-y-1 border border-red-800">
      <div className="flex flex-col items-center justify-center space-y-5 text-center">
        <HeaderSection />
      </div>
      <div className="flex flex-col items-center justify-center">
        <MainSection />
      </div>
      <div className="border border-red-200">
        <h1>Footer</h1>
      </div>
    </MaxWidthWrapper>
  )
}

const HeaderSection = () => {
  return (
    <>
      <p className="my-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-300 px-7 py-2 font-semibold text-white shadow-md transition-all md:text-lg lg:text-lg">
        Klipp is now public!
      </p>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Chat with your <span className="text-blue-600">documents</span> in
        seconds.
      </h1>
      <div>
        <Link href="/dashboard">
          <Button
            className="text-md flex space-x-1 font-medium text-neutral-200 transition hover:scale-110"
            size="lg"
          >
            <span>Get Started</span>
            <ArrowRightIcon className="h-8 w-5" />
          </Button>
        </Link>
      </div>
    </>
  )
}

const MainSection = () => {
  return (
    <div className="m-2 rounded-xl bg-purple-300/20 p-3 ring-1 ring-inset ring-gray-900/10">
      <Image
        src={fileUploadPreview}
        alt="File preiview upload true"
        width={1364}
        height={866}
        quality={100}
        className="rounded-lg shadow-2xl ring-1 ring-gray-900/10"
      />
    </div>
  )
}

export default HomePage
