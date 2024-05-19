import { PdfDeleteDialog, PdfUpdateDialog } from '@/components/pdf'
import { FireIcon } from '@/components/ui/icon'
import { Loader } from '@/components/ui/loader'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import prisma from '@/prisma/client'
import { Pdf } from '@prisma/client'
import { FileTextIcon, RocketIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export const RecentUploads = async () => {
  let pdfs: Pdf[] = []
  let isLoading = false

  try {
    isLoading = true
    pdfs = await prisma.pdf.findMany()
    isLoading = false
  } catch (error) {}

  return (
    <div className="flex h-96 flex-col gap-3 rounded-2xl border-2 bg-white p-3 shadow-sm">
      {isLoading ? (
        <div className="flex h-full flex-col items-center justify-center">
          <Loader />
        </div>
      ) : pdfs && pdfs.length ? (
        <FiledRecentUploads pdfs={pdfs} />
      ) : (
        <EmptyRecentUploads />
      )}
    </div>
  )
}

const FiledRecentUploads = ({ pdfs }: { pdfs: Pdf[] }) => {
  return (
    <>
      <div className="flex items-center gap-2 p-2 font-medium text-slate-800/90">
        <RocketIcon className="h-5 w-5" />
        <span className="text-2xl">Recent Uploads</span>
      </div>
      <div className="overflow-y-auto">
        <Table>
          <TableBody>
            {pdfs.map((pdf) => (
              <TableRow key={pdf.id}>
                <TableCell className="group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileTextIcon className="text-blue-600" />
                      <Link
                        className="text-xs text-slate-700/90 group-hover:text-slate-900 md:text-sm lg:text-sm"
                        href={`/chat/?pdf=${pdf.id}`}
                        key={pdf.id}
                      >
                        {pdf.name.length > 32
                          ? `${pdf.name.slice(0, 32)}...`
                          : pdf.name}
                      </Link>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100">
                      <PdfUpdateDialog pdf={pdf} />
                      <PdfDeleteDialog pdf={pdf} />
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
