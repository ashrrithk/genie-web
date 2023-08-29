import { Button } from "@/components/ui/button";
import exp from "constants";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page (UnProtected)</h1>
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;