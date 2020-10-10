import type { AppProps } from "next/app";
import Head from "next/head";
import { loadClerk, ClerkProvider } from "@clerk/clerk-react";
import { NavBar } from "@components";
import "../styles/globals.css";
import Router from "next/router";

loadClerk(process.env.NEXT_PUBLIC_CLERK_URL || "", {
  signInNavigate: (to: string) => {
    return Router.push("/sign-in/[[...index]]", to);
  },
  signUpNavigate: (to: string) => {
    return Router.push("/sign-up/[[...index]]", to);
  },
});

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <ClerkProvider>
        {router.pathname.startsWith("/dashboard") && <NavBar />}
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
}
