import { File } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useFiles = () => {
  return useQuery({
    queryKey: ['files'],
    queryFn: async () => await axios.get<File[]>('/api/files'),
  })
}