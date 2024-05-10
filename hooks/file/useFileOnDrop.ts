'use client'

import { useCallback, useState } from 'react'

export const useFileOnDrop = () => {
  const [isUploading, setIsUploading] = useState(false)
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setIsUploading(true)
  }, [])

  return { isUploading, onDrop }
}
