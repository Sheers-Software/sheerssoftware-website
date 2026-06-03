import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')

  // Check if the request is coming from the old product subdomain
  if (host && (host === 'ai.sheerssoft.com' || host === 'www.ai.sheerssoft.com')) {
    const pathname = request.nextUrl.pathname
    const path = pathname === '/' ? '' : pathname
    const newPath = path.startsWith('/nocturn-ai') ? path : `/nocturn-ai${path}`
    
    return NextResponse.redirect(`https://sheerssoft.com${newPath}${request.nextUrl.search}`, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
