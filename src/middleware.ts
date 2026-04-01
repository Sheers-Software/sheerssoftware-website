import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get('host')

  // Check if the request is coming from sheerssoft.com (root or www)
  if (host && (host === 'sheerssoft.com' || host === 'www.sheerssoft.com')) {
    // We no longer redirect to ai.sheerssoft.com
    // Just proceed to the next middleware or route
    return NextResponse.next()
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}
