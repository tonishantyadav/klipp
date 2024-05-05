import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import stackIcon from '@/public/stack-icon.svg'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = async () => {
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
        <div className="m-2 flex items-center space-x-5 p-2">
          <div className="flex space-x-3">
            <Link
              className=" text-lg text-slate-500 hover:text-slate-700/90"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className=" text-lg text-slate-500 hover:text-slate-700/90"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </div>
          {!userId ? (
            <SignInButton mode="modal">
              <Button className="text-md flex items-center space-x-1 bg-slate-800/90 bg-gradient-to-r font-medium text-neutral-200 hover:bg-slate-800/95">
                <span>Signin</span>
                <ArrowRightIcon width={20} height={20} />
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
