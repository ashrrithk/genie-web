import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard Pag (Protected)</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
