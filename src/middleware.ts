import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";

export function middleware(req: NextRequest) {
  const statusLogin = Cookies.get("status_login");
  if (!statusLogin) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/",
    
  ],
};
