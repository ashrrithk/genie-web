"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin-ext"],
});

const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
  },
  {
    label: "Chat with Genie",
    href: "/dashboard",
    icon: MessageSquare,
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    href: "/dashboard",
    icon: ImageIcon,
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    href: "/dashboard",
    icon: VideoIcon,
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    href: "/dashboard",
    icon: Music,
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    href: "/dashboard",
    icon: Code,
    color: "text-green-700",
  },
  {
    label: "Settings",
    href: "/dashboard",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <Link href="/dashboard" className="flex items-center pl-3 mb-14">
        <div className="relative w-8 h-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold", montserrat.className)}>
          Genie
        </h1>
      </Link>
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className="text-sm group flex p-3 w-full justify-start
        font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
        >
          <div className="flex items-center flex-1">
            <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
            {route.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
