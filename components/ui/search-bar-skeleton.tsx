import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const SearchBarSkeleton = () => {
  return (
    <Skeleton className="h-12 w-full rounded-md bg-gray-200 md:w-[49%] lg:w-[49%]" />
  )
}

export default SearchBarSkeleton
