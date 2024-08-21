"use client";

import Link from "next/link";
import { MainNav } from "../ui/main-nav";
import { MobileNav } from "../ui/mobile-nav";
import ModeToggle from "../ui/ModeToggle";


export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="lg:hidden md:hidden">
              <Link href={"/"}>
              <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#2729b4]">Cryptrack</span>
              </Link>
            </div>
          </div>

            <button className="px-6 py-2 text-black dark:text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Sign In
            </button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}