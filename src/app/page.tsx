import { Suspense } from "react";
import { AllUsers, CheckHono } from "@/components/home/allUsers";
import { Counter, Counter2 } from "@/components/home/counter";
import { UserDetails } from "@/components/home/user-details";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <ModeToggle />

      <Suspense fallback={<div>Loading...</div>}>
        <UserDetails />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <AllUsers />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <CheckHono />
      </Suspense>

      <Counter />
      <Counter2 />
    </main>
  );
}
