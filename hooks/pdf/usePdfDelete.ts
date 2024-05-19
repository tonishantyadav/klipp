'use client'

import { handleError } from '@/lib/error'
import { Pdf } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

export const usePdfDelete = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => await axios.delete(`/api/pdfs/${id}`),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ['pdfs'] })
      const pdfs = queryClient.getQueryData<Pdf[]>(['pdfs'])
      if (pdfs) {
        queryClient.setQueryData(['pdfs'], () =>
          pdfs.filter((pdf) => pdf.id !== id)
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
