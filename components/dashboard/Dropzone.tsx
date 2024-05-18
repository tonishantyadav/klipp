import { FileDropzone } from '@/components/file'
import { FileTextIcon } from '@radix-ui/react-icons'
import { Cloud } from 'lucide-react'

export const Dropzone = () => {
  return (
    <div className="flex h-96 flex-col rounded-2xl border-2  bg-white p-2 shadow-sm">
      <div className="flex items-center gap-2 p-2 px-2 font-medium text-slate-800/90">
        <Cloud />
        <span className="text-2xl">Upload PDF</span>
      </div>{' '}
      <FileDropzone />
    </div>
  )
}
