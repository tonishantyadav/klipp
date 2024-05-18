'use client'

import { useFiles } from '@/hooks/file'
import { File } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export const SearchBar = () => {
  const router = useRouter()
  const { data: files } = useFiles()

  const onSelect = (file: File) => {
    router.push(`/dashboard/files/${file.id}`)
  }

  return (
    <ReactSearchAutocomplete
      className="w-full cursor-pointer  pr-5 text-primary md:w-[49%] lg:w-[49%]"
      placeholder="Search"
      items={files!}
      onSelect={onSelect}
      styling={{
        border: '1px solid #9ca3af',
        color: '#1e293b',
        borderRadius: '8px',
      }}
    />
  )
}
