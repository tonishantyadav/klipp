'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowUpIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll)

    // Clean up function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Empty dependency array ensures the effect runs only once on mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: adds smooth scrolling effect
    })
  }

  return (
    <Button
      className={cn(
        'fixed bottom-5 end-5 rounded-full',
        isVisible ? 'visible' : 'hidden'
      )}
      size="icon"
      id="scroll-to-top-btn"
      onClick={scrollToTop}
    >
      <ArrowUpIcon width={20} height={20} />
    </Button>
  )
}

export { ScrollToTopButton }
