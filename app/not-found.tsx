import Container from '@/components/Container'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <Container>
      <div className="grid h-screen place-content-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-400/35">404</h1>

          <p className="text-2xl font-bold tracking-tight text-slate-700/90 sm:text-4xl">
            Uh-oh!
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex flex-row items-center gap-1 rounded-md  bg-blue-600  px-5 py-3 text-sm font-medium text-white transition hover:scale-110 hover:bg-blue-700"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Go Back Home
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default NotFoundPage
