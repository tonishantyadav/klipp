import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/api(.*)', '/dashboard(.*)'])

const isUploadthingEndpoint = createRouteMatcher(['/api/uploadthing(.*)'])

export default clerkMiddleware((auth, req) => {
  if (isUploadthingEndpoint(req)) return

  if (isProtectedRoute(req)) auth().protect()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
