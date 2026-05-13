"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScroll = useRef(0);

  /*
    ========================================
    SCROLL SYSTEM
    ========================================
  */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const current = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(current > 24);

          if (current < 40) {
            setShow(true);

            lastScroll.current = current;

            ticking = false;

            return;
          }

          if (
            current > lastScroll.current &&
            current > 120
          ) {
            setShow(false);
          } else {
            setShow(true);
          }

          lastScroll.current = current;

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
  }, []);

  /*
    ========================================
    BODY LOCK
    ========================================
  */

  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /*
    ========================================
    MENU ROWS
    ========================================
  */

  const menuRows = [
    [
      {
        label: "Home",
        href: "/",
        className:
          "text-[64px] tracking-[-0.042em] md:text-[74px]",
      },

      {
        label: "The Yacht",
        href: "/yacht",
        className:
          "text-[70px] tracking-[-0.05em] md:text-[80px]",
      },
    ],

    [
      {
        label: "Experiences",
        href: "/experiences",
        className:
          "text-[68px] tracking-[-0.05em] md:text-[78px]",
      },

      {
        label: "Destinations",
        href: "/destinations",
        className:
          "text-[70px] tracking-[-0.05em] md:text-[80px]",
      },
    ],

    [
      {
        label: "Rates & Schedule",
        href: "/rates-and-schedule",
        className:
          "text-[52px] tracking-[-0.028em] md:text-[60px]",
      },

      {
        label: "About",
        href: "/about",
        className:
          "text-[58px] tracking-[-0.04em] md:text-[66px]",
      },

      {
        label: "Contact",
        href: "/contact",
        className:
          "text-[58px] tracking-[-0.04em] md:text-[66px]",
      },
    ],
  ];

  /*
    ========================================
    MOBILE MENU
    ========================================
  */

  const mobileMenu = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "The Yacht",
      href: "/yacht",
    },

    {
      label: "Experiences",
      href: "/experiences",
    },

    {
      label: "Destinations",
      href: "/destinations",
    },

    {
      label: "Rates & Schedule",
      href: "/rates-and-schedule",
    },

    {
      label: "About",
      href: "/about",
    },

    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* ========================================= */}
      {/* NAVBAR */}
      {/* ========================================= */}

      <motion.header
        animate={{
          y: show ? 0 : -140,
          opacity: show ? 1 : 0,
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-1/2 top-4 z-50 w-[94%] max-w-[1240px] -translate-x-1/2 md:top-5"
      >
        <div
          className={`relative overflow-hidden rounded-full border transition-all duration-500 ${
            scrolled
              ? "border-[#2D3C68]/10 bg-[#F4F5F2]/92 shadow-[0_14px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl"
              : "border-white/14 bg-black/[0.08] backdrop-blur-[14px]"
          }`}
        >
          {/* ATMOSPHERIC EDGE */}

          <div
            className={`absolute left-0 top-0 h-px w-full transition-all duration-500 ${
              scrolled
                ? "bg-gradient-to-r from-transparent via-[#B08D57]/26 to-transparent"
                : "bg-gradient-to-r from-transparent via-white/12 to-transparent"
            }`}
          />

          {/* INNER */}

          <div
            className={`grid grid-cols-3 items-center px-4 py-[10px] transition-all duration-500 md:px-7 md:py-4 ${
              scrolled
                ? "text-[#2D3C68]"
                : "text-[#F4F5F2]"
            }`}
          >
            {/* LEFT */}

            <div className="flex items-center justify-start">
              <button
                onClick={() => setOpen(true)}
                className="group inline-flex items-center gap-2.5 transition-all duration-300 md:gap-3"
              >
                <Menu
                  strokeWidth={1.5}
                  className="h-[15px] w-[15px] opacity-[0.86] transition-all duration-300 group-hover:opacity-100"
                />

                <span className="hidden text-[11px] uppercase tracking-[0.32em] opacity-[0.88] transition-all duration-300 group-hover:opacity-100 sm:block">
                  Menu
                </span>
              </button>
            </div>

            {/* CENTER */}

            <div className="flex justify-center">
              <Link
                href="/"
                className="relative block h-[28px] w-[122px] md:h-[40px] md:w-[180px]"
              >
                {/* LIGHT */}

                <Image
                  src="https://res.cloudinary.com/dombq6plz/image/upload/v1777356413/SERENITY_LOGO-02_u1bcf2_1_zc65st.png"
                  alt="Serenity"
                  fill
                  priority
                  className={`object-contain transition-all duration-500 ${
                    scrolled
                      ? "opacity-0"
                      : "opacity-[0.95]"
                  }`}
                />

                {/* DARK */}

                <Image
                  src="https://res.cloudinary.com/dombq6plz/image/upload/v1777356413/SERENITY_LOGO-02_u1bcf2_1_zc65st.png"
                  alt="Serenity"
                  fill
                  priority
                  className={`object-contain brightness-0 transition-all duration-500 ${
                    scrolled
                      ? "opacity-[0.9]"
                      : "opacity-0"
                  }`}
                />
              </Link>
            </div>

            {/* RIGHT */}

            <div className="flex justify-end">
              {/* MOBILE */}

              <Link
                href="/contact"
                className={`group inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.28em] transition-all duration-300 md:hidden ${
                  scrolled
                    ? "text-[#2D3C68]/84"
                    : "text-[#F4F5F2]/82"
                }`}
              >
                <span>Enquire</span>

                <ArrowUpRight
                  strokeWidth={1.5}
                  className="h-[11px] w-[11px] transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                />
              </Link>

              {/* DESKTOP */}

              <Link
                href="/contact"
                className={`group hidden items-center gap-2 rounded-full border px-5 py-2 text-[12px] uppercase tracking-[0.28em] transition-all duration-300 md:inline-flex ${
                  scrolled
                    ? "border-[#2D3C68]/14 bg-[#2D3C68] text-[#F4F5F2] hover:scale-[1.03]"
                    : "border-[#F4F5F2]/32 text-[#F4F5F2] hover:bg-[#F4F5F2] hover:text-[#2D3C68]"
                }`}
              >
                <span>Reserve</span>

                <ArrowUpRight
                  strokeWidth={1.5}
                  className="h-[13px] w-[13px] transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ========================================= */}
      {/* FULLSCREEN MENU */}
      {/* ========================================= */}

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="fixed inset-0 z-[100] overflow-hidden bg-[#24345A] text-[#F4F5F2] md:bg-[#2D3C68]"
          >
            {/* ========================================= */}
            {/* ATMOSPHERE */}
            {/* ========================================= */}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(176,141,87,0.08),transparent_50%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_45%,rgba(255,255,255,0.03),transparent_55%)]" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.10] via-transparent to-black/[0.24]" />

            {/* ========================================= */}
            {/* ATMOSPHERIC EMBLEM */}
            {/* ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pointer-events-none absolute right-[-14%] top-1/2 hidden -translate-y-1/2 lg:block"
            >
              <div className="relative h-[820px] w-[820px]">
                {/* GLOW */}

                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.04),transparent_68%)] blur-3xl" />

                {/* EMBLEM */}

                <Image
                  src="https://res.cloudinary.com/dombq6plz/image/upload/v1778486752/ChatGPT_Image_May_11_2026_03_01_56_PM_2_k2aiwl.png"
                  alt="Serenity Emblem"
                  fill
                  priority
                  className="
                    object-contain
                    opacity-[0.035]
                    blur-[0.4px]
                    contrast-125
                    brightness-125
                    mix-blend-screen
                  "
                />
              </div>
            </motion.div>

            {/* ========================================= */}
            {/* CONTENT */}
            {/* ========================================= */}

            <div
              className="
                relative
                flex
                h-full
                flex-col
                px-6
                pt-[max(env(safe-area-inset-top),24px)]
                pb-[max(env(safe-area-inset-bottom),24px)]
                md:px-12
                md:py-10
              "
            >
              {/* TOP */}

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="text-[10px] uppercase tracking-[0.32em] text-white/46 md:text-[11px]">
                  Serenity
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="group inline-flex items-center gap-3 text-white/56 transition-all duration-500 hover:text-white/90"
                >
                  <span className="text-[10px] uppercase tracking-[0.32em] md:text-[11px]">
                    Close
                  </span>

                  <X
                    strokeWidth={1.4}
                    className="h-[15px] w-[15px] transition-transform duration-500 group-hover:rotate-90"
                  />
                </button>
              </div>

              {/* ========================================= */}
              {/* MOBILE NAVIGATION */}
              {/* ========================================= */}

              <div className="flex flex-1 items-center md:hidden">
                <div className="w-full">
                  {mobileMenu.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        y: 24,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.55,
                        delay:
                          0.06 + i * 0.06,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      className="border-b border-white/[0.08]"
                    >
                      <Link
                        href={item.href}
                        onClick={() =>
                          setOpen(false)
                        }
                        className="group flex items-center justify-between py-5"
                      >
                        <span className="font-[Gambarino] text-[34px] leading-none tracking-[-0.04em]">
                          {item.label}
                        </span>

                        <ArrowUpRight
                          strokeWidth={1.4}
                          className="
                            h-[15px]
                            w-[15px]
                            text-white/28
                            transition-all
                            duration-500
                            group-hover:translate-x-[1px]
                            group-hover:-translate-y-[1px]
                            group-hover:text-white/72
                          "
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ========================================= */}
              {/* DESKTOP NAVIGATION */}
              {/* ========================================= */}

              <div className="hidden flex-1 items-center justify-center md:flex">
                <div className="w-full max-w-[1240px]">
                  <div className="flex flex-col items-center">
                    {/* ROW 1 */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-end justify-center gap-x-24"
                    >
                      {menuRows[0].map(
                        (item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() =>
                              setOpen(false)
                            }
                            className="group inline-flex items-center"
                          >
                            <span
                              className={`font-[Gambarino] leading-[0.92] text-white transition-all duration-700 group-hover:opacity-[0.72] ${item.className}`}
                            >
                              {item.label}
                            </span>
                          </Link>
                        ),
                      )}
                    </motion.div>

                    {/* ROW 2 */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="mt-5 flex items-start justify-center gap-x-16"
                    >
                      {menuRows[1].map(
                        (item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() =>
                              setOpen(false)
                            }
                            className="group inline-flex items-center"
                          >
                            <span
                              className={`font-[Gambarino] leading-[0.92] text-white transition-all duration-700 group-hover:opacity-[0.72] ${item.className}`}
                            >
                              {item.label}
                            </span>
                          </Link>
                        ),
                      )}
                    </motion.div>

                    {/* ROW 3 */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="mt-10 flex items-start justify-center gap-x-14"
                    >
                      {menuRows[2].map(
                        (item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() =>
                              setOpen(false)
                            }
                            className="group inline-flex items-center"
                          >
                            <span
                              className={`font-[Gambarino] leading-[0.94] text-white/78 transition-all duration-700 group-hover:text-white ${item.className}`}
                            >
                              {item.label}
                            </span>
                          </Link>
                        ),
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* FOOTER */}

              <div className="grid gap-3 border-t border-white/[0.08] pt-6 text-[10px] uppercase tracking-[0.2em] text-white/34 md:grid-cols-3 md:text-[11px] md:text-white/36">
                <div>
                  Indonesia Archipelago
                </div>

                <div className="md:text-center">
                  Quiet journeys across the sea
                </div>

                <div className="md:text-right">
                  Serenity Yacht
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}