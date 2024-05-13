import { FileIcon } from '@/components/ui/icon'
import { LoaderWithMessage } from '@/components/ui/loader'
import { Progress } from '@/components/ui/progress'

export const ShowUploadedFile = ({
  file,
  isUploading,
  isUploadDone,
  uploadProgress,
}: {
  file: File
  isUploading: boolean
  isUploadDone: boolean
  uploadProgress: number
}) => {
  return (
    <div className="m-2.5 flex h-60 flex-col items-center justify-center text-zinc-500">
      <FileIcon className="text-blue-600" />
      <span className="px-2 pt-2 text-center text-xs">
        {file.name.length > 64 ? `${file.name.slice(0, 64)}...` : file.name}
      </span>
      {isUploading && (
        <>
          <Progress className="my-2 h-1 w-3/4" value={uploadProgress} />
          <span className="text-center text-xs text-slate-400/80">
            {uploadProgress}%
          </span>
        </>
      )}
      {isUploadDone && <LoaderWithMessage message="Redirecting..." />}
    </div>
  )
}
