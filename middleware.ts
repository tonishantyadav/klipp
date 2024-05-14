import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/api(.*)', '/dashboard(.*)'])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req) && req.nextUrl.pathname !== '/api/uploadthing') {
    auth().protect()
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
