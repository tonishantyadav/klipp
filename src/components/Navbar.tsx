import Container from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import stackIcon from '../../public/stack-icon.svg'

const Navbar = () => {
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
        <div className="m-2 flex space-x-4 p-2 text-lg font-medium text-zinc-500/80">
          <Link className="hover:text-zinc-600/80" href="/dashboard">
            Dashboard
          </Link>
          <Link className="hover:text-zinc-600/80" href="/signin">
            Signin
          </Link>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
