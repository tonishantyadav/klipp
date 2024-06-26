import { Pdf } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ms from 'ms'

export const usePdfs = () => {
  return useQuery({
    queryKey: ['pdfs'],
    queryFn: async () => {
      const response = await axios.get<Pdf[]>('/api/pdfs')
      return response.data
    },
    staleTime: ms('5m'),
  })
}
