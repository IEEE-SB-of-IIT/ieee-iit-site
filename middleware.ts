import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import type { NextRequest } from "next/server";

const { auth } = NextAuth(authConfig);

export default async function middleware(request: NextRequest) {
  return auth(request as any);
}

export const config = {
  matcher: ["/admin/:path*"],
};
