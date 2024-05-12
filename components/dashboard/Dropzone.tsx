import { FileDropzone } from '@/components/file'

export const Dropzone = () => {
  return (
    <div className="h-96 rounded-lg border-2 border-dashed border-gray-300 bg-neutral-100/45 shadow-md">
      <FileDropzone />
    </div>
  )
}
