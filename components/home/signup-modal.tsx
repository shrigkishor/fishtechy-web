"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type View = "signup" | "bfd-token" | "profile-setup";

export function SignUpModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [view, setView] = useState<View>("signup");
  const close = useCallback(() => { onClose(); setView("signup"); }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, close]);

  if (!open) return null;

  const handleBack = () => {
    if (view === "profile-setup") setView("bfd-token");
    else if (view === "bfd-token") setView("signup");
    else close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={close} />

      <button
        onClick={handleBack}
        className="absolute left-5 top-5 z-20 flex size-[38px] items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:left-10 sm:top-10 lg:left-[92px]"
        aria-label="Go back"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 3L5 8L10 13" />
        </svg>
      </button>

      {view === "signup" && <SignUpView onBfd={() => setView("bfd-token")} />}
      {view === "bfd-token" && <BfdTokenView onVerify={() => setView("profile-setup")} />}
      {view === "profile-setup" && <ProfileSetupView />}
    </div>
  );
}

/* ─── Sign Up View ─── */

function SignUpView({ onBfd }: { onBfd: () => void }) {
  return (
    <div className="relative z-10 mx-4 my-8 flex w-full max-w-[521px] flex-col gap-5 rounded-[10px] bg-[#0a0a0a] px-5 py-7 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-10 sm:py-[42px]">
      <div className="flex flex-col gap-6 sm:gap-[30px]">
        <div className="flex flex-col gap-4 text-center sm:gap-5">
          <h2 className="font-display text-[26px] font-bold text-white sm:text-[36px]">
            Sign Up
          </h2>
          <p className="font-display text-[14px] leading-normal text-[#d4d4d4] sm:text-[18px]">
            Join a community built for Anglers - Measure.Share. Compete.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-5">
          <button className="flex h-[46px] items-center justify-center gap-2.5 rounded-[10px] bg-[#28282b] font-display text-[15px] font-semibold text-[#f5f5f5] transition-colors hover:bg-[#333336] sm:h-[54px] sm:text-[18px]">
            <svg width="20" height="20" viewBox="0 0 21 21" fill="none" className="shrink-0">
              <path d="M19.305 10.742c0-.7-.057-1.2-.18-1.726H10.5v3.131h5.05c-.102.841-.652 2.108-1.875 2.96l-.017.114 2.722 2.11.189.019c1.731-1.6 2.731-3.953 2.731-6.608" fill="#4285F4" />
              <path d="M10.5 19.5c2.498 0 4.595-.823 6.127-2.243l-2.92-2.264c-.78.545-1.83.925-3.207.925-2.447 0-4.523-1.618-5.264-3.855l-.108.009-2.83 2.19-.037.103C3.683 17.323 6.827 19.5 10.5 19.5" fill="#34A853" />
              <path d="M5.236 12.063a5.62 5.62 0 0 1-.306-1.813c0-.631.112-1.243.295-1.813l-.005-.121L2.37 6.095l-.094.045A9.26 9.26 0 0 0 1.29 10.25c0 1.494.361 2.905.985 4.11l2.96-2.297" fill="#FBBC05" />
              <path d="M10.5 4.582c1.737 0 2.909.75 3.576 1.378l2.61-2.549C15.084 1.891 12.997.75 10.5.75 6.827.75 3.683 2.927 2.276 5.89l2.95 2.297c.752-2.236 2.827-3.605 5.274-3.605" fill="#EB4335" />
            </svg>
            Login with Google
          </button>

          <button className="flex h-[46px] items-center justify-center gap-2.5 rounded-[10px] bg-[#28282b] font-display text-[15px] font-semibold text-[#f5f5f5] transition-colors hover:bg-[#333336] sm:h-[54px] sm:text-[18px]">
            <svg width="20" height="20" viewBox="0 0 21 21" fill="white" className="shrink-0">
              <path d="M14.94 0c.14 1.06-.31 2.12-1.01 2.9-.71.78-1.83 1.39-2.94 1.31-.16-1.04.38-2.14 1.01-2.82.72-.78 1.96-1.35 2.94-1.39zM18.34 15.36c-.44 1.01-.65 1.46-1.22 2.36-.79 1.25-1.91 2.81-3.29 2.82-1.23.02-1.55-.8-3.22-.79-1.67.01-2.02.81-3.25.8-1.38-.02-2.44-1.4-3.23-2.65C2.1 14.45 1.97 10.35 3.54 8.2c1.11-1.52 2.87-2.42 4.52-2.42 1.49 0 2.43.81 3.67.81 1.2 0 1.93-.81 3.66-.81 1.47 0 3.03.8 4.14 2.18-3.63 1.99-3.04 7.17.81 8.4z" />
            </svg>
            Login with Apple
          </button>

          <button
            onClick={onBfd}
            className="flex h-[46px] items-center justify-center gap-2.5 rounded-[10px] bg-[#28282b] font-display text-[15px] font-semibold text-[#f5f5f5] transition-colors hover:bg-[#333336] sm:h-[54px] sm:text-[18px]"
          >
            <Image
              src="/figma/4f7a3ff411924636a56c0a0949836774ca0393e1.png"
              alt="BFD"
              width={41}
              height={18}
              className="shrink-0 object-contain"
              style={{ height: 15, width: "auto" }}
            />
            Login with BFD Token
          </button>
        </div>

        <div className="flex items-center gap-2.5 py-1.5 sm:py-3.5">
          <div className="h-px flex-1 bg-[#404040]" />
          <span className="font-display text-[15px] text-[#737373] sm:text-[18px]">OR</span>
          <div className="h-px flex-1 bg-[#404040]" />
        </div>

        <input
          type="email"
          placeholder="Email*"
          className="h-[46px] rounded-[10px] border border-[#333] bg-[#1a1a1a] px-5 py-3 font-display text-[15px] text-white placeholder:text-[#737373] outline-none transition-colors focus:border-[#60a5fa] sm:h-[54px] sm:text-[18px]"
        />
      </div>

      <div className="flex flex-col items-center gap-6 sm:gap-10">
        <button className="flex h-[46px] w-full items-center justify-center rounded-[10px] bg-[#004c8f] font-display text-[15px] text-white transition-colors hover:bg-[#005bab] sm:h-[54px] sm:text-[18px]">
          Continue
        </button>

        <p className="text-center font-display text-[13px] leading-normal text-[#737373] sm:text-[16px]">
          By continuing, you agree to our{" "}
          <a href="#" className="text-[#60a5fa] hover:underline">User Agreement</a> and
          acknowledge that you understand the{" "}
          <a href="#" className="text-[#60a5fa] hover:underline">Privacy Policy.</a>
        </p>

        <p className="text-center font-display text-[15px] text-[#737373] sm:text-[18px]">
          Already have account?{" "}
          <a href="#" className="text-[#60a5fa] hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
}

/* ─── BFD Token View ─── */

function BfdTokenView({ onVerify }: { onVerify: () => void }) {
  return (
    <div className="relative z-10 mx-4 flex w-full max-w-[439px] flex-col gap-8 sm:gap-10">
      <div className="flex flex-col gap-2.5 text-center">
        <h2 className="font-display text-[26px] font-bold text-white sm:text-[36px]">
          Connect Your BFD Account
        </h2>
        <p className="font-display text-[16px] leading-normal text-[#737373] sm:text-[20px]">
          Enter your unique access token from the BFD website to sync your subscription and unlock the portal.
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        <label className="font-display text-[17px] font-bold text-[#f5f5f5] sm:text-[20px]">
          BFD Token
        </label>
        <input
          type="text"
          placeholder="Enter your token"
          className="h-[48px] rounded-[6px] border border-[#4b4b4b] bg-transparent px-3 py-2 font-display text-[17px] text-white placeholder:text-[#d4d4d4] outline-none transition-colors focus:border-[#60a5fa] sm:h-[54px] sm:text-[20px]"
        />
      </div>

      <button
        onClick={onVerify}
        className="flex h-[48px] w-full items-center justify-center rounded-[10px] bg-[#144b83] font-body-alt text-[15px] font-medium tracking-[0.5px] text-white transition-colors hover:bg-[#1a5a9e] sm:h-[54px] sm:text-[16px]"
      >
        Verify and Unlock
      </button>
    </div>
  );
}

/* ─── Profile Setup View ─── */

function ProfileSetupView() {
  return (
    <div className="relative z-10 mx-4 flex w-full max-w-[544px] flex-col items-center gap-8 sm:gap-10">
      <div className="flex flex-col items-center gap-2.5 text-center">
        <h2 className="font-display text-[30px] font-bold text-[#f5f5f5] sm:text-[40px] lg:text-[48px]">
          Set up your profile
        </h2>
        <p className="max-w-[493px] font-display text-[16px] leading-normal text-[#d4d4d4] sm:text-[18px] lg:text-[20px]">
          Personalize your account with a profile photo and username. You can always change it later.
        </p>
      </div>

      <div className="flex size-[140px] items-end justify-center overflow-hidden rounded-full bg-[#28282b] sm:size-[170px] lg:size-[199px]">
        <svg
          viewBox="0 0 155 155"
          fill="none"
          className="mb-[-10px] h-[80%] w-[80%] text-[#6b6b6b]"
        >
          <circle cx="77.5" cy="50" r="28" fill="currentColor" />
          <ellipse cx="77.5" cy="140" rx="55" ry="42" fill="currentColor" />
        </svg>
      </div>

      <div className="flex w-full flex-col gap-2">
        <label className="font-body-alt text-[14px] font-normal tracking-[0.5px] text-[#f5f5f5] sm:text-[16px]">
          Username
        </label>
        <input
          type="text"
          placeholder="Set your username"
          className="h-[48px] rounded-[6px] border border-[#4b4b4b] bg-transparent px-4 py-2.5 font-body-alt text-[16px] tracking-[0.5px] text-white placeholder:text-[#d4d4d4] outline-none transition-colors focus:border-[#60a5fa] sm:h-[54px] sm:text-[18px] lg:h-[68px] lg:text-[22px]"
        />
      </div>

      <button className="flex h-[48px] w-full items-center justify-center rounded-[10px] bg-[#004c8f] font-body-alt text-[15px] font-medium tracking-[0.5px] text-white transition-colors hover:bg-[#005bab] sm:h-[54px] sm:text-[16px]">
        Next
      </button>
    </div>
  );
}
