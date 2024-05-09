import { Button } from '@/components/ui/button'

export const FileDropzone = () => {
  return (
    <div className="m-2.5 flex h-80 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-500 text-zinc-500">
      <div>
        <div className="flex flex-col items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-cloud-upload"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M12 12v9" />
            <path d="m16 16-4-4-4 4" />
          </svg>{' '}
          <span className="text-xl font-medium">Drag and Drop here</span>
        </div>
      </div>
      <span className="font-medium">or</span>
      <Button className="mt-2">Select file</Button>
    </div>
  )
}
