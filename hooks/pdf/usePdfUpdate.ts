import { handleError } from '@/lib/error'
import { Pdf } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

export const usePdfUpdate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, name }: { id: string; name: string }) =>
      await axios.patch(`/api/pdfs/${id}`, { name }),
    onMutate: async ({ id, name }: { id: string; name: string }) => {
      const pdfs = queryClient.getQueryData<Pdf[]>(['pdfs'])
      if (pdfs) {
        queryClient.setQueryData(['pdfs'], () =>
          pdfs.map((pdf) => (pdf.id === id ? { ...pdf, name } : pdf))
        )
      }
      return { pdfs }
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(['pdfs'], context?.pdfs || [])
      const errorMessage = handleError(error)
      toast.error(errorMessage)
    },
  })
}
