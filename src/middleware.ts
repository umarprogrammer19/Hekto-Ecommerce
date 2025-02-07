import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
    const url = request.nextUrl.pathname
    const publicUrls = url === '/login' || url === '/signup' || url === '/verifyemail' || url === '/forgotpassword'
    const privateUrls = url === '/shop' || url === '/cart' || url === '/checkout' || url === '/order' || url === '/order/[id]'
    const token = request.cookies.get('token')?.value || ''
    if (token && publicUrls) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    if (!token && privateUrls) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
export const config = {
    matcher: [
        '/',
        '/login',
        '/signup',
        '/forgotpassword',
        '/verifyemail',
        '/profile',
        '/check-out',
        '/cart',
        '/order',
        '/order/[id]',
        '/shop'
    ]
}