import { MessageBody, MessageInput } from '@/components/message'

export const ChatContainer = () => {
  return (
    <div className="flex h-full flex-col gap-2 p-2">
      <MessageBody />
      <MessageInput />
    </div>
  )
}
