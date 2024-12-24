"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a single query client
export const queryClient = new QueryClient();

export function QueryProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}