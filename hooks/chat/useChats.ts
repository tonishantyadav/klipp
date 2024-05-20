import { Chat } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ms from 'ms'

export const useChats = () => {
  return useQuery({
    queryKey: ['chats'],
    queryFn: async () => {
      const response = await axios.get<Chat[]>('/api/chats')
      return response.data
    },
    staleTime: ms('5m'),
  })
}
