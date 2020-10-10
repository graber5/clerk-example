import { SignIn } from "@clerk/clerk-react";
import { useRouter } from "next/router";

export default function SignInPage() {
  const router = useRouter();

  return (
    <SignIn
      mode="mounted"
      path="/sign-in"
      signUpURL="/sign-up"
      afterSignIn={() => router.push("/")}
    />
  );
}
