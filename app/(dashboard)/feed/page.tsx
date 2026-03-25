import Image from "next/image";

const MOCK_POST = {
  author: "Dennis Tom",
  badge: "Guide",
  date: "Jan 22, 2025",
  text: "Lorem ipsum dolor sit amet consectetur. Vulpu...",
  image: "/figma/aa56c406192f0f24715fd9e2c481235bbe62a6f1.png",
  species: "Rainbow Trout",
  forkLength: "16.46\"",
  length: "17.39\"",
  girth: "4.39\"",
  weight: "1.39 lbs",
  verified: true,
};

export default function FeedPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center px-4 py-6 sm:min-h-[calc(100vh-80px)] sm:px-6 sm:py-8 lg:min-h-[calc(100vh-96px)]">
      <div className="flex w-full max-w-[700px] items-start gap-4 lg:gap-6">
        <article className="w-full max-w-[534px] overflow-hidden rounded-[16px] bg-[#0a0a0a]">
          <div className="flex items-center gap-3 px-4 pt-4 pb-2 sm:px-5 sm:pt-5">
            <div className="size-[36px] overflow-hidden rounded-full bg-[#28282b] sm:size-[42px]">
              <div className="flex size-full items-center justify-center text-[14px] font-bold text-white">
                D
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-display text-[14px] font-semibold text-white sm:text-[16px]">
                  {MOCK_POST.author}
                </span>
                <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-white sm:text-[11px]">
                  {MOCK_POST.badge}
                </span>
                <span className="text-[12px] text-[#737373] sm:text-[13px]">{MOCK_POST.date}</span>
              </div>
              <p className="mt-0.5 text-[12px] text-[#a0a0a0] sm:text-[13px]">
                {MOCK_POST.text}{" "}
                <span className="font-semibold text-[#60a5fa]">More</span>
              </p>
            </div>
          </div>

          <div className="relative mt-1 aspect-534/700 w-full">
            <Image
              src={MOCK_POST.image}
              alt="Fishing catch"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-3 left-3 right-3 rounded-[12px] bg-black/70 px-4 py-3 backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:px-5 sm:py-4">
              <div className="flex items-center justify-between text-[11px] sm:text-[12px]">
                <div className="flex items-center gap-1.5">
                  <span className="rounded-full bg-brand/80 px-2 py-0.5 text-[10px] font-semibold text-white">
                    + {MOCK_POST.species}
                  </span>
                </div>
                <span className="text-[#a0a0a0]">Fork Length - {MOCK_POST.forkLength}</span>
              </div>

              <div className="mt-2 flex items-center gap-4 text-white sm:gap-6">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#a0a0a0] sm:text-[12px]">↔</span>
                  <span className="font-display text-[16px] font-semibold sm:text-[18px]">{MOCK_POST.length}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#a0a0a0] sm:text-[12px]">⌀</span>
                  <span className="font-display text-[16px] font-semibold sm:text-[18px]">{MOCK_POST.girth}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#a0a0a0] sm:text-[12px]">⚖</span>
                  <span className="font-display text-[16px] font-semibold sm:text-[18px]">{MOCK_POST.weight}</span>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="font-display text-[11px] text-[#a0a0a0] sm:text-[12px]">Fishtechy®</span>
                {MOCK_POST.verified && (
                  <span className="rounded-full bg-brand/20 px-2 py-0.5 text-[9px] font-semibold text-brand sm:text-[10px]">
                    AI Verified
                  </span>
                )}
              </div>
            </div>
          </div>
        </article>

        <div className="hidden flex-col items-center gap-5 pt-[400px] lg:flex">
          <SocialButton count={null}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
          </SocialButton>
          <SocialButton count="8">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
          </SocialButton>
          <SocialButton count="4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>
          </SocialButton>
          <SocialButton count={null}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" /></svg>
          </SocialButton>
          <SocialButton count={null}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>
          </SocialButton>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8">
        <button className="flex items-center gap-2.5 rounded-full bg-[#1a1a1a] px-5 py-3 font-display text-[14px] text-white shadow-lg transition-colors hover:bg-[#252525] sm:text-[16px]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
          Get App
        </button>
      </div>

      <div className="fixed bottom-6 right-6 top-auto flex-col gap-3 sm:right-8 lg:fixed lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:flex xl:right-14">
        <button className="hidden size-[48px] items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:bg-white/5 hover:text-white lg:flex" aria-label="Scroll up">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6" /></svg>
        </button>
        <button className="hidden size-[48px] items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:bg-white/5 hover:text-white lg:flex" aria-label="Scroll down">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
        </button>
      </div>
    </div>
  );
}

function SocialButton({ children, count }: { children: React.ReactNode; count: string | null }) {
  return (
    <button className="flex flex-col items-center gap-1 text-white/60 transition-colors hover:text-white">
      {children}
      {count && <span className="text-[12px]">{count}</span>}
    </button>
  );
}
