'use client'

import { usePdfStore } from '@/store/PdfStore'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export const Scaling = () => {
  const { setScale } = usePdfStore()
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="outline" className="rounded-full">
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left">
          {scales.map((scale) => (
            <DropdownMenuItem
              key={scale.label}
              onClick={() => setScale(scale.value)}
            >
              {scale.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const scales: { label: string; value: number }[] = [
  { label: '100%', value: 1 },
  { label: '150%', value: 1.5 },
  { label: '200%', value: 2 },
]
