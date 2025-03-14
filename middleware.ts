import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Add your authentication logic here
  // For demo purposes, we'll just check if there's a session cookie
  const isAuthenticated = request.cookies.has('session');
  
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}