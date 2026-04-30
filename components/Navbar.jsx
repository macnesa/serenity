"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 24);

      if (current < 40) {
        setShow(true);
        lastScroll.current = current;
        return;
      }

      if (current > lastScroll.current && current > 120) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menuItems = [
    { label: "The Yacht", href: "/yacht" },
{ label: "Experiences", href: "/experiences" },
{ label: "Destinations", href: "/destinations" },
{ label: "Rates & Schedule", href: "/rates-and-schedule" },
{ label: "About", href: "/about" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        animate={{
          y: show ? 0 : -140,
          opacity: show ? 1 : 0,
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1240px]"
      >
        <div
          className={`
            relative overflow-hidden rounded-full border
            transition-all duration-500
            ${
              scrolled
                ? "bg-[#F4F5F2]/94 backdrop-blur-xl border-[#2D3C68]/10 shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
                : "bg-transparent border-white/18"
            }
          `}
        >
          {/* top accent */}
          <div
            className={`
              absolute left-0 top-0 h-[1px] w-full transition-all duration-500
              ${
                scrolled
                  ? "bg-[#B08D57]/30"
                  : "bg-white/14"
              }
            `}
          />

          <div
            className={`
              grid grid-cols-3 items-center px-5 md:px-7 py-3 md:py-4
              transition-colors duration-500
              ${
                scrolled
                  ? "text-[#2D3C68]"
                  : "text-[#F4F5F2]"
              }
            `}
          >
            {/* LEFT */}
            <div className="flex items-center justify-start gap-4">
              <button
                onClick={() => setOpen(true)}
                className="text-[11px] md:text-[12px] tracking-[0.32em] uppercase opacity-90 hover:opacity-100 transition"
              >
                Menu
              </button>
 
            </div>

            {/* CENTER */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="relative block h-[34px] w-[150px] md:h-[40px] md:w-[180px]"
              >
<Image
  src="https://res.cloudinary.com/dombq6plz/image/upload/v1777356413/SERENITY_LOGO-02_u1bcf2_1_zc65st.png"
  alt="Serenity"
  fill
  priority
  className={`
    object-contain transition-all duration-500
    ${
      scrolled
        ? "opacity-100 invert-0 brightness-0"
        : "opacity-95 invert brightness-0"
    }
  `}
/>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="flex justify-end">
              <Link
                href="/contact"
                className={`
                  rounded-full px-4 md:px-5 py-2
                  text-[11px] md:text-[12px]
                  tracking-[0.28em] uppercase
                  border transition-all duration-300
                  ${
                    scrolled
                      ? "border-[#2D3C68]/16 bg-[#2D3C68] text-[#F4F5F2] hover:scale-[1.03]"
                      : "border-[#F4F5F2]/45 text-[#F4F5F2] hover:bg-[#F4F5F2] hover:text-[#2D3C68]"
                  }
                `}
              >
                Reserve
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-[100] bg-[#2D3C68] text-[#F4F5F2]"
          >
            <div className="relative flex h-full flex-col px-6 md:px-12 py-6 md:py-10">
              {/* TOP */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="text-[11px] md:text-[12px] tracking-[0.32em] uppercase opacity-70">
                  Serenity
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-[11px] md:text-[12px] tracking-[0.32em] uppercase opacity-70 hover:opacity-100 transition"
                >
                  Close
                </button>
              </div>

              {/* LINKS */}
              <div className="flex-1 flex items-center">
                <div className="w-full">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.06 + i * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="border-b border-white/10"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between py-4 md:py-6"
                      >
                        <span className="font-[Gambarino] text-[34px] md:text-[58px] leading-none">
                          {item.label}
                        </span>

                        <span className="text-[11px] tracking-[0.28em] uppercase opacity-0 group-hover:opacity-70 transition">
                          Enter
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FOOTER */}
              <div className="grid gap-3 md:grid-cols-3 border-t border-white/10 pt-6 text-[11px] tracking-[0.2em] uppercase text-white/40">
                <div>Indonesia Archipelago</div>
                <div className="md:text-center">12 Guests · 10 Crew</div>
                <div className="md:text-right">Serenity Yacht</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}