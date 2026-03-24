import Image from "next/image";
import Link from "next/link";

const navItems = ["Home", "About", "Features", "FAQ"];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <header className="relative z-20 mx-auto flex w-full max-w-[1380px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-7">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Fishtechy
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/78 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white sm:inline-flex">
            Log in
          </button>
          <button className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110">
            Sign Up
          </button>
        </div>
      </header>

      <section className="hero-grid mx-auto grid w-full max-w-[1380px] items-center gap-12 px-5 pb-10 pt-6 sm:px-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)] lg:px-10 lg:pb-16 lg:pt-10">
        <div className="relative z-10 max-w-[720px]">
          <div className="relative inline-flex">
            <span className="absolute -left-2 -top-3 h-4 w-4 rounded-full bg-brand shadow-[0_0_0_6px_rgba(238,63,36,0.14)]" />
            <span className="rotate-[-12deg] rounded-full border border-white/12 bg-[#0d0b0b] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
              Patent Pending
            </span>
          </div>

          <div className="mt-7 sm:mt-9">
            <Image
              src="/figma/swing-element.png"
              alt="Fishtechy swing element"
              width={196}
              height={131}
              priority
              className="h-auto w-[112px] sm:w-[142px] lg:w-[170px]"
            />
          </div>

          <div className="mt-4 space-y-5 sm:mt-6">
            <h1 className="text-[3.25rem] font-bold leading-[0.92] tracking-[-0.04em] text-white sm:text-[4.5rem] lg:text-[5rem] xl:text-[5.4rem]">
              <span className="block">Measuring Fish</span>
              <span className="block text-brand">Reinvented</span>
            </h1>
            <p className="text-base font-semibold text-white/88 sm:text-[1.25rem]">
              Available for iOS &amp; Android
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-5">
            <a href="#download-app-store" aria-label="Download on the App Store" className="transition hover:scale-[1.02]">
              <Image
                src="/figma/app-store.png"
                alt="Download on the App Store"
                width={266}
                height={77}
                className="h-auto w-[180px] sm:w-[220px] lg:w-[240px]"
              />
            </a>
            <a href="#download-google-play" aria-label="Get it on Google Play" className="transition hover:scale-[1.02]">
              <Image
                src="/figma/google-play.png"
                alt="Get it on Google Play"
                width={264}
                height={77}
                className="h-auto w-[178px] sm:w-[218px] lg:w-[238px]"
              />
            </a>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] pt-6 sm:max-w-[600px] lg:max-w-[660px]">
            <div className="hero-phone-glow" />

            <div className="relative ml-auto w-[74%] sm:w-[68%] lg:w-[72%]">
              <Image
                src="/figma/hero-phone.png"
                alt="Fishtechy app preview on a mobile device"
                width={712}
                height={1472}
                priority
                className="relative z-10 h-auto w-full drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              />
            </div>

            <div className="metric-card-inner absolute bottom-[10%] left-0 z-20 w-[78%] max-w-[402px] rounded-[20px] bg-[#202020] p-5 shadow-hero-card sm:bottom-[12%] sm:left-[2%] sm:p-6">
              <div className="flex items-center gap-4 rounded-[12px]">
                <Image
                  src="/figma/measured-fish-avatar.png"
                  alt="Measured fish avatar"
                  width={83}
                  height={83}
                  className="h-[62px] w-[62px] rounded-[8px] sm:h-[72px] sm:w-[72px]"
                />
                <div>
                  <p className="text-[1.9rem] font-bold leading-none tracking-[-0.03em] text-brand sm:text-[2.3rem]">
                    124,058
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/86 sm:text-base">Fish Measured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
