import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token"); // Mendapatkan token dari cookie

  // Daftar rute yang dilindungi (protected paths)
  const protectedPaths = [
    "/dashboard",
    "/profile",
    "/settings",
    "/menu",
    "/jenjang",
    "/user_menu",
    "/kode",
    "/opd",
  ];
  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path),
  );

  // Jika pengguna mencoba mengakses rute yang dilindungi tanpa token, redirect ke halaman login
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Jika token ada atau rute tidak dilindungi, lanjutkan
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // Terapkan middleware untuk semua rute
};
