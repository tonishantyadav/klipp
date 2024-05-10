import { createUploadthing, type FileRouter } from 'uploadthing/next'

const f = createUploadthing()

export const ourFileRouter = {
  imageUploader: f({
    'application/pdf': { maxFileSize: '4MB' },
  }).onUploadComplete(async ({ file }) => {
    console.log('file url', file.url)
  }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
