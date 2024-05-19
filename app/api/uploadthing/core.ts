import prisma from '@/prisma/client'
import { auth } from '@clerk/nextjs/server'
import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { UploadThingError } from 'uploadthing/server'

const f = createUploadthing()

export const ourFileRouter = {
  fileUploader: f({
    pdf: { maxFileSize: '4MB' },
  })
    .middleware(async ({ req }) => {
      const userId = auth().userId

      if (!userId) throw new UploadThingError('Unauthroized')

      return { userId }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const clerkUserId = metadata.userId

      if (clerkUserId) {
        const user = await prisma.user.findUnique({
          where: { clerkUserId },
        })
        if (user) {
          await prisma.pdf.create({
            data: {
              id: file.key,
              name: file.name,
              url: file.url,
              userId: user.id,
            },
          })
        }
      }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
