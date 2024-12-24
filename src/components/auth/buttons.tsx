"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

type SignInProvider = "google";

type SignInButtonProps = {
  provider: SignInProvider;
  text?: string;
};

export function LogInButton({ provider, text }: SignInButtonProps) {
  return <Button onClick={() => signIn(provider)}>{text ? text : `Sign in with ${provider}`}</Button>;
}

export function LogOutButton() {
  return <Button onClick={() => signOut()}>Sign out</Button>;
}
