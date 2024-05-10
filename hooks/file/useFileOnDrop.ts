'use client'

import { Dispatch, SetStateAction, useCallback, useState } from 'react'

export const useFileOnDrop = () => {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsUploading(true)
    handleUploadProgress(setUploadProgress)
    setUploadProgress(100)
  }, [])

  return { onDrop, isUploading, uploadProgress }
}

const handleUploadProgress = (
  setProgress: Dispatch<SetStateAction<number>>
) => {
  const interval = setInterval(() => {
    setProgress((progress) => {
      if (progress >= 90) {
        clearInterval(interval)
        return progress
      }
      return progress + 5
    })
  }, 500)
}
