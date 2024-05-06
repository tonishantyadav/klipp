import { handleError } from '@/lib/error'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

export const useFileDelete = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.delete(`/api/files/${id}`)
      return response.data
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['files'] })
    },
    onError: (error) => {
      const errorMessage = handleError(error)
      toast.error(errorMessage)
    },
  })
}
