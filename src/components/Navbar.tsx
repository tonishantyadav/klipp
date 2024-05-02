import Container from '@/components/Container'
import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { ArrowRightIcon, DashboardIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import stackIcon from '../../public/stack-icon.svg'
import { Button } from '@/components/ui/button'

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
            <Button className="flex gap-2 bg-purple-600 hover:bg-purple-500">
              <DashboardIcon />
              <span>Dashboard</span>
            </Button>
          </Link>
          {userId ? (
            <UserButton />
          ) : (
            <Link href="/sign-in">
              <Button className="flex gap-2">
                <span>Signin</span>
                <ArrowRightIcon />
              </Button>
            </Link>
          )}
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
