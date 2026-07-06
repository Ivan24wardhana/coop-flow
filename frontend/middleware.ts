import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value;
  const userRole = request.cookies.get('user_role')?.value; 
  const { pathname } = request.nextUrl;

  const roleRoutes: Record<string, string> = {
    'admin-lapangan': '/dashboard/admin-lapangan',
    'petugas-koperasi': '/dashboard/admin-koprasi',
    'dinas-pertanian': '/dashboard/dinas-pertanian',
    'kemenko-pangan': '/dashboard/kemenko-pangan',
    'petani': '/dashboard/petani',
  };

  if (pathname === '/dashboard' || pathname === '/dashboard/') {
    if (token && userRole && roleRoutes[userRole]) {
      return NextResponse.redirect(new URL(roleRoutes[userRole], request.url));
    }
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (token && pathname.startsWith('/auth')) {
    const redirectUrl = userRole ? roleRoutes[userRole] : '/dashboard';
    return NextResponse.redirect(new URL(redirectUrl || '/dashboard', request.url));
  }

  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (token && pathname.startsWith('/dashboard/')) {
    if (userRole && roleRoutes[userRole]) {

      const segments = pathname.split('/');
      const currentRoleFolder = segments[2]; 
      
      const allowedSegments = roleRoutes[userRole].split('/');
      const expectedRoleFolder = allowedSegments[2]; 

      if (currentRoleFolder !== expectedRoleFolder) {
        return NextResponse.redirect(new URL(roleRoutes[userRole], request.url));
      }
    } else if (!userRole) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/:path*'],
};