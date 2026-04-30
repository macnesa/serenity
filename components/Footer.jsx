export default function Footer() {
  const nav = [
    { label: "The Yacht", href: "/yacht" },
    { label: "Destinations", href: "/destinations" },
    { label: "Experiences", href: "/experiences" },
    { label: "Rates & Schedule", href: "/rates-and-schedule" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <footer className="serenity-footer relative overflow-hidden border-t border-[#D9DDD6] bg-[#F4F5F2] text-[#2D3C68]">
        {/* ATMOSPHERE */}
        <div className="pointer-events-none absolute inset-0">
          {/* GOLD LINE */}
          <div className="serenity-gold-line absolute inset-x-0 top-0 h-px" />

          {/* GLOW */}
          <div className="absolute right-0 top-24 h-72 w-72 bg-[#2D3C68]/[0.025] blur-3xl" />
          <div className="absolute left-0 bottom-0 h-72 w-72 bg-[#2D3C68]/[0.02] blur-3xl" />

          {/* HERITAGE BAND */}
          <div className="serenity-band absolute inset-x-0 top-px h-[132px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1777477537/ChatGPT_Image_Apr_29_2026_10_44_09_PM_1_hrigkq.png"
              alt=""
              className="h-full w-full object-cover opacity-[0.07] mix-blend-multiply scale-[1.03]"
            />

            <div className="serenity-band-mask absolute inset-0" />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
          {/* MAIN */}
          <section className="pt-22 pb-14 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
            <div className="grid gap-y-14 gap-x-10 lg:grid-cols-[240px_minmax(0,1fr)_240px] lg:items-start">
              {/* LEFT */}
              <div className="order-2 lg:order-1">
                <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#2D3C68]/38">
                  Contact
                </p>

                <div className="space-y-2 text-sm leading-7 text-[#2D3C68]/76">
                  <a
                    href="mailto:hello@serenityyacht.com"
                    className="block transition duration-300 hover:text-[#2D3C68]"
                  >
                    hello@serenityyacht.com
                  </a>

                  <a
                    href="https://wa.me/620000000000"
                    className="block transition duration-300 hover:text-[#2D3C68]"
                  >
                    +62 000 0000 0000
                  </a>
                </div>

                <p className="mt-6 text-sm leading-7 text-[#2D3C68]/56">
                  Indonesia
                  <br />
                  Komodo · Raja Ampat
                </p>
              </div>

              {/* CENTER */}
              <div className="order-1 flex flex-col items-center text-center lg:order-2">
                <img
                  src="https://res.cloudinary.com/dombq6plz/image/upload/v1777356413/SERENITY_LOGO-02_u1bcf2_1_1_ahyyak.png"
                  alt="Serenity Yacht"
                  className="h-28 w-auto object-contain sm:h-32"
                />

                <div className="mt-6 h-px w-20 bg-[#B08D57]/65" />

                <p className="mt-6 max-w-[540px] text-sm leading-7 text-[#2D3C68]/66 sm:text-[15px]">
                  A private phinisi yacht shaped by Indonesian craft, calm
                  waters, and journeys that move at a better pace.
                </p>

                {/* EMAIL */}
                <div className="mt-8 w-full max-w-md">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#2D3C68]/38">
                    Private Access
                  </p>

                  <form className="mt-4 flex items-center gap-3 border-b border-[#2D3C68]/14 pb-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-[#2D3C68]/34"
                    />

                    <button
                      type="submit"
                      className="shrink-0 text-[11px] font-medium uppercase tracking-[0.22em] text-[#2D3C68] transition duration-300 hover:opacity-55"
                    >
                      Join
                    </button>
                  </form>
                </div>
              </div>

              {/* RIGHT */}
              <div className="order-3 lg:text-right">
                <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#2D3C68]/38">
                  Explore
                </p>

                <nav className="space-y-2 text-sm leading-7 text-[#2D3C68]/76">
                  {nav.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block transition duration-300 hover:text-[#2D3C68]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </section>

          {/* VALUE STRIP */}
          <section className="relative overflow-hidden border-y border-[#2D3C68]/10 py-4">
            <div className="serenity-strip absolute inset-0" />

            <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {["12 Guests", "4 Cabins", "10 Crew", "Phinisi Yacht"].map(
                (item, i) => (
                  <div key={item} className="flex items-center gap-8">
                    <span className="text-[10px] uppercase tracking-[0.26em] text-[#2D3C68]/48">
                      {item}
                    </span>

                    {i !== 3 && (
                      <span className="hidden h-1 w-1 rounded-full bg-[#B08D57]/55 sm:block" />
                    )}
                  </div>
                )
              )}
            </div>
          </section>

          {/* BOTTOM */}
          <section className="py-6">
            <div className="flex flex-col gap-4 text-xs text-[#2D3C68]/48 sm:text-sm lg:flex-row lg:items-center lg:justify-between">
              <p>© 2026 Serenity Yacht</p>

              <div className="flex flex-wrap gap-5">
                <a
                  href="/privacy-policy"
                  className="transition duration-300 hover:text-[#2D3C68]"
                >
                  Privacy Policy
                </a>

                <a
                  href="/terms-and-conditions"
                  className="transition duration-300 hover:text-[#2D3C68]"
                >
                  Terms & Conditions
                </a>
              </div>

              <div className="flex gap-5">
                <a
                  href="https://instagram.com"
                  className="transition duration-300 hover:text-[#2D3C68]"
                >
                  Instagram
                </a>

                <a
                  href="https://wa.me/620000000000"
                  className="transition duration-300 hover:text-[#2D3C68]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>

      <style jsx>{`
        .serenity-gold-line {
          background: linear-gradient(
            90deg,
            rgba(176, 141, 87, 0) 0%,
            rgba(176, 141, 87, 0.58) 50%,
            rgba(176, 141, 87, 0) 100%
          );
        }

        .serenity-band-mask {
          background:
            linear-gradient(
              to bottom,
              rgba(244, 245, 242, 1) 0%,
              rgba(244, 245, 242, 0.78) 16%,
              rgba(244, 245, 242, 0.06) 42%,
              rgba(244, 245, 242, 0.06) 58%,
              rgba(244, 245, 242, 0.78) 84%,
              rgba(244, 245, 242, 1) 100%
            ),
            linear-gradient(
              to right,
              rgba(244, 245, 242, 0.9) 0%,
              rgba(244, 245, 242, 0.08) 16%,
              rgba(244, 245, 242, 0.08) 84%,
              rgba(244, 245, 242, 0.9) 100%
            );
        }

        .serenity-strip {
          background: linear-gradient(
            90deg,
            rgba(45, 60, 104, 0) 0%,
            rgba(45, 60, 104, 0.015) 20%,
            rgba(45, 60, 104, 0.03) 50%,
            rgba(45, 60, 104, 0.015) 80%,
            rgba(45, 60, 104, 0) 100%
          );
        }

        @media (max-width: 768px) {
          .serenity-band {
            height: 104px;
          }
        }
      `}</style>
    </>
  );
}