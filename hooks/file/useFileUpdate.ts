import { handleError } from '@/lib/error'
import { File } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

export const useFileUpdate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, name }: { id: string; name: string }) =>
      await axios.patch(`/api/files/${id}`, { name }),
    onMutate: async ({ id, name }: { id: string; name: string }) => {
      const files = queryClient.getQueryData<File[]>(['files'])
      if (files) {
        queryClient.setQueryData(['files'], () =>
          files.map((file) => (file.id === id ? { ...file, name } : file))
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
