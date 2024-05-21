'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { SetStateAction, useState } from 'react'

export const PdfViewScaling = ({
  setScale,
}: {
  setScale: (scale: SetStateAction<number>) => void
}) => {
  const [label, setLabel] = useState('100%')

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex gap-1 text-slate-700/90"
            variant="outline"
            size="sm"
          >
            <span>{label}</span>
            <MagnifyingGlassIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="left">
          {scales.map((scale) => (
            <DropdownMenuItem
              className="cursor-pointer"
              key={scale.label}
              onClick={() => {
                setLabel(scale.label)
                setScale(scale.value)
              }}
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
  { label: '90%', value: 0.8 },
  { label: '100%', value: 1 },
  { label: '150%', value: 1.5 },
  { label: '200%', value: 2 },
]
