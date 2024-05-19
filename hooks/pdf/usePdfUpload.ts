'use client'

import { useUploadThing } from '@/lib/uploadthing'
import { usePdfUploadStore } from '@/store/PdfUploadStore'
import { checkFileSize } from '@/utils/CheckFileSize'
import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { UploadThingError } from 'uploadthing/server'
import { useChatCreate } from '@/hooks/chat'

export const usePdfUpload = () => {
  const { setFile, setIsUploading, setIsUploadingDone, setUploadProgress } =
    usePdfUploadStore()

  const chatCreate = useChatCreate()

  const { startUpload } = useUploadThing('fileUploader', {
    onClientUploadComplete: async (res) => {
      setIsUploading(false)
      setIsUploadingDone(true)
      await chatCreate.mutateAsync(res[0].key)
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
