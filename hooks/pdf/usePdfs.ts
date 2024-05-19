import { Pdf } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const usePdfs = () => {
  return useQuery({
    queryKey: ['pdfs'],
    queryFn: async () => {
      const response = await axios.get<Pdf[]>('/api/pdfs')
      return response.data
    },
  })
}
