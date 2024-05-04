import { Container } from '@/components/Container'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'
import { Button } from '@/components/ui/button'
import dashboardPreview from '@/public/dashboard-preview.jpg'
import hightVoltage from '@/public/high-voltage.svg'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <>
      <Container className="grid grid-rows-3 space-y-1">
        <div className="flex flex-col items-center justify-center space-y-5 border border-red-500 text-center">
          <HeaderSection />
        </div>
        <div className="flex flex-col items-center justify-center">
          <MainSection />
        </div>
        <div className="flex flex-col items-center justify-center space-y-20 pb-10">
          <FooterSection />
        </div>
      </Container>
      <ScrollToTopButton />
    </>
  )
}

const HeaderSection = () => {
  return (
    <>
      <p className="my-5 flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-300 px-7 py-2 font-semibold text-white shadow-md transition-all md:text-lg lg:text-lg">
        Klipp is now public{' '}
        <span className="px-1">
          <Image
            src={hightVoltage}
            alt="High voltage icon"
            className="h-[20px] w-[20px]"
          />
        </span>
      </p>
      <h1 className="max-w-4xl text-5xl font-bold text-slate-700/90 md:text-6xl lg:text-7xl">
        Chat with your <span className="text-blue-600">documents</span> in
        seconds.
      </h1>
      <p className="max-w-prose text-zinc-500 sm:text-lg">
        Klipp allows you to have conversations with any PDF document. Simply
        upload your file and start asking questions right away.
      </p>
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
        alt="Dashboard preview"
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
      <div className="container mx-auto flex flex-col items-center  justify-center space-y-5 text-center">
        <h2 className="max-w-fit text-5xl font-semibold text-slate-700/90 md:text-6xl lg:text-7xl">
          Start chatting in <span className="text-blue-600">minutes.</span>
        </h2>
        <p className="max-w-fit  text-zinc-500">
          Chatting to your PDF files has never been easier than with Klipp.
        </p>
      </div>
      <div>
        <StepsSection />
      </div>
    </>
  )
}

const StepsSection = () => {
  return (
    <ol className="space-y-4 p-2 md:flex md:space-x-12 md:space-y-0">
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
            We&apos;ll process your file and make it ready for you to chat with.
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
  )
}

export default HomePage
