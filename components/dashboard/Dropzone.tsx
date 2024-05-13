import { FileDropzone } from '@/components/file'
import { FilePlusIcon } from '@radix-ui/react-icons'

export const Dropzone = () => {
  return (
    <div className="flex h-96 flex-col rounded-lg border-2 border-gray-300 bg-neutral-50/80 p-2 shadow-sm">
      <div className="flex items-center gap-2 p-2 px-2 font-medium text-slate-700/90">
        <FilePlusIcon className="h-5 w-5" />
        <span className="text-2xl">File Upload</span>
      </div>{' '}
      <FileDropzone />
    </div>
  )
}
