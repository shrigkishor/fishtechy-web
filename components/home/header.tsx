"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { SignUpModal } from "./signup-modal";

const navItems = [
  { label: "Home", href: "#home", active: true },
  { label: "Buy Now", href: "#buy-now" },
  { label: "Find a Store", href: "#find-a-store" },
  { label: "Fishtechy Contests", href: "#fishtechy-contests" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "SMART Log", href: "#smart-log" },
  { label: "Measuring For Science", href: "#measuring-for-science" },
  { label: "Vendor Portal", href: "#vendor-portal" },
];

export function Header() {
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/6 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1920px] items-center px-5 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-[15px] xl:px-[60px] 2xl:px-[100px]">
          <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            aria-label="Fishtechy home"
          >
            <Image
              src="/figma/header-logo-real.png"
              alt="Fishtechy"
              width={535}
              height={120}
              priority
              className="h-auto w-[150px] sm:w-[184px] lg:w-[200px] xl:w-[240px] 2xl:w-[267px]"
            />
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center lg:flex"
            aria-label="Main navigation"
          >
            <div className="flex items-center gap-3 p-[15px] font-display font-semibold text-foreground lg:gap-3 lg:text-[13px] xl:gap-4 xl:text-[16px] 2xl:gap-6 2xl:text-[20px]">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`shrink-0 whitespace-nowrap transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    item.active ? "text-brand" : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="ml-auto hidden shrink-0 items-center gap-3 sm:flex lg:gap-[19px]">
            <button
              onClick={() => setSignUpOpen(true)}
              className="inline-flex h-9 items-center justify-center rounded-[5px] border border-[#144b83] bg-[#144b83] px-5 text-[14px] font-medium text-white transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:h-10 sm:px-6 sm:text-[15px] lg:h-[40px] lg:w-[106px] lg:text-[16px]"
            >
              Sign Up
            </button>
            <button className="inline-flex h-9 items-center justify-center rounded-[5px] border border-brand bg-transparent px-5 text-[14px] font-medium text-white transition-all hover:bg-brand/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:h-10 sm:px-6 sm:text-[15px] lg:h-[40px] lg:w-[106px] lg:text-[16px]">
              Log in
            </button>
          </div>

          <MobileNav items={navItems} />
        </div>
      </header>

      <SignUpModal open={signUpOpen} onClose={() => setSignUpOpen(false)} />
    </>
  );
}
