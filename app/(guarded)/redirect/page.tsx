"use client";

import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function RedirectPage() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && user) {
      const role = user.publicMetadata.role; // Fetch user role from Clerk metadata

      switch (role) {
        case "SUPER_ADMIN":
          router.push("/super-admin/dashboard");
          break;
        case "ADMIN":
          router.push("/admin/dashboard");
          break;
        case "TEACHER":
          router.push("/teacher/dashboard");
          break;
        case "STUDENT":
          router.push("/student/dashboard");
          break;
        default:
          router.push("/dashboard");
      }
    }
  }, [isSignedIn, user, router]);

  return <div>Redirecting...</div>;
}
