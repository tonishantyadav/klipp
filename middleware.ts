import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/api(.*)', '/dashboard(.*)'])

export default clerkMiddleware((auth, req) => {
  const userId = auth().userId

  if (userId && isProtectedRoute(req)) {
    auth().protect()
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
