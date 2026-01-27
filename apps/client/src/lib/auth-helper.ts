import { authClient } from "./auth-client";
import { redirect } from "@tanstack/react-router";

export async function requireAuth() {
  const session = await authClient.getSession();

  if (!session.data) {
    throw redirect({
      to: "/auth/login",
    });
  }

  return session;
}
