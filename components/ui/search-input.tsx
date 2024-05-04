import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FileTextIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

export const SearchInput = () => {
  return (
    <div className="flex space-x-2 rounded-md shadow-sm lg:w-3/5">
      <div className="relative w-full p-2">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <FileTextIcon className="h-5 w-5 " />
        </div>
        <Input
          type="text"
          id="voice-search"
          className="w-full border border-gray-300 bg-gray-100/60  p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search your files..."
          required
        />
      </div>
      <div className="py-2 pr-2">
        <Button type="submit" className="flex space-x-1">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <span>Search</span>
        </Button>
      </div>
    </div>
  )
}
