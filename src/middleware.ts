import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get('host')

  // Check if the request is coming from sheerssoft.com (root or www)
  if (host && (host === 'sheerssoft.com' || host === 'www.sheerssoft.com')) {
    url.host = 'ai.sheerssoft.com'
    url.protocol = 'https:' // Ensure https
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}
