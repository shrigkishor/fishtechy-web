import Image from "next/image";
import { Header } from "@/components/home/header";
import { SwingElementCanvas } from "@/components/home/swing-element-canvas";

export default function HomePage() {
  return (
    <main id="home" className="relative">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <section
        id="hero"
        className="hero-section mx-auto flex w-full max-w-[1920px] flex-col items-center gap-6 px-5 pt-[68px] pb-8 sm:px-6 sm:pt-[80px] md:flex-row md:items-center md:gap-8 md:px-8 md:pt-[88px] md:pb-0 lg:gap-10 lg:px-[80px] lg:pt-[92px] xl:gap-14 xl:px-[130px]"
      >
        <div className="relative z-10 flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <div className="h-[80px] w-[120px] sm:h-[100px] sm:w-[150px] md:h-[110px] md:w-[170px] lg:h-[131px] lg:w-[196px]">
            <SwingElementCanvas />
          </div>

          <h1 className="hero-heading mt-1 font-display font-bold leading-[1.06] text-foreground sm:mt-2">
            <span className="block">Measuring Fish</span>
            <span className="block text-brand">Reinvented</span>
          </h1>

          <p className="mt-1.5 font-body-alt text-[14px] font-semibold text-foreground/90 sm:mt-2 sm:text-[16px] lg:text-[20px] lg:leading-[30px]">
            Available for iOS &amp; Android
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:mt-5 sm:gap-4 md:justify-start lg:mt-8 xl:mt-10">
            <a
              href="#download-app-store"
              aria-label="Download on the App Store"
              className="store-badge transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:scale-[0.98]"
            >
              <Image
                src="/figma/86e7f0ef5385537eeef6a945743f2e8cfb073e21.png"
                alt="Download on the App Store"
                width={266}
                height={77}
                className="h-auto w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[266px]"
              />
            </a>
            <a
              href="#download-google-play"
              aria-label="Get it on Google Play"
              className="store-badge transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:scale-[0.98]"
            >
              <Image
                src="/figma/424a7a2c98b1115c51247713c477ee27fbf2d42b.png"
                alt="Get it on Google Play"
                width={264}
                height={77}
                className="h-auto w-[118px] sm:w-[148px] md:w-[178px] lg:w-[228px] xl:w-[264px]"
              />
            </a>
          </div>
        </div>

        <div className="relative z-10 shrink-0 pb-10 sm:pb-12 md:pb-4 lg:pb-0">
          <div className="flex justify-center md:justify-end">
            <div className="phone-container relative">
              <div className="phone-glow absolute inset-0 rounded-[36px] sm:rounded-[48px] lg:rounded-[56px]" />

              <Image
                src="/figma/aa56c406192f0f24715fd9e2c481235bbe62a6f1.png"
                alt="Fishtechy app showing AI fish measurement in action"
                width={356}
                height={736}
                priority
                className="phone-image relative z-10 h-auto w-[180px] sm:w-[220px] md:h-[55svh] md:w-auto lg:h-[72svh] xl:h-[76svh]"
              />

              <div className="stat-card absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 sm:-bottom-6 md:-bottom-2 md:left-auto md:right-0 md:translate-x-0 lg:-left-[55%] lg:bottom-[10%] lg:right-auto xl:-left-[70%] xl:bottom-[12%]">
                <div className="stat-card-bg w-[180px] rounded-[12px] bg-[#202020] p-1.5 sm:w-[200px] sm:rounded-[14px] sm:p-2 md:w-[220px] lg:w-[280px] lg:rounded-[16px] lg:p-2 xl:w-[320px] xl:rounded-[18px] xl:p-2.5">
                  <div className="flex items-center gap-2 rounded-[7px] border border-dashed border-[#ababab]/70 px-2 py-1.5 sm:gap-2 sm:rounded-[8px] sm:px-2.5 sm:py-1.5 md:gap-2.5 md:px-3 md:py-2 lg:gap-3 lg:rounded-[10px] lg:px-4 lg:py-2.5 xl:gap-4 xl:py-3">
                    <Image
                      src="/figma/ee881bad69f987215bc845c657d4eca815c20b80.png"
                      alt="Fish measured icon"
                      width={83}
                      height={83}
                      className="size-[26px] shrink-0 rounded-md object-contain sm:size-[30px] md:size-[36px] lg:size-[48px] xl:size-[58px]"
                    />
                    <div className="min-w-0">
                      <p className="font-display text-[13px] font-normal leading-tight text-brand sm:text-[15px] md:text-[18px] lg:text-[22px] xl:text-[26px]">
                        138,610
                      </p>
                      <p className="font-label text-[8px] font-bold leading-snug text-foreground sm:text-[9px] md:text-[11px] lg:text-[13px] xl:text-[15px]">
                        Fish Measured
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="measure"
        className="mx-auto flex w-full max-w-[1920px] flex-col items-center px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-[130px] lg:py-24 xl:px-[250px]"
      >
        <h2 className="text-center font-display text-[28px] font-bold leading-[1.06] text-foreground sm:text-[40px] md:text-[56px] lg:text-[70px] xl:text-[80px]">
          Measure Fish from your{" "}
          <span className="text-brand">Smartphone</span>
        </h2>

        <p className="mx-auto mt-4 max-w-[1414px] text-center font-display text-[14px] leading-normal text-[#d3d3d3] sm:mt-6 sm:text-[16px] lg:mt-8 lg:text-[18px] lg:leading-[30px] xl:text-[20px]">
          Fishtechy offers advanced fish measurement features utilizing a Proof Ball.
          With the Proof Ball, you can accurately measure the length, girth, and weight of fish in
          seconds. Fishtechy ensures accurate measurements with minimal fish handling, prioritizing the well-being of the fish.
        </p>

        <div className="mt-8 w-full overflow-hidden rounded-[10px] border-10 border-white shadow-[0px_0px_10px_0px_rgba(177,177,177,0.43)] sm:mt-10 lg:mt-12">
          <div className="relative aspect-video w-full bg-black">
            <video
              className="size-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/figma/aa56c406192f0f24715fd9e2c481235bbe62a6f1.png"
            >
              <source src="/videos/v2web_vdo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4 lg:mt-12">
          <a
            href="#download-app-store"
            aria-label="Download on the App Store"
            className="transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <Image
              src="/figma/86e7f0ef5385537eeef6a945743f2e8cfb073e21.png"
              alt="Download on the App Store"
              width={247}
              height={71}
              className="h-auto w-[140px] sm:w-[180px] lg:w-[220px] xl:w-[247px]"
            />
          </a>
          <a
            href="#download-google-play"
            aria-label="Get it on Google Play"
            className="transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <Image
              src="/figma/424a7a2c98b1115c51247713c477ee27fbf2d42b.png"
              alt="Get it on Google Play"
              width={245}
              height={71}
              className="h-auto w-[138px] sm:w-[178px] lg:w-[218px] xl:w-[245px]"
            />
          </a>
        </div>

        <a
          href="#learn-more"
          className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[5px] bg-[#124b83] px-8 font-body-alt text-[14px] text-foreground transition-colors hover:bg-[#1a5a9e] sm:mt-8 sm:h-[47px] sm:text-[15px]"
        >
          Learn More
        </a>
      </section>
    </main>
  );
}
