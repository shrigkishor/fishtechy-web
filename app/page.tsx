import Image from "next/image";
import Link from "next/link";

const navItems = ["Home", "About", "Features", "FAQ"];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <header className="relative z-20 mx-auto flex w-full max-w-[1380px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-7">
        <Link href="/" className="text-[1.35rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.65rem]">
          Fishtechy
        </Link>

        <nav className="hidden items-center gap-9 text-[15px] font-medium text-white/78 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden h-11 items-center justify-center rounded-full border border-brand px-5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white sm:inline-flex">
            Log in
          </button>
          <button className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-white transition hover:brightness-110">
            Sign Up
          </button>
        </div>
      </header>

      <section className="hero-grid mx-auto grid w-full max-w-[1380px] items-center gap-12 px-5 pb-10 pt-4 sm:px-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(430px,0.94fr)] lg:px-10 lg:pb-16 lg:pt-8">
        <div className="relative z-10 max-w-[760px] lg:pb-10">
          <div className="relative inline-flex">
            <span className="absolute -left-2.5 -top-3.5 h-[15px] w-[15px] rounded-full bg-brand shadow-[0_0_0_6px_rgba(238,63,36,0.15)]" />
            <span className="rotate-[-12deg] rounded-full border border-white/12 bg-[#0d0b0b] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
              Patent Pending
            </span>
          </div>

          <div className="mt-8 sm:mt-9 lg:mt-10">
            <Image
              src="/figma/swing-element.png"
              alt="Fishtechy swing element"
              width={196}
              height={131}
              priority
              className="h-auto w-[116px] sm:w-[146px] lg:w-[196px]"
            />
          </div>

          <div className="mt-4 space-y-5 sm:mt-6 lg:mt-[18px]">
            <h1 className="text-[3.3rem] font-bold leading-[0.91] tracking-[-0.05em] text-white sm:text-[4.85rem] lg:text-[5.6rem] xl:text-[6rem]">
              <span className="block">Measuring Fish</span>
              <span className="block text-brand">Reinvented</span>
            </h1>
            <p className="text-base font-semibold tracking-[-0.01em] text-white/88 sm:text-[1.25rem] lg:text-[1.28rem]">
              Available for iOS &amp; Android
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-5 lg:mt-8">
            <a
              href="#download-app-store"
              aria-label="Download on the App Store"
              className="transition hover:scale-[1.02]"
            >
              <Image
                src="/figma/app-store.png"
                alt="Download on the App Store"
                width={266}
                height={77}
                className="h-auto w-[182px] sm:w-[222px] lg:w-[266px]"
              />
            </a>
            <a
              href="#download-google-play"
              aria-label="Get it on Google Play"
              className="transition hover:scale-[1.02]"
            >
              <Image
                src="/figma/google-play.png"
                alt="Get it on Google Play"
                width={264}
                height={77}
                className="h-auto w-[180px] sm:w-[220px] lg:w-[264px]"
              />
            </a>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px] pt-4 sm:max-w-[620px] lg:max-w-[720px] lg:pt-0">
            <div className="hero-phone-glow" />

            <div className="relative ml-auto w-[74%] sm:w-[69%] lg:w-[71%] xl:w-[69%]">
              <Image
                src="/figma/hero-phone.png"
                alt="Fishtechy app preview on a mobile device"
                width={712}
                height={1472}
                priority
                className="relative z-10 h-auto w-full drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              />
            </div>

            <div className="metric-card-inner absolute bottom-[11%] left-0 z-20 w-[79%] max-w-[402px] rounded-[20px] bg-[#202020] p-[10px] shadow-hero-card sm:bottom-[12%] sm:left-[1.5%] lg:left-[2%]">
              <div className="flex items-center gap-4 rounded-[12px] px-[22px] py-[20px]">
                <Image
                  src="/figma/measured-fish-avatar.png"
                  alt="Measured fish avatar"
                  width={83}
                  height={83}
                  className="h-[62px] w-[62px] rounded-[8px] sm:h-[72px] sm:w-[72px] lg:h-[82px] lg:w-[82px]"
                />
                <div>
                  <p className="text-[1.95rem] font-bold leading-none tracking-[-0.03em] text-brand sm:text-[2.35rem] lg:text-[3rem]">
                    124,058
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/86 sm:text-base lg:text-[1.25rem]">
                    Fish Measured
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
