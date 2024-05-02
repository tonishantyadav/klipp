import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { ArrowRightIcon, DashboardIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import stackIcon from '../../public/stack-icon.svg'
import AvatarIcon from '@radix-ui/react-icons'

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
            <span className="text-2xl font-bold text-primary">Klipp</span>
          </Link>
        </div>
        <div className="m-2 flex items-center space-x-2 p-2">
          <Link href="/dashboard">
            <Button className="flex items-center space-x-1 bg-purple-600 font-medium text-neutral-200 transition hover:scale-110 hover:bg-purple-500">
              <DashboardIcon />
              <span>Dashboard</span>
            </Button>
          </Link>
          {!userId ? (
            <SignInButton mode="modal">
              <Button className="flex items-center space-x-1 font-medium text-neutral-200 transition hover:scale-110">
                <span>Signin</span>
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

export default Navbar
