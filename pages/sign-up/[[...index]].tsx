import { SignUp } from "@clerk/clerk-react";
import { useRouter } from "next/router";

export default function SignUpPage() {
  const router = useRouter();

  return (
    <SignUp
      mode="mounted"
      path="/sign-up"
      signInURL="/sign-in"
      afterSignIn={() => router.push("/")}
    />
  );
}
