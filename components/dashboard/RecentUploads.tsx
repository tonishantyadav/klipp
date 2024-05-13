'use client'

import { FileDeleteDialog, FileUpdateDialog } from '@/components/file'
import { FireIcon } from '@/components/ui/icon'
import { Loader } from '@/components/ui/loader'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { useFiles } from '@/hooks/file'
import { File } from '@prisma/client'
import { FileTextIcon, RocketIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export const RecentUploads = () => {
  const { data: files, isLoading } = useFiles()

  return (
    <div className="flex h-96 flex-col gap-3 rounded-md border-2 border-gray-300 bg-neutral-50 p-3 shadow-sm">
      {isLoading ? (
        <div className="flex h-full flex-col items-center justify-center">
          <Loader />
        </div>
      ) : files && files.length ? (
        <FiledRecentUploads files={files} />
      ) : (
        <EmptyRecentUploads />
      )}
    </div>
  )
}

const FiledRecentUploads = ({ files }: { files: File[] }) => {
  return (
    <>
      <div className="flex items-center gap-2 p-2 px-2 font-medium text-slate-700/90">
        <RocketIcon className="h-5 w-5" />
        <span className="text-2xl">Recent Uploads</span>
      </div>
      <div className="hide-scrollbar overflow-y-auto rounded-md">
        <Table>
          <TableBody>
            {files.map((file) => (
              <TableRow key={file.id}>
                <TableCell className="group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileTextIcon className="text-blue-600" />
                      <Link
                        className=" text-slate-700/90 group-hover:text-slate-900"
                        href={`/dashboad/files/${file.id}`}
                        key={file.id}
                      >
                        {file.name}
                      </Link>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100">
                      <FileUpdateDialog file={file} />
                      <FileDeleteDialog file={file} />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

const EmptyRecentUploads = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-5">
      <div className="flex flex-col items-center">
        <span className="text-center text-3xl font-medium text-slate-500/40">
          Umm nothing is cooked yet!
        </span>
        <span className="text-md text-center text-slate-500/35">
          Start your cooking by uploading a file.
        </span>
      </div>
      <FireIcon className="h-8 w-8 text-slate-500/40" />
    </div>
  )
}
