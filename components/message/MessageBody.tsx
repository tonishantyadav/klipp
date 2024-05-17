import { GhostIcon } from '@/components/ui/icon'

export const MessageBody = ({ message }: { message: string }) => {
  return <div className="flex-1">{!message && <EmptyMessageBody />}</div>
}

const EmptyMessageBody = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-5">
      <div className="flex flex-col items-center">
        <span className="text-center font-medium text-slate-500/40 md:text-3xl lg:text-3xl">
          Hol&apos;up, you haven&apos;t cooked yet?
        </span>
        <span className="lg:text-md md:text-md text-center text-sm text-slate-500/35">
          Get started by asking your query.
        </span>
      </div>
      <GhostIcon className="text-slate-500/40 md:h-8 md:w-8 lg:h-8 lg:w-8" />
    </div>
  )
}
