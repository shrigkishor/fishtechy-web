"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";

export function DashboardTopHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-[64px] items-center justify-between border-b border-white/6 bg-background/90 px-5 backdrop-blur-xl sm:h-[80px] sm:px-8 lg:h-[96px] lg:px-[37.5px]">
      <div className="flex items-center gap-6 sm:gap-8 lg:gap-12">
        <Link href="/feed" className="shrink-0">
          <Image
            src="/figma/header-logo-real.png"
            alt="Fishtechy"
            width={229}
            height={51}
            className="h-auto w-[130px] sm:w-[170px] lg:w-[229px]"
            style={{ height: "auto" }}
          />
        </Link>

        <div className="hidden items-center gap-2.5 rounded-[12px] bg-[#1a1a1a] px-4 py-2.5 sm:flex sm:w-[300px] lg:w-[500px] xl:w-[744px]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" strokeLinecap="round" className="shrink-0">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent font-display text-[16px] text-white placeholder:text-[#737373] outline-none lg:text-[20px]"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <button className="hidden text-white/60 transition-colors hover:text-white sm:block" aria-label="Notifications">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2.5 rounded-full pl-2 sm:gap-3 sm:pl-3"
        >
          <div className="size-[36px] overflow-hidden rounded-full border-2 border-emerald-400 bg-[#28282b] sm:size-[44px]">
            {user?.avatar ? (
              <Image src={user.avatar} alt="" width={44} height={44} className="size-full object-cover" />
            ) : (
              <div className="flex size-full items-center justify-center text-[14px] font-semibold text-white sm:text-[16px]">
                {user?.name?.charAt(0)?.toUpperCase() ?? "U"}
              </div>
            )}
          </div>
          <div className="hidden flex-col items-start sm:flex">
            <span className="font-display text-[14px] font-medium text-[#f1f5f9] lg:text-[16px]">
              {user?.name ?? "User"}
            </span>
            <span className="font-display text-[12px] text-[#737373] lg:text-[14px]">
              {user?.role ?? "Fishtechy"}
            </span>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#737373" strokeWidth="2" className="hidden sm:block">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </header>
  );
}
