import { useChatCreate } from '@/hooks/chat'
import { useUploadThing } from '@/lib/uploadthing'
import { usePdfUploadStore } from '@/store/PdfUploadStore'
import { checkFileSize } from '@/utils/CheckFileSize'
import { useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { UploadThingError } from 'uploadthing/server'

export const usePdfUpload = () => {
  const chatCreate = useChatCreate()
  const { setFile, setIsUploading, setIsUploadingDone, setUploadProgress } =
    usePdfUploadStore()

  const { startUpload } = useUploadThing('fileUploader', {
    onClientUploadComplete: async (res) => {
      console.log('uploading complete')
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

      await startUpload(acceptedFiles)
      setUploadProgress(100)
    } catch (error: any) {
      setFile(null)
      toast.error(error.message)
    }
    // eslint-disable-next-line
  }, [])

  return { onDrop }
}
