'use client'

import { useUploadThing } from '@/lib/uploadthing'
import { checkFileSize } from '@/utils/CheckFileSize'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { UploadThingError } from 'uploadthing/server'

export const useFileOnDrop = () => {
  const router = useRouter()

  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isUploadDone, setIsUploadDone] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const { startUpload } = useUploadThing('fileUploader', {
    onClientUploadComplete: (res) => {
      setIsUploadDone(true)
      setIsUploading(false)
      router.push(`/dashboard/files/${res[0].key}`)
    },
    onUploadError: () => {
      setFile(null)
      toast.error('An expected error occurred.')
    },
  })

  const onUploadProgress = () => {
    const interval = setInterval(() => {
      setUploadProgress((progress) => {
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

  return { onDrop, isUploading, uploadProgress, file, isUploadDone }
}
