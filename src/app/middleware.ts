// import { NextRequest, NextResponse } from 'next/server'
// import { getSignIn } from '@/app/sign-in/page'
 
// // 1. Specify protected and public routes
// const protectedRoutes = ['/availability', '/sub-in', '/sub-out']
// const publicRoutes = ['/sign-in', '/']
 
// export default async function middleware(req: NextRequest) {
//   console.log("MIDDLEWARE HITTTT")
//   // 2. Check if the current route is protected or public
//   const path = req.nextUrl.pathname
//   const isProtectedRoute = protectedRoutes.includes(path)
//   const isPublicRoute = publicRoutes.includes(path)
 
//   // 4. Redirect to /login if the user is not authenticated
//   if (isProtectedRoute && !User) {
//     return NextResponse.redirect(new URL('/login', req.nextUrl))
//   }
 
//   // 5. Redirect to /dashboard if the user is authenticated
//   if (isPublicRoute && getSignIn() &&
//     !req.nextUrl.pathname.startsWith('/availability')
//   ) {
//     return NextResponse.redirect(new URL('/availability', req.nextUrl))
//   }
 
//   return NextResponse.next()
// }
 
// // Routes Middleware should not run on
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }