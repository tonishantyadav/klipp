import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const HomePage = () => {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">
      <HeroSection />
    </MaxWidthWrapper>
  )
}

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <div>
        <p className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white bg-gradient-to-r from-blue-600 to-purple-300 px-7 py-2 font-semibold text-white shadow-md backdrop-blur transition-all md:text-lg lg:text-lg">
          Klipp is now public!
        </p>
      </div>
      <div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your <span className="text-blue-600">documents</span> in
          seconds.
        </h1>
      </div>
      <div>
        <Link href="/dashboard">
          <Button
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            size="lg"
          >
            Get Started
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
