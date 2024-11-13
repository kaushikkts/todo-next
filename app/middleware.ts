import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  console.log(`Request received: - ${request}`);
  return NextResponse.next();
}

export const config = {
  matcher: "/api/*",
};
