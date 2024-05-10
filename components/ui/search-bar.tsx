'use client'

import { useFiles } from '@/hooks/file'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export const SearchBar = () => {
  const { data: files } = useFiles()

  const handleOnSearch = (string: any, results: any) => {
    // Triggered when the user types in the search input
    console.log(string, results)
  }

  const handleOnHover = (file: any) => {
    // Triggered when the user hovers over an item in the suggestions list
    console.log('Item hovered:', file)
  }

  return (
    <ReactSearchAutocomplete
      className="w-3/4 text-primary"
      placeholder="Search"
      items={files!}
      onSearch={handleOnSearch}
      onHover={handleOnHover}
      maxResults={5}
      styling={{
        border: '2px solid #9ca3af',
        color: '#9ca3af',
      }}
    />
  )
}
