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
      className="w-3/4 cursor-pointer text-primary"
      placeholder="Search"
      items={files!}
      maxResults={5}
      onSelect={onSelect}
      styling={{
        border: '2px solid #9ca3af',
        color: '#1e293b',
      }}
    />
  )
}
