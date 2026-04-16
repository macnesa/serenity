"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 40) {
        setShow(true);
        setLastScroll(current);
        return;
      }

      if (current > lastScroll) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      {/* NAVBAR */}
      <motion.div
        animate={{
          y: show ? 0 : -120,
          opacity: show ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-[1200px]"
      >
        <div className="grid grid-cols-3 items-center px-6 py-3 text-[#F4F5F2]">

          {/* LEFT */}
          <div className="flex justify-start">
            <button
              onClick={() => setOpen(true)}
              className="text-[12px] tracking-[0.25em] opacity-90 hover:opacity-100 transition"
            >
              MENU
            </button>
          </div>

          {/* CENTER (TRUE CENTER) */}
          <div className="flex justify-center">
            <Link href="/">
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1776050011/SERENITY_LOGO-02_u1bcf2.png"
                alt="Serenity"
                className="h-[34px] md:h-[42px] opacity-95 cursor-pointer"
              />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex justify-end">
            <Link
              href="/contact"
              className="text-[12px] tracking-[0.25em] border border-[#F4F5F2]/50 px-4 py-1.5 rounded-full hover:bg-[#F4F5F2] hover:text-[#2D3C68] hover:border-[#F4F5F2] transition"
            >
              RESERVE
            </Link>
          </div>

        </div>
      </motion.div>

      {/* POPUP MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#2D3C68] z-50 text-[#F4F5F2] flex flex-col justify-between px-10 py-10"
          >

            {/* TOP BAR */}
            <div className="flex justify-between items-center">
              <div className="text-[12px] tracking-[0.3em] opacity-80">
                SERENITY
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-[12px] tracking-[0.3em] opacity-80"
              >
                CLOSE
              </button>
            </div>

            {/* MENU LINKS */}
            <div className="flex flex-col gap-6 text-[32px] md:text-[44px] font-[Gambarino]">

              <Link
                href="/journeys"
                onClick={() => setOpen(false)}
                className="opacity-80 hover:opacity-100 transition"
              >
                Journeys
              </Link>

              <Link
                href="/yacht"
                onClick={() => setOpen(false)}
                className="opacity-80 hover:opacity-100 transition"
              >
                The Yacht
              </Link>

              <Link
                href="/destinations"
                onClick={() => setOpen(false)}
                className="opacity-80 hover:opacity-100 transition"
              >
                Destinations
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="opacity-80 hover:opacity-100 transition"
              >
                Contact
              </Link>

            </div>

            {/* FOOTER */}
            <div className="text-[12px] text-[#F4F5F2]/40">
              Indonesia — Serenity Yacht
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}