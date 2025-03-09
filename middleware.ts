import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard",
  "/super-admin/dashboard",
  "/admin/dashboard",
  "/teacher/dashboard",
  "/student/dashboard",
]);

export default clerkMiddleware(async (auth, req) => {
  const authData = await auth();

  if (!authData.sessionId) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Get user role from metadata (ensure metadata exists)
  const metadata = authData.sessionClaims?.metadata as { role?: string } | undefined;
  const userRole = metadata?.role;

  const rolePaths: Record<string, string> = {
    SUPER_ADMIN: "/super-admin/dashboard",
    ADMIN: "/admin/dashboard",
    TEACHER: "/teacher/dashboard",
    STUDENT: "/student/dashboard",
  };

  if (isProtectedRoute(req) && userRole && rolePaths[userRole]) {
    return NextResponse.redirect(new URL(rolePaths[userRole], req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/dashboard",
    "/super-admin/dashboard",
    "/admin/dashboard",
    "/teacher/dashboard",
    "/student/dashboard",
  ],
};
