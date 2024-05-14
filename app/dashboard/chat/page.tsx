const ChatPage = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) => {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-[60%_40%] lg:grid-cols-[60%_40%]">
      <div className="border border-red-500">File Container</div>
      <div className="border border-blue-500">Chat Container</div>
    </div>
  )
}

export default ChatPage
