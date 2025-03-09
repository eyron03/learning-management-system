"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SignIn, useUser } from "@clerk/nextjs";

export default function SignInPage() {
  const { isLoaded, user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded && user) {
      const role = user.publicMetadata?.role as string;

      // Redirect users based on role
      if (role === "SUPER_ADMIN") router.push("/dashboard/super-admin");
      else if (role === "ADMIN") router.push("/dashboard/admin");
      else if (role === "TEACHER") router.push("/dashboard/teacher");
      else router.push("/dashboard/student");

      setLoading(false);
    }
  }, [isLoaded, user, router]);

  return loading ? <p>Loading...</p> : <SignIn />;
}
