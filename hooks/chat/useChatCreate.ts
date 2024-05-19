import { handleError } from '@/lib/error'
import { usePdfUploadStore } from '@/store/PdfUploadStore'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export const useChatCreate = () => {
  const router = useRouter()
  const { setIsUploadingDone } = usePdfUploadStore()

  return useMutation({
    mutationFn: async (pdfId: string) => {
      const response = await axios.post('/api/chats', { pdfId })
      return response.data
    },
    onSuccess: (response) => {
      const chatId = response.data.id
      router.push(`/chats/${chatId}`)
    },
    onError: (error) => {
      setIsUploadingDone(false)
      const errorMessage = handleError(error)
      toast.error(errorMessage)
    },
  })
}
