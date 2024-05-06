import { Input } from '@/components/ui/input'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export const SearchInput = () => {
  return (
    <div className="flex w-3/4 space-x-2 rounded-md">
      <div className="relative w-full p-2">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500/60" />
        </div>
        <Input
          type="text"
          id="voice-search"
          className="w-full border border-gray-300 bg-gray-100/60  p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search"
          required
        />
      </div>
    </div>
  )
}
