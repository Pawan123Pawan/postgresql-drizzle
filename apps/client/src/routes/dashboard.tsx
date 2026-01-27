import { requireAuth } from "@/lib/auth-helper";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async () => {
    await requireAuth();
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-slate-500 flex justify-center items-center w-full h-[calc(100vh-4rem)]">
      <h1
        className="
  text-center
  text-5xl sm:text-7xl lg:text-9xl
  font-extrabold
  tracking-tight
  bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500
  bg-clip-text text-transparent
  drop-shadow-[0_8px_30px_rgba(251,191,36,0.35)]
"
      >
        Welcome to the Dashboard!
      </h1>
    </div>
  );
}
