import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import dashboardPreview from '../../public/dashboard-preview.jpg'

const HomePage = () => {
  return (
    <Container className="grid grid-rows-3 space-y-1">
      <div className="flex flex-col items-center justify-center space-y-5 text-center">
        <HeaderSection />
      </div>
      <div className="flex flex-col items-center justify-center">
        <MainSection />
      </div>
      <div className="flex items-center justify-center">
        <FooterSection />
      </div>
    </Container>
  )
}

const HeaderSection = () => {
  return (
    <>
      <p className="my-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-300 px-7 py-2 font-semibold text-white shadow-md transition-all md:text-lg lg:text-lg">
        Klipp is now public!
      </p>
      <h1 className="max-w-4xl text-5xl font-bold text-slate-700/90 md:text-6xl lg:text-7xl">
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
        className="rounded-lg shadow-2xl ring-1 ring-gray-900/10"
        src={dashboardPreview}
        alt="Dashboard preiview showcase"
        width={1364}
        height={866}
        quality={100}
        priority
      />
    </div>
  )
}

const FooterSection = () => {
  return (
    <>
      <ol className="space-y-4 px-2 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 1</span>
            <span className="text-xl font-semibold text-slate-700">
              Sign up for an account
            </span>
            <p className="mt-2 text-zinc-700">
              Either starting out with a free plan or choose our{' '}
              <span>
                <Link
                  href="/pricing"
                  className="text-blue-600 hover:underline hover:underline-offset-2"
                >
                  pro
                </Link>
              </span>{' '}
              plan.
            </p>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 2</span>
            <span className="text-xl font-semibold text-slate-700">
              Upload your PDF file
            </span>
            <span className="mt-2 text-zinc-700">
              We&apos;ll process your file and make it ready for you to chat
              with.
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 3</span>
            <span className="text-xl font-semibold text-slate-700">
              Start asking questions
            </span>
            <span className="mt-2 text-zinc-700">
              It&apos;s that simple. Try out Klipp today - it really takes less
              than a minute.
            </span>
          </div>
        </li>
      </ol>
    </>
  )
}

export default HomePage
