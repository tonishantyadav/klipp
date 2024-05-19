'use client'

import { useUploadThing } from '@/lib/uploadthing'
import { usePdfUploadStore } from '@/store/PdfUploadStore'
import { checkFileSize } from '@/utils/CheckFileSize'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { UploadThingError } from 'uploadthing/server'

export const usePdfUpload = () => {
  const router = useRouter()
  const { setFile, setIsUploading, setIsUploadingDone, setUploadProgress } =
    usePdfUploadStore()

  const [i, setI] = useState()

  const { startUpload } = useUploadThing('fileUploader', {
    onClientUploadComplete: (res) => {
      setIsUploading(false)
      setIsUploadingDone(true)
      router.push('/chat')
    },
    onUploadError: () => {
      setFile(null)
      toast.error('An expected error occurred.')
    },
  })

  const onUploadProgress = () => {
    const interval = setInterval(() => {
      setUploadProgress((progress: number) => {
        if (progress >= 90) {
          clearInterval(interval)
          return progress
        }
        return progress + 5
      })
    }, 500)
  }

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      setIsUploading(true)
      setFile(acceptedFiles[0])
      onUploadProgress()

      if (acceptedFiles[0] && checkFileSize(acceptedFiles[0].size))
        throw new UploadThingError('File size exceed.')

      const response = await startUpload(acceptedFiles)
      setUploadProgress(100)
    } catch (error: any) {
      setFile(null)
      toast.error(error.message)
    }
    // eslint-disable-next-line
  }, [])

  return { onDrop }
}
