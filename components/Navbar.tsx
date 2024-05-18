import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import stackIcon from '@/public/stack-icon.svg'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const { userId } = auth()

  return (
    <nav>
      <Container className="flex items-center justify-between">
        <div className="m-2 flex items-center space-x-2 p-2">
          <Link href="/">
            {' '}
            <Image src={stackIcon} alt="Stack icon" />
          </Link>
          <Link href="/">
            <span className="text-2xl font-bold text-primary ">Klipp</span>
          </Link>
        </div>
        <div className="m-2 flex items-center justify-center gap-3 p-2">
          <div className="flex">
            <Link
              className="flex h-8 items-center rounded-sm font-medium  text-gray-700/80 hover:bg-primary hover:text-white"
              href="/pricing"
            >
              <span className="p-2">Pricing</span>
            </Link>
            <Link
              className="text-md flex h-8 items-center rounded-sm font-medium text-gray-700/80  hover:bg-primary hover:text-white"
              href="/dashboard"
            >
              <span className="p-2">Dashboard</span>
            </Link>
          </div>
          {!userId ? (
            <SignInButton mode="modal">
              <Button
                className="text-md flex items-center space-x-1 bg-slate-800 bg-gradient-to-r font-medium text-white hover:bg-slate-900"
                size="sm"
              >
                <span className="text-sm">Signin</span>
                <ArrowRightIcon />
              </Button>
            </SignInButton>
          ) : (
            <UserButton />
          )}
        </div>
      </Container>
    </nav>
  )
}

export { Navbar }
