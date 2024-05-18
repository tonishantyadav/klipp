import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher([
  '/api(.*)',
  '/dashboard(.*)',
  '/chat(.*)',
])

const isUploadThingRoute = createRouteMatcher(['/api/uploadthing(.*)'])

export default clerkMiddleware((auth, req) => {
  const headers = new Headers(req.headers)
  headers.set('x-current-path', req.nextUrl.pathname)

  if (isUploadThingRoute(req)) return

  if (isProtectedRoute(req)) auth().protect()

  return NextResponse.next({ headers })
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
