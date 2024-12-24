import { auth } from "@/server/auth/index";
import { LogInButton, LogOutButton } from "@/components/auth/buttons";

export async function UserDetails() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const session = await auth();
  return (
    <div>
      {session ? (
        <>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <LogOutButton />
        </>
      ) : (
        <LogInButton provider="google" text="Log in with Google" />
      )}
    </div>
  );
}
