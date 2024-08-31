import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const path = request.nextUrl.pathname;

  // ダッシュボードへのアクセス制御
  if (path.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    // ここでトークンの有効性を検証することも可能
    // 例: if (!isValidToken(token)) { return NextResponse.redirect(new URL('/login', request.url)); }
  }

  // ログインページへのアクセス制御
  if (path === '/login') {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  // パブリックページへのアクセス
  if (path === '/' || path.startsWith('/public')) {
    return NextResponse.next();
  }

  // その他のルートに対するデフォルトの動作
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/',
    '/public/:path*'
  ],
};