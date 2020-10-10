import { withClerk, LoadedClerkType } from "@clerk/clerk-react";
import { useRouter } from "next/router";

interface Props {
  clerk: LoadedClerkType;
}

function Home({ clerk }: Props) {
  const router = useRouter();

  if (clerk.userSession) {
    router.push("/dashboard");
  }

  return (
    <div>
      <button onClick={() => router.push("/sign-in")}>Sign in</button>
      <button onClick={() => router.push("/sign-up")}>Sign up</button>
    </div>
  );
}

export default withClerk(Home);
