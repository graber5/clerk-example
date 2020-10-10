import type { AppProps } from "next/app";
import { loadClerk, ClerkProvider } from "@clerk/clerk-react";
import { NavBar } from "@components";
import "../styles/globals.css";

loadClerk("auth.usoaw.47qim.lcl.dev");

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ClerkProvider>
      {router.pathname.startsWith("/dashboard") && <NavBar />}
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
