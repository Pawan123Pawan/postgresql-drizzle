import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-helper";
import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function Header() {
  const [session, setSession] = useState<boolean>();

  useEffect(() => {
    async function useSession() {
      const data = await requireAuth();
      console.log("data coming: ", data);
      if (data.data) {
        setSession(true);
      } else {
        setSession(false);
      }
    }
    useSession();
  }, [session]);

  const router = useRouter();

  return (
    <>
      <header className="w-full bg-white shadow-sm flex justify-between items-center h-16 px-16">
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <h1 className="font-semibold text-4xl italic">My Application</h1>
          </Link>
        </div>
        <div className="flex items-center gap-5 text-lg">
          {session ? (
            <>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>

              <div
                onClick={() =>
                  authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        router.navigate({ to: "/" });
                      },
                    },
                  })
                }
                className="hover:underline cursor-pointer"
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <Link to="/auth/login" className="hover:underline">
                Login
              </Link>

              {/* <Link to="/auth/sign-up" className="hover:underline">
                Sign Up
              </Link> */}
            </>
          )}
        </div>
      </header>
    </>
  );
}
