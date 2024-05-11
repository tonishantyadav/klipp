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
    <div className="m-2.5 flex h-60 flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-500  bg-gray-200/60  text-zinc-500">
      <FileSvg />
      <span className="px-2 pt-2 text-center text-xs">
        {file.name.length > 30 ? `${file.name.slice(0, 30)}...` : file.name}
      </span>
      {isUploading && (
        <Progress className="my-2 h-1 w-3/4" value={uploadProgress} />
      )}
    </div>
  )
}

const FileSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-file-text text-blue-600"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}
