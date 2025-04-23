import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/app/auth";

const protectedRoutes = ["/user-info", "/players"];

export default async function middleware(request: NextRequest) {
    const session = await auth();
    const isAuth = session ? true : false;
    const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));
    const isLoginRoute = request.nextUrl.pathname.startsWith("/api/auth/signin");

    if (isProtectedRoute && !isAuth) {
        console.log("User is not authenticated, redirecting to login page.");
        //return NextResponse.redirect(new URL("/api/auth/signin", request.url));
        return NextResponse.next();
    }

    if (isLoginRoute && isAuth) {
        console.log("User is already authenticated, redirecting to home page.");
        //return NextResponse.redirect(new URL("/", request.url));
        return NextResponse.next();
    }

    // console.log("User is authenticated, allowing access to protected route.");

    return NextResponse.next();
}