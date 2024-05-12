'use client'

import { handleError } from '@/lib/error'
import { File } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

export const useFileDelete = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => await axios.delete(`/api/files/${id}`),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ['files'] })
      const files = queryClient.getQueryData<File[]>(['files'])
      if (files) {
        queryClient.setQueryData(['files'], () =>
          files.filter((file) => file.id !== id)
        )
      }
      return { files }
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(['files'], context?.files || [])
      const errorMessage = handleError(error)
      toast.error(errorMessage)
    },
  })
}
