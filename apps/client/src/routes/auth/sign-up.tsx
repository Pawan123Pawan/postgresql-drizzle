import RegisterPreview from "@/components/Auth/SignUp";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-up")({
  component: () => (
    <div>
      <RegisterPreview />
    </div>
  ),
});
