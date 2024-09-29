import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";

export function middleware(req: NextRequest) {
    const statusLogin = Cookies.get('status_login')
    if (statusLogin === "true") {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL("/auth/login", req.url))
    }
}

export const config = {
    matcher: ['/dashboard/', '/dashboard/:path*', '/blog/:path*', '/courses/:path*'],
}