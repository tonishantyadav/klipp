'use client'

import { usePdfs } from '@/hooks/pdf'
import { Pdf } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export const SearchBar = () => {
  const router = useRouter()
  const { data: pdfs } = usePdfs()

  const onSelect = (pdf: Pdf) => {
    router.push(`/dashboard/files/${pdf.id}`)
  }

  return (
    <ReactSearchAutocomplete
      className="w-full cursor-pointer  pr-5 text-primary md:w-[49%] lg:w-[49%]"
      placeholder="Search"
      items={pdfs!}
      onSelect={onSelect}
      maxResults={5}
      styling={{
        border: '1px solid #9ca3af',
        color: '#1e293b',
        borderRadius: '8px',
      }}
    />
  )
}
