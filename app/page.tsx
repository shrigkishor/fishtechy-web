import Image from "next/image";
import Link from "next/link";
import { SwingElementCanvas } from "@/components/home/swing-element-canvas";

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

export default function HomePage() {
  return (
    <main id="home" className="relative overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-30 bg-background">
        <div className="mx-auto flex w-full max-w-[1920px] items-center gap-10 px-6 py-[30px] lg:px-[100px]">
          <Link href="/" className="shrink-0" aria-label="Fishtechy home">
            <Image
              src="/figma/header-logo-real.png"
              alt="Fishtechy official logo"
              width={535}
              height={120}
              priority
              className="h-auto w-[184px] lg:w-[267.47px]"
            />
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center overflow-x-auto whitespace-nowrap lg:flex">
            <div className="flex items-center gap-6 px-[15px] py-[15px] text-[20px] font-semibold text-[#f4f4f4]">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={item.active ? "text-brand" : "text-[#f4f4f4]"}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-[19px]">
            <button className="inline-flex h-[40px] w-[106.2px] shrink-0 items-center justify-center rounded-[5px] border border-[#144b83] bg-[#144b83] text-[16px] leading-4 font-medium text-white transition hover:brightness-110">
              Sign Up
            </button>
            <button className="inline-flex h-10 w-[106.2px] items-center justify-center rounded-[5px] border border-brand bg-transparent text-base font-medium text-white transition hover:bg-brand/10">
              Log in
            </button>
          </div>
        </div>
      </header>

      <section className="hero-grid mx-auto grid w-full max-w-[1380px] items-center gap-12 px-5 pb-10 pt-[132px] sm:px-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(430px,0.94fr)] lg:px-10 lg:pb-16 lg:pt-[150px]">
        <div className="relative z-10 max-w-[760px] lg:pb-10">
          <div className="mt-8 sm:mt-9 lg:mt-10">
            <SwingElementCanvas />
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

            <div className="metric-card-inner absolute bottom-[15%] left-[-10%] z-20 w-[84%] max-w-[402px] rounded-[20px] bg-[#202020] p-[10px] shadow-hero-card sm:bottom-[16%] sm:left-[-6%] lg:left-[-16%]">
              <div className="flex items-center gap-[24px] rounded-[12px] px-[20px] py-[18px]">
                <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-white sm:h-[72px] sm:w-[72px] lg:h-[78px] lg:w-[78px]">
                  <Image
                    src="/figma/measured-fish-avatar.png"
                    alt="Fish measured icon"
                    width={83}
                    height={83}
                    className="h-[34px] w-[34px] rounded-none object-contain sm:h-[40px] sm:w-[40px] lg:h-[44px] lg:w-[44px]"
                  />
                </div>
                <div>
                  <p className="text-[1.9rem] font-normal leading-none tracking-[0] text-brand sm:text-[2.05rem] lg:text-[32px]">
                    124,058
                  </p>
                  <p className="mt-1 text-[14px] font-bold leading-5 text-[#f4f4f4] sm:text-[17px] lg:text-[19.5px]">
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
