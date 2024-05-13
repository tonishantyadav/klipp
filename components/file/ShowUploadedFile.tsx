import { FileIcon } from '@/components/ui/icon'
import { Progress } from '@/components/ui/progress'

export const ShowUploadedFile = ({
  file,
  isUploading,
  uploadProgress,
}: {
  file: File
  isUploading: boolean
  uploadProgress: number
}) => {
  return (
    <div className="m-2.5 flex h-60 flex-col items-center justify-center text-zinc-500">
      <FileIcon />
      <span className="px-2 pt-2 text-center text-xs">
        {file.name.length > 30 ? `${file.name.slice(0, 30)}...` : file.name}
      </span>
      {isUploading && (
        <Progress className="my-2 h-1 w-3/4" value={uploadProgress} />
      )}
    </div>
  )
}
