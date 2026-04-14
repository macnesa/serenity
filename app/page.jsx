"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "../lib/gsap"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Footer from '../components/Footer'
 
/* =========================
   PAGE WRAPPER
========================= */
export default function Home() {
  return (
    <main className="bg-[#0a0f14] text-white overflow-hidden">
      <Hero />
      <Experience/>
      <Destinations/>
      <About/>
      <OnBoard/>
      <GalleryStrip/>
      <Reflections/>
      <Social/>
      <Closing/>
      {/* <Statement/> */}
      {/* <Yacht/>   */}
      {/* <Expedition/> */}
      {/* <Moments /> */}
      {/* <CTA/> */}
      <Footer/>
    </main>
  )
}


/* =========================
   HERO SECTION
========================= */
function Hero() {
  const [open, setOpen] = useState(false);

  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let current = 0;
    let target = 0;

    const handleScroll = () => {
      target = window.scrollY;
    };

    const loop = () => {
      current += (target - current) * 0.06;

      if (bgRef.current) {
        const scale = 1 + current * 0.00005;
        bgRef.current.style.transform = `scale(${scale})`;
      }

      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${current * 0.015}px)`;
      }

      requestAnimationFrame(loop);
    };

    window.addEventListener("scroll", handleScroll);
    loop();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="https://res.cloudinary.com/dombq6plz/image/upload/v1776086743/Walking_towards_the_phinisi_bow_1_jasshx.png"
          alt="Serenity Yacht at sea"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#2D3C68]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D3C68]/15 to-transparent" />
      </div>

      {/* ================= NAV ================= */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-[1200px]">
        <div className="flex items-center justify-between px-6 py-3 text-[#F4F5F2]">

          <button
            onClick={() => setOpen(true)}
            className="text-[12px] tracking-[0.25em] opacity-90 hover:opacity-100 transition"
          >
            MENU
          </button>

          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1776050011/SERENITY_LOGO-02_u1bcf2.png"
            alt="Serenity"
            className="h-[34px] md:h-[42px] opacity-95"
          />

          <button className="text-[12px] tracking-[0.25em] border border-[#F4F5F2]/50 px-4 py-1.5 rounded-full hover:bg-[#F4F5F2] hover:text-[#2D3C68] hover:border-[#F4F5F2] transition">
            RESERVE
          </button>

        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div
  ref={contentRef}
  className="relative z-10 h-full flex items-end justify-center text-center px-6 pb-[13vh]"
>
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="max-w-[760px]"
  >

    {/* HEADLINE */}
    <h1 className="font-[Gambarino] text-[48px] md:text-[74px] lg:text-[88px] leading-[1.02] tracking-[-0.04em] text-[#F4F5F2]">
  <span className="block opacity-90">
    Sail Beyond the
  </span>
  <span className="block">
    Ordinary
  </span>
</h1>

    {/* BODY */}
    <p className="mt-5 text-[15px] md:text-[17px] text-[#F4F5F2]/85 max-w-[520px] mx-auto leading-relaxed">
      Step into a slower rhythm at sea — where every journey is shared, open, and quietly unforgettable.
    </p>

    {/* CTA */}
    <div className="mt-10 flex justify-center">
      <button className="group px-8 py-3 rounded-full border border-[#F4F5F2]/60 text-[13px] tracking-[0.02em] text-[#F4F5F2] transition-all duration-500 hover:bg-[#F4F5F2] hover:text-[#2D3C68] hover:border-[#F4F5F2]">
        <span className="inline-block transition-transform duration-500 group-hover:translate-y-[-2px]">
          Begin the Journey →
        </span>
      </button>
    </div>

  </motion.div>

  {/* SMART GRADIENT (bukan overlay goblok) */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2D3C68]/35 via-[#2D3C68]/10 to-transparent" />
</div>

      {/* ================= MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#2D3C68] z-50 text-[#F4F5F2] flex flex-col justify-between px-10 py-10"
          >

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

            <div className="flex flex-col gap-6 text-[32px] md:text-[44px] font-[Gambarino]">
              <a className="opacity-80 hover:opacity-100 transition">
                Journeys
              </a>
              <a className="opacity-80 hover:opacity-100 transition">
                The Yacht
              </a>
              <a className="opacity-80 hover:opacity-100 transition">
                Destinations
              </a>
              <a className="opacity-80 hover:opacity-100 transition">
                Contact
              </a>
            </div>

            <div className="text-[12px] text-[#F4F5F2]/40">
              Indonesia — Serenity Yacht
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
 

function Experience() {
  return (
    <section className="bg-[#F4F5F2] py-[160px] px-6">

      <div className="max-w-[1200px] mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[720px] mx-auto mb-28">

          <p className="text-[11px] tracking-[0.35em] text-[#6A6A6A] uppercase">
            On Board
          </p>

          {/* SIGNATURE (SUBTLE BLUE) */}
          <h2 className="mt-5 font-[Gambarino] text-[46px] md:text-[62px] leading-[1.08] tracking-[-0.02em] text-[#2D3C68]">
            Life on board, as it happens
          </h2>

          <p className="mt-8 text-[16px] text-[#5C5C5C] leading-relaxed max-w-[560px] mx-auto">
            No fixed flow, no structured day. Just open spaces, shared moments,
            and time that follows the sea.
          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* ================= LEFT ================= */}
          <div>
            <div className="w-full h-[420px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1776060335/50_yts9sx.png"
                alt="Open deck"
                className="w-full h-full object-cover object-[center_65%]"
              />
            </div>

            <div className="mt-8">
              <h3 className="font-[Gambarino] text-[26px] text-[#1A1A1A]">
                Open Deck Living
              </h3>

              <p className="mt-4 text-[15px] text-[#5C5C5C] leading-relaxed max-w-[480px]">
                The day stays outside — moving between sun, sea, and long
                conversations without needing to go anywhere.
              </p>

              {/* LOW-INTENSITY CTA */}
              <div className="mt-5">
                <button className="text-[13px] tracking-[0.12em] text-[#1A1A1A] border-b border-[#1A1A1A]/30 hover:border-[#1A1A1A] transition">
                  Explore deck →
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT (OFFSET) ================= */}
          <div className="md:mt-20">
            <div className="w-full h-[420px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068892/03_g9pmnx.webp"
                alt="Private cabin"
                className="w-full h-full object-cover object-[center_60%]"
              />
            </div>

            <div className="mt-8">
              <h3 className="font-[Gambarino] text-[26px] text-[#1A1A1A]">
                Quiet When You Need It
              </h3>

              <p className="mt-4 text-[15px] text-[#5C5C5C] leading-relaxed max-w-[480px]">
                When things slow down, private spaces offer stillness — simple,
                quiet, and uninterrupted.
              </p>

              {/* LOW-INTENSITY CTA */}
              <div className="mt-5">
                <button className="text-[13px] tracking-[0.12em] text-[#1A1A1A] border-b border-[#1A1A1A]/30 hover:border-[#1A1A1A] transition">
                  View cabins →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ================= PRIMARY CTA ================= */}
        <div className="mt-32 flex justify-center">
          <button className="text-[13px] tracking-[0.18em] uppercase text-[#1A1A1A] border-b border-[#1A1A1A]/40 hover:border-[#1A1A1A] transition">
            Step inside the yacht →
          </button>
        </div>

      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-[#F4F5F2] py-[160px] px-6">

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20">

        {/* ================= LEFT ================= */}
        <div>

          <p className="text-[11px] tracking-[0.35em] text-[#6A6A6A] uppercase">
            About
          </p>

          <h2 className="mt-5 font-[Gambarino] text-[48px] md:text-[60px] leading-[1.1] text-[#1A1A1A] max-w-[520px]">
            A Phinisi Journey
            <br />
            Across Indonesia
          </h2>

          {/* TEXT BLOCK 1 */}
          <p className="mt-8 text-[16px] text-[#5C5C5C] leading-[1.75] max-w-[520px]">
            Serenity offers private phinisi journeys through Indonesia’s most
            sought-after destinations, including Komodo National Park, Raja
            Ampat, and the Banda Islands.
          </p>

          {/* TEXT BLOCK 2 */}
          <p className="mt-5 text-[16px] text-[#5C5C5C] leading-[1.75] max-w-[520px]">
            Each voyage is designed around your pace, combining time at sea with
            exploration on land, supported by spaces on board that balance open
            decks, shaded areas, and private cabins.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <button className="text-[13px] tracking-[0.18em] uppercase text-[#1A1A1A] border-b border-[#8B6A4F]/50 hover:border-[#8B6A4F] transition">
              View Journeys →
            </button>
          </div>

        </div>

        {/* ================= RIGHT ================= */}
<div className="relative h-[560px]">

  {/* MAIN (ANCHOR — POSISI DIKUNCI) */}
  <div className="absolute top-0 right-0 w-[78%] h-[360px] overflow-hidden rounded-[4px]">
    <img
      src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_28_PM_fkhsss.png"
      className="w-full h-full object-cover"
    />
  </div>

  {/* SECOND (POSISI DIKUNCI) */}
  <div className="absolute bottom-0 left-0 w-[52%] h-[220px] overflow-hidden rounded-[4px]">
    <img
      src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_49_PM_jxaz45.png"
      className="w-full h-full object-cover"
    />
  </div>

  {/* ACCENT (POSISI DIKUNCI — CUMA DIPIPIHIN) */}
  <div className="absolute bottom-[140px] right-[4%] w-[40%] h-[140px] overflow-hidden rounded-[4px]">
    <img
      src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031029/ChatGPT_Image_Apr_1_2026_03_07_35_PM_ci1xyi.png"
      className="w-full h-full object-cover"
    />
  </div>

</div>

      </div>

    </section>
  );
}

function OnBoard() {
  return (
    <section className="relative py-[160px] px-6 bg-[#EFEAE4] overflow-hidden">

      {/* HARD BREAK (TIPIS AJA, JANGAN KEBANGETAN) */}
      <div className="absolute top-0 left-0 w-full h-[80px] bg-[#F4F5F2]" />

      {/* VERY SUBTLE TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dombq6plz/image/upload/v1775052779/ChatGPT_Image_Apr_1_2026_09_05_54_PM_asniqb.png')",
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

          {/* LEFT */}
          <div className="relative h-[560px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031029/ChatGPT_Image_Apr_1_2026_03_07_46_PM_hvigtv.png"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-12 left-12 text-white max-w-[280px]">
              <p className="text-[11px] tracking-[0.35em] uppercase text-white/70">
                On Board
              </p>

              <h3 className="mt-4 font-[Gambarino] text-[30px] leading-[1.15]">
                Thoughtfully prepared,
                <br />
                quietly delivered
              </h3>
            </div>
          </div>

          {/* RIGHT */}
          <div>

            <div className="max-w-[420px]">
              <p className="text-[11px] tracking-[0.35em] text-[#8B6A4F] uppercase">
                The Experience
              </p>

              <h2 className="mt-5 font-[Gambarino] text-[38px] md:text-[48px] leading-[1.15] text-[#1A1A1A]">
                The people behind each moment
              </h2>

              <p className="mt-7 text-[16px] text-[#5A5A5A] leading-[1.7]">
                Every detail on board is shaped with intention — from how meals
                are prepared to how each space is quietly maintained throughout
                your journey.
              </p>
            </div>

            <div className="mt-10 relative h-[260px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1775644328/Solitary_phinisi_yacht_at_dawn_beafzc.png"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8">
              <button className="text-[13px] text-[#1A1A1A] border-b border-[#8B6A4F]/40 hover:border-[#8B6A4F] transition">
                Learn more about the experience →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function GalleryStrip() {
  const containerRef = useRef(null);

  const images = [
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_24_PM_lzlhwx.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_18_PM_dihjfs.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_38_PM_hqx36m.png",
    "https://res.cloudinary.com/dombq66plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_15_PM_otnwp1.png",
  ];

  return (
    <section className="relative py-[140px] overflow-hidden">

      {/* ================= SOFT BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[#F7F4EF]" /> 

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">

        {/* HEADER */}
        <div className="max-w-[900px] mx-auto px-6 mb-20 text-center">

          <p className="text-[11px] tracking-[0.35em] text-[#8B6A4F] uppercase">
            Moments
          </p>

          <h2 className="mt-5 text-[42px] md:text-[56px] leading-[1.15] text-[#1A1A1A] font-[Gambarino]">
            Life, as it unfolds at sea
          </h2>

          <p className="mt-6 text-[16px] text-[#5A5A5A] max-w-[520px] mx-auto leading-[1.7]">
            A collection of quiet moments, shared spaces, and the rhythm of days spent on the water.
          </p>

        </div>

        {/* STRIP */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto px-6 no-scrollbar"
        >

          {images.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[80vw] md:w-[520px] h-[320px] overflow-hidden rounded-[6px]"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:brightness-[0.96]"
              />
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="text-[13px] tracking-[0.18em] uppercase text-[#1A1A1A] border-b border-[#8B6A4F]/40 hover:border-[#8B6A4F] transition">
            View Full Gallery
          </button>
        </div>

      </div>

      {/* HIDE SCROLLBAR */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  );
}

function Reflections() {
  const testimonials = [
    {
      quote:
        "Calm anchorages, hidden lagoons, and evenings filled with celestial skies — a voyage that we will treasure forever.",
      trip: "Bali & Nusa Penida",
      date: "May 2025",
      author: "A. Williams",
      country: "USA",
    },
    {
      quote:
        "An experience that felt both grounding and expansive — every moment unfolded with quiet intention.",
      trip: "Raja Ampat",
      date: "June 2025",
      author: "L. Moreau",
      country: "France",
    },
    {
      quote:
        "A rare kind of stillness. Time slowed, and everything felt exactly where it should be.",
      trip: "Banda Islands",
      date: "July 2025",
      author: "D. Tanaka",
      country: "Japan",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[index];

  return (
    <section className="bg-[#E7DED2] py-[140px] px-6">

      <div className="max-w-[1100px] mx-auto">

        {/* INDEX (SUBTLE) */}
        <div className="mb-16 text-[12px] tracking-[0.3em] text-[#6B7280]">
          {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </div>

        {/* MAIN CONTENT (OFFSET, NOT CENTER) */}
        <div className="max-w-[720px] ml-0 md:ml-[80px]">

          <p className="text-[22px] md:text-[30px] leading-[1.5] text-[#1A1A1A] font-[Canela]">
            {current.quote}
          </p>

          <div className="mt-10 text-[14px] text-[#6B7280]">
            {current.trip} — {current.date}
          </div>

          <div className="mt-2 text-[14px] text-[#1A1A1A]">
            {current.author} — {current.country}
          </div>

        </div>

      </div>

      {/* NAV (VERY LIGHT) */}
      <button
        onClick={prev}
        className="fixed left-6 bottom-10 text-[#6B7280] hover:text-[#1A1A1A] transition text-[18px]"
      >
        ←
      </button>

      <button
        onClick={next}
        className="fixed right-6 bottom-10 text-[#6B7280] hover:text-[#1A1A1A] transition text-[18px]"
      >
        →
      </button>

    </section>
  );
}

function Closing() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <img
        src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_15_PM_otnwp1.png"
        alt="Serenity closing"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ================= NATURAL OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/45" />

      {/* LIGHT LIFT (biar gak berat banget) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">

        <div className="text-center max-w-[760px] -mt-6">

          {/* LABEL */}
          <p className="text-[11px] tracking-[0.4em] text-white/60 uppercase">
            Reservations
          </p>

          {/* HEADLINE */}
          <h2 className="mt-6 text-[44px] md:text-[64px] leading-[1.12] text-white font-[Gambarino]">

           
          <span className="block font-light">
              Find the <span className="italic">Sanctuary</span>
            </span>

            <span className="block mt-2">
              You’ve Been Searching For
            </span>

          </h2>

          {/* CTA GROUP */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">

            {/* PRIMARY */}
            <button className="px-8 py-3 bg-white text-[#1A1A1A] text-[13px] tracking-[0.15em] uppercase rounded-full hover:bg-white/90 transition">
              Reserve
            </button>

            {/* SECONDARY */}
            <button className="px-8 py-3 border border-white/40 text-white text-[13px] tracking-[0.15em] uppercase rounded-full hover:border-white transition">
              View availability
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

function Social() {
  const posts = [
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_24_PM_lzlhwx.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_18_PM_dihjfs.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_38_PM_hqx36m.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_15_PM_otnwp1.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_01_PM_yfdh57.png",
  ];

  return (
    <section className="relative py-[140px] px-6 overflow-hidden">

      {/* ================= SOFT BACKGROUND LAYER ================= */}
      <div className="absolute inset-0 bg-[#F4F5F2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">

          <div className="max-w-[460px]">
            <p className="text-[11px] tracking-[0.35em] text-[#8B6A4F] uppercase">
              Social
            </p>

            <h2 className="mt-4 font-[Gambarino] text-[38px] md:text-[46px] leading-[1.2] text-[#1A1A1A]">
              Observed along the way
            </h2>

            <p className="mt-4 text-[15px] text-[#6B6B6B] leading-[1.6]">
              A quiet record of moments shared during each journey.
            </p>
          </div>

          <a
            href="#"
            className="text-[12px] tracking-[0.2em] uppercase text-[#1A1A1A] border-b border-[#8B6A4F]/30 hover:border-[#8B6A4F] transition"
          >
            @serenity.yacht →
          </a>

        </div>

        {/* ================= STRIP WRAPPER (FADE EDGE) ================= */}
        <div className="relative">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#F4F5F2] to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#F4F5F2] to-transparent z-10" />

          {/* ================= STRIP ================= */}
          <div className="flex gap-8 overflow-x-auto no-scrollbar px-2">

            {posts.map((src, i) => (
              <div
                key={i}
                className="group relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[4/5] overflow-hidden rounded-[8px]"
              >
                <img
                  src={src}
                  className="w-full h-full object-cover transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />

                {/* LIGHT SHIFT */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition duration-700" />

                {/* MICRO GRAIN (VERY SUBTLE) */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage:
                      "url('https://res.cloudinary.com/dombq6plz/image/upload/v1775052779/ChatGPT_Image_Apr_1_2026_09_05_54_PM_asniqb.png')",
                  }}
                />
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* HIDE SCROLLBAR */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  );
}







function RouteSection({ children }) {
  return (
    <section className="relative">

      {/* ================= ROUTE LINE (VERTICAL) ================= */}
      <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 pointer-events-none">
        <div className="relative h-full w-[1px]">

          {/* MAIN LINE */}
          <div className="absolute inset-0 bg-black/10" />

          {/* FADE TOP */}
          <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />

          {/* FADE BOTTOM */}
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />

        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">
        {children}
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="relative flex items-center justify-center py-24">

        {/* LEFT LINE */}
        <div className="h-[1px] w-full bg-black/10" />

        {/* COMPASS NODE */}
        <div className="mx-6 flex items-center justify-center">

          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1775052778/ChatGPT_Image_Apr_1_2026_09_01_13_PM_fgglvx.png"
            alt="Compass"
            className="w-5 h-5 opacity-60"
          />

        </div>

        {/* RIGHT LINE */}
        <div className="h-[1px] w-full bg-black/10" />

      </div>

    </section>
  );
}

function Statement() {
  return (
    <section className="relative bg-[#F5F2ED] py-[140px] px-6">
      
      <div className="max-w-[900px] mx-auto text-center">
        
        {/* MICRO LABEL */}
        <p className="text-[12px] tracking-[0.3em] text-[#64748B] uppercase">
          The Experience
        </p>

        {/* HEADLINE */}
        <h2 className="mt-6 text-[40px] md:text-[56px] leading-[1.2] font-medium text-[#0F172A]">
          Explore Indonesia Beyond the Expected
        </h2>

        {/* BODY */}
        <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[#475569] max-w-[680px] mx-auto">
          Journey across untouched islands, where every route is tailored to your rhythm. From the dramatic landscapes of Komodo to the pristine waters of Raja Ampat, each voyage reveals a side of Indonesia few ever experience.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <button className="border border-[#0F172A]/20 px-6 py-3 text-sm tracking-wide text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition">
            Explore Expeditions
          </button>
        </div>
      </div>

      {/* SUBTLE TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#0F172A_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>
    </section>
  );
}


function Intro() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Text reveal (stagger lines)
      gsap.from(".intro-line", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })

      // Image parallax
      gsap.to(imageRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-40 md:py-56 bg-[#0a0f14] overflow-hidden"
    >

      {/* ================= BACKGROUND ATMOSPHERE ================= */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.6))]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center">

        {/* ================= TEXT ================= */}
        <div ref={textRef}>

          <p className="intro-line text-sm tracking-[0.3em] text-white/40 mb-6">
            THE EXPERIENCE
          </p>

          <h2 className="intro-line text-4xl md:text-5xl leading-tight font-light mb-8">
            A different way <br /> to experience the sea
          </h2>

          <p className="intro-line text-white/70 leading-relaxed mb-6 max-w-lg">
            Away from crowded shores and fixed itineraries, Serenity offers a more personal way to move across Indonesia’s waters — where each moment unfolds naturally, without interruption.
          </p>

          <p className="intro-line text-white/50 leading-relaxed max-w-md">
            It’s not about going further. It’s about slowing down enough to notice where you are.
          </p>

        </div>

        {/* ================= IMAGE COMPOSITION ================= */}
        <div className="relative h-[500px] md:h-[600px]">

          {/* Main image */}
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

          {/* Secondary floating image */}
          <div className="absolute -bottom-16 -left-10 w-[220px] h-[260px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Light accent */}
          <div className="absolute -top-10 right-10 w-[180px] h-[180px] bg-orange-200/10 blur-3xl" />

        </div>

      </div>

      {/* ================= NOISE ================= */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none">
        <img
          src="https://grainy-gradients.vercel.app/noise.svg"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

    </section>
  )
}





function Expedition() {
  const journeys = [
    {
      title: "3 Days — Komodo Escape",
      description:
        "Sail through Komodo National Park, explore hidden beaches, and witness dramatic island landscapes.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_02_PM_lplfu7.png",
    },
    {
      title: "5 Days — Raja Ampat Discovery",
      description:
        "Dive into crystal-clear waters and navigate through some of the richest marine ecosystems on earth.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_56_PM_t7jwul.png",
    },
    {
      title: "7 Days — Banda Islands Voyage",
      description:
        "Journey across remote volcanic islands with untouched reefs and a deep sense of history.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_09_PM_i95qhf.png",
    },
  ];

  return (
    <section className="bg-[#F5F2ED] py-[140px] px-6">
      
      <div className="max-w-[1280px] mx-auto">
        
        {/* HEADER */}
        <div className="max-w-[600px] mb-20">
          <p className="text-[12px] tracking-[0.3em] text-[#64748B] uppercase">
            Journeys
          </p>

          <h2 className="mt-4 text-[40px] md:text-[56px] leading-[1.2] font-medium text-[#0F172A]">
            Sample Expeditions
          </h2>

          <p className="mt-6 text-[16px] text-[#475569] leading-relaxed">
            Each journey is flexible and tailored, but these examples offer a glimpse of what your voyage could look like.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {journeys.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              
              {/* IMAGE */}
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* TEXT */}
              <div className="mt-6">
                <h3 className="text-[20px] font-medium text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] text-[#475569] leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4">
                  <span className="text-sm text-[#0F172A] border-b border-[#0F172A]/30">
                    View Itinerary
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


function Destinations() {
  const [index, setIndex] = useState(0);

  const data = [
    {
      title: "Raja Ampat",
      desc: "Secluded lagoons, limestone karsts, and some of the richest coral reefs on earth await in these remote isles.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_28_PM_fkhsss.png",
    },
    {
      title: "Komodo",
      desc: "Rugged islands, pink beaches, and quiet waters shaped by time and isolation.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_01_PM_yfdh57.png",
    },
    {
      title: "Banda Islands",
      desc: "Remote waters with deep history, open horizons, and a slower rhythm.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_09_PM_i95qhf.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const current = data[index];

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      {data.map((item, i) => (
        <img
          key={i}
          src={item.image}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* ================= EDGE SUPPORT (SUBTLE, NOT OVERLAY) ================= */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.12), transparent 25%, transparent 75%, rgba(0,0,0,0.12))",
        }}
      />

      {/* ================= TOP PROGRESS ================= */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">

        <div className="h-[2px] w-[120px] bg-white/20 relative overflow-hidden">
          <div
            key={index}
            className="absolute inset-0 bg-white/60 animate-[progress_7s_linear]"
          />
        </div>

        <span className="text-white/70 text-[11px] tracking-[0.35em] uppercase">
          {current.title}
        </span>

        <div className="h-[2px] w-[120px] bg-white/20" />

      </div>

      {/* ================= SIDE NAV ================= */}
      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + data.length) % data.length)
        }
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition text-[18px]"
      >
        ←
      </button>

      <button
        onClick={() => setIndex((prev) => (prev + 1) % data.length)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition text-[18px]"
      >
        →
      </button>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">

        {/* PRESENCE LAYER */}
        <div className="px-8 py-10 bg-white/[0.06] backdrop-blur-[2px] rounded-[3px]">

          <div className="max-w-[460px] text-center text-white">

            <p className="text-[11px] tracking-[0.35em] text-white/60 uppercase">
              Destinations
            </p>

            <h3 className="mt-5 font-[Gambarino] text-[40px] leading-[1.05]">
              {current.title}
            </h3>

            <p className="mt-6 text-[15px] text-white/80 leading-relaxed">
              {current.desc}
            </p>

          </div>

        </div>

      </div>

      {/* ================= KEYFRAMES ================= */}
      <style jsx>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
      `}</style>

    </section>
  );
}
 

function Yacht() {
  return (
    <section className="bg-[#FFFFFF] py-[140px] px-6">
      
      <div className="max-w-[1280px] mx-auto">
        
        {/* HEADER */}
        <div className="max-w-[600px] mb-20">
          <p className="text-[12px] tracking-[0.3em] text-[#64748B] uppercase">
            The Yacht
          </p>

          <h2 className="mt-4 text-[40px] md:text-[56px] leading-[1.2] font-medium text-[#0F172A]">
            Designed for Private Exploration
          </h2>

          <p className="mt-6 text-[16px] text-[#475569] leading-relaxed">
            A balance of comfort and openness, crafted for extended journeys across Indonesia’s waters.
          </p>
        </div>

        {/* MAIN IMAGE */}
        <div className="w-full h-[520px] overflow-hidden mb-10">
          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_15_PM_otnwp1.png"
            alt="Yacht exterior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* IMAGE GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="h-[260px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_24_PM_lzlhwx.png"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[260px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031029/ChatGPT_Image_Apr_1_2026_03_07_18_PM_dihjfs.png"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[260px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_38_PM_hqx36m.png"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="text-sm tracking-wide text-[#0F172A] border-b border-[#0F172A]/30 hover:border-[#0F172A] transition">
            Explore Full Yacht Details
          </button>
        </div>

      </div>
    </section>
  );
}


function Moments() {
  const images = [
    "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1550033588-6f3e54613d6e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576035739460-d6f6423dbf72?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1665234811705-02e42eda85d2?q=80&w=3266&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section className="bg-[#F5F2ED] py-[120px] px-6">
      
      <div className="max-w-[1280px] mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 max-w-[600px]">
          <p className="text-[12px] tracking-[0.3em] text-[#64748B] uppercase">
            Moments
          </p>

          <h2 className="mt-4 text-[36px] md:text-[48px] leading-[1.2] font-medium text-[#0F172A]">
            A Glimpse of Life at Sea
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6">
            <div className="h-[260px] overflow-hidden">
              <img
                src={images[0]}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[420px] overflow-hidden">
              <img
                src={images[1]}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6">
            <div className="h-[420px] overflow-hidden">
              <img
                src={images[2]}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[260px] overflow-hidden">
              <img
                src={images[3]}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6">
            <div className="h-[300px] overflow-hidden">
              <img
                src={images[4]}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[380px] overflow-hidden">
              <img
                src={images[5]}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

 
function CTA() {
  return (
    <section className="bg-[#0F172A] text-white py-[140px] px-6">
      
      <div className="max-w-[900px] mx-auto text-center">
        
        {/* HEADLINE */}
        <h2 className="text-[36px] md:text-[56px] leading-[1.2] font-medium">
          Begin Your Private Journey
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-[16px] md:text-[18px] text-white/70 leading-relaxed max-w-[600px] mx-auto">
          Plan a voyage tailored entirely to you — from destinations to onboard experience, every detail is curated with intention.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          
          <button className="bg-white text-[#0F172A] px-8 py-3 text-sm tracking-wide hover:opacity-90 transition">
            Start Planning
          </button>

          <button className="border border-white/30 px-8 py-3 text-sm tracking-wide hover:bg-white hover:text-[#0F172A] transition">
            Contact Concierge
          </button>

        </div>

      </div>

    </section>
  );
}
 