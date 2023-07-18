"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // default: true
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <NextUIProvider>{children}</NextUIProvider>
    </QueryClientProvider>
  );
}
