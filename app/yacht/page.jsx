"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "../../lib/gsap"
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import Footer from '../../components/Footer'


export default function Page() {
  return (
    <main className="bg-[#0a0f14] text-white overflow-hidden">
      <Hero /> 
      {/* <About/> */}
      <Experience/>
      {/* <YachtBreaking/> */}
      {/* <Identity/> */}
      {/* <Spaces/> */}
      <Cabins/>
      {/* <LivingSpaces/> */}
      <DeckAndSpecs/>
      {/* <Closing/> */}
      {/* <Gallery/> */}
      {/* <Reservation/> */}
      <Footer/>
    </main>
  )
}


function Hero() {
  const sectionRef = useRef(null)
  const bgRef      = useRef(null)
  const contentRef = useRef(null)
  const slabRef    = useRef(null)
  const EASE = [0.22, 1, 0.36, 1]
 
  const shouldReduceMotion = useReducedMotion()
 
  useEffect(() => {
    if (!sectionRef.current || shouldReduceMotion) return
 
    const ctx = gsap.context(() => {
 
      // ── BG parallax ─────────────────────────────────────────────
      // scrub 1.2, y 18%, scale ramps 1.06 → 1.08 to prevent edge gaps
      gsap.to(bgRef.current, {
        y: '18%',
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
 
      // ── Content drift ────────────────────────────────────────────
      gsap.to(contentRef.current, {
        y: '6%',
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '42% top',
          scrub: 0.8,
        },
      })
 
      // ── Slab rise ────────────────────────────────────────────────
      // GSAP only — no FM on this element to avoid conflict.
      // gsap.set establishes initial state before first paint reveal.
      gsap.set(slabRef.current, { y: 56, opacity: 0 })
      gsap.to(slabRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: slabRef.current,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
      })
 
    }, sectionRef)
 
    return () => ctx.revert()
  }, [shouldReduceMotion])
 
  // ── FM entrance helper — hero content only ───────────────────────
  const fm = (delay = 0) => ({
    initial: shouldReduceMotion
      ? false
      : { opacity: 0, y: 24, filter: 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 1.2, delay, ease: EASE },
  })
 
  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#F4F5F2]"
    >
 
      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <div className="relative h-screen min-h-[760px] overflow-hidden bg-[#2D3C68]">
 
        {/* BG image */}
        <div
          ref={bgRef}
          className="absolute inset-0 scale-[1.06] will-change-transform"
          style={{ transformOrigin: 'center top' }}
        >
          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1778592432/ChatGPT_Image_May_12_2026_08_24_49_PM_1_tlgo8z.png"
            alt="Serenity phinisi at sea"
            className="h-full w-full object-cover"
          />
        </div>
 
        {/* ── Atmospheric layers ── */}
        <div className="absolute inset-0 bg-[#2D3C68]/18" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(45,60,104,0.62) 0%, rgba(45,60,104,0.18) 34%, transparent 78%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 35% 45%, rgba(255,255,255,0.04), transparent 56%)',
          }}
        />
 
        {/* ── Content ── */}
        <div
          ref={contentRef}
          className="relative z-10 flex h-full items-center justify-center px-6 text-center will-change-transform md:px-10 lg:px-14"
        >
          <div className="max-w-[620px]">
 
            <motion.div
              {...fm(0)}
              className="mb-6 text-[11px] uppercase tracking-[0.32em] text-[#F4F5F2]/58"
            >
              The Yacht
            </motion.div>
 
            <h1 className="font-[Gambarino] text-[48px] leading-[0.98] tracking-[-0.04em] text-[#F4F5F2] md:text-[76px]">
              <motion.span {...fm(0.14)} className="block">
                Built by hand
              </motion.span>
              <motion.span {...fm(0.26)} className="block opacity-[0.96]">
                in South Sulawesi
              </motion.span>
            </h1>
 
            <motion.p
              {...fm(0.40)}
              className="mx-auto mt-7 max-w-[430px] text-[14px] leading-[1.82] text-[#F4F5F2]/66 md:text-[15px]"
            >
              A contemporary phinisi designed for twelve guests —
              open decks, quiet cabins, and days that move with the sea.
            </motion.p>
 
          </div>
        </div>
 
        {/* Exit bridge — hero bleeds into slab */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[220px] pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(244,245,242,0.06) 42%, rgba(244,245,242,0.94) 100%)',
          }}
        />
      </div>
 
      {/* ════════════════════════════════════════
          STRUCTURAL SLAB
          Kept from ChatGPT: ghost number, brass top edge,
          asymmetric grid, mini stats row.
          Fixed: animation conflict removed (GSAP only),
          Teak/Ironwood stat corrected, copy tightened,
          initial opacity handled via gsap.set.
      ════════════════════════════════════════ */}
      <div className="relative z-20 -mt-[110px] px-6 pb-24 md:px-10 md:pb-32 lg:px-14">
 
        {/* slabRef — GSAP only, no FM props */}
        <div
          ref={slabRef}
          className={`
            relative mx-auto max-w-[1180px]
            overflow-hidden
            border border-[#2D3C68]/8
            bg-[#F4F5F2]/96
            backdrop-blur-[10px]
            shadow-[0_24px_60px_rgba(20,30,50,0.08)]
            ${shouldReduceMotion ? '' : 'opacity-0'}
          `}
        >
          {/* Brass top edge — gradient fade in/out */}
          <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-[#B08D57]/0 via-[#B08D57]/40 to-[#B08D57]/0" />
 
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
 
            {/* ── LEFT: headline numbers ── */}
            <div className="relative px-8 py-10 md:px-14 md:py-14">
 
              {/* Ghost number — tension/depth layer */}
              <div className="pointer-events-none absolute right-4 top-2 select-none font-[Gambarino] text-[120px] leading-none tracking-[-0.06em] text-[#2D3C68]/[0.03] md:text-[180px]">
                40
              </div>
 
              <div className="relative z-[2]">
                <div className="mb-8 h-[1px] w-8 bg-[#B08D57]/60" />
 
                <h2 className="font-[Gambarino] text-[34px] leading-[1.12] tracking-[-0.03em] text-[#2D3C68] md:text-[46px]">
                  40.75 meters
                  <br />
                  Four cabins
                  <br />
                  Twelve guests.
                </h2>
              </div>
            </div>
 
            {/* ── RIGHT: origin + stats ── */}
            <div className="border-t border-[#2D3C68]/8 px-8 py-10 md:border-l md:border-t-0 md:px-14 md:py-14">
              <div className="flex h-full flex-col justify-between">
 
                {/* Body copy — concrete, passes tone filter */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.34em] text-[#2D3C68]/38 mb-4">
                    Tanah Beru & Bira · South Sulawesi
                  </p>
                  <p className="max-w-[380px] text-[14px] leading-[1.9] text-[#2D3C68]/64 md:text-[15px]">
                    Ironwood hull. Teak deck. Brass fittings throughout.
                    Not a conversion — built from the ground up.
                  </p>
                </div>
 
                {/* Mini stats — fixed: Teak/Ironwood confusion resolved */}
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-[#2D3C68]/8 pt-6">
 
                  <div>
                    <div className="font-[Gambarino] text-[28px] leading-none tracking-[-0.03em] text-[#2D3C68]">
                      10
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[#2D3C68]/44">
                      Crew
                    </div>
                  </div>
 
                  <div>
                    <div className="font-[Gambarino] text-[28px] leading-none tracking-[-0.03em] text-[#2D3C68]">
                      2025
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[#2D3C68]/44">
                      Built
                    </div>
                  </div>
 
                  {/* Fixed: was "Teak / Ironwood" — now material pair as value, Hull & Deck as label */}
                  <div>
                    <div className="font-[Gambarino] text-[22px] leading-none tracking-[-0.02em] text-[#2D3C68]">
                      Ironwood · Teak
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[#2D3C68]/44">
                      Hull & Deck
                    </div>
                  </div>
 
                </div>
              </div>
            </div>
 
          </div>
        </div>
      </div>
 
    </section>
  )
}

function About() {
  return (
    <section className="bg-[#F4F5F2] pt-[120px] pb-[100px] px-6 text-[#2D3C68]">

      <div className="max-w-[1000px] mx-auto">

        {/* LABEL */}
        <p className="text-[11px] tracking-[0.35em] text-[#2D3C68]/40 uppercase mb-6">
          About
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT (PHILOSOPHY BRIDGE) */}
          <h2 className="font-[Gambarino] text-[36px] md:text-[44px] leading-[1.2]">
            A Yacht Designed
            <br />
            for Life On Board
          </h2>

          {/* RIGHT (DATA + CONTEXT) */}
          <p className="text-[15px] leading-[1.7] text-[#2D3C68]/70">
            Serenity is a 40.75 meter phinisi yacht accommodating up to 12 guests,
            supported by a full crew on board. The layout is shaped to balance shared
            moments and private space across multiple decks, allowing each journey to
            unfold naturally over time.
          </p>

        </div>

      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="relative overflow-x-hidden bg-[#F4F5F2] pt-[120px] md:pt-[160px] pb-0 px-6 md:px-10 lg:px-14">

      <div className="relative max-w-[1040px] mx-auto">

        {/* ════════════════════════════════════════
            BLOCK 1 — Upper Deck
            Dominant spatial moment.
        ════════════════════════════════════════ */}
        <div className="mb-[170px] md:mb-[220px] grid md:grid-cols-[1.08fr_0.92fr] gap-16 md:gap-24 items-center">

          {/* IMAGE FIELD */}
          <div className="relative w-full">

            {/* MOBILE ONLY: subtle bleed for stronger presence */}
            <div className="relative -mx-6 md:mx-0">
              
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068969/42_bdtrmb.webp"
                  alt="Upper deck"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Floating image retained only here */}
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068973/49_ph3xr3.webp"
              alt=""
              className="
                hidden md:block
                absolute
                -bottom-16
                -left-16
                w-[240px]
                h-[290px]
                object-cover
                shadow-[0_24px_70px_rgba(20,30,50,0.14)]
              "
            />
          </div>

          {/* COPY */}
          <div className="md:ml-auto max-w-[470px]">

            <p className="mb-5 text-[10px] uppercase tracking-[0.38em] text-[#2D3C68]/38">
              Upper Deck
            </p>

            <h2 className="font-[Gambarino] text-[38px] md:text-[48px] leading-[1.12] tracking-[-0.03em] text-[#2D3C68]">
              Open at
              <br />
              Every End
            </h2>

            <p className="mt-6 max-w-[420px] text-[14px] md:text-[15px] leading-[1.9] text-[#2D3C68]/64">
              The upper deck runs the full width of Serenity.
              Sunbeds across the length, a bar at one end.
              Open sky overhead, sea on every side —
              nothing between the deck and the horizon.
            </p>

          </div>

        </div>


        {/* ════════════════════════════════════════
            BLOCK 2 — Main Deck
            More compressed / quieter.
        ════════════════════════════════════════ */}
        <div className="mb-[150px] md:mb-[190px] grid md:grid-cols-[0.88fr_1.12fr] gap-14 md:gap-20 items-start">

          {/* COPY */}
          <div className="max-w-[390px] pt-2">

            <p className="mb-5 text-[10px] uppercase tracking-[0.38em] text-[#2D3C68]/38">
              Main Deck
            </p>

            <h2 className="font-[Gambarino] text-[30px] md:text-[38px] leading-[1.18] tracking-[-0.02em] text-[#2D3C68]">
              A Space Between
              <br />
              Outside and Inside
            </h2>

            <p className="mt-6 text-[14px] md:text-[15px] leading-[1.88] text-[#2D3C68]/64">
              The main deck interior runs the length of the vessel.
              Windows on both sides, the sea always in frame.
              A living room, a communal table, a bar —
              designed without the instinct to close things off.
            </p>

          </div>

          {/* IMAGE */}
          <div className="relative md:mt-[32px]">

            {/* MOBILE ONLY: slightly calmer scale */}
            <div className="ml-auto w-[92%] md:w-full">

              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/04_fqtqkn.webp"
                  alt="Main deck"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

        </div>


        {/* ════════════════════════════════════════
            CLOSING
            Slightly offset — no centered perfection.
        ════════════════════════════════════════ */}
        <div className="max-w-[520px] ml-0 md:ml-[8%] mb-[28px] md:mb-[34px]">

          <h2 className="font-[Gambarino] text-[34px] md:text-[54px] leading-[1.06] tracking-[-0.035em] text-[#2D3C68]">
            Every deck.
            <br />
            The same horizon.
          </h2>

        </div>

      </div>


      {/* ════════════════════════════════════════
          FULL BLEED ENDING
      ════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden">

        <img
          src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/06_f2yr7e.webp"
          alt="Serenity at sea"
          className="
            w-full
            h-[420px]
            md:h-[620px]
            object-cover
            object-center
          "
        />

      </div>


      {/* ════════════════════════════════════════
          ATMOSPHERIC BRIDGE
      ════════════════════════════════════════ */}
      <div
        className="h-[120px] md:h-[160px]"
        style={{
          background:
            'linear-gradient(to bottom, #F4F5F2 0%, rgba(45,60,104,0.08) 100%)',
        }}
      />

    </section>
  )
}

function YachtBreaking() {
  return (
    <section className="bg-[#F4F5F2] py-[120px] md:py-[160px] px-6">
      <div className="max-w-[560px] mx-auto text-center">
        <h2 className="font-[Gambarino] text-[40px] md:text-[52px] leading-[1.12] tracking-[-0.03em] text-[#2D3C68]">
          Four cabins.
          <br />
          Each one entirely yours.
        </h2>
      </div>
    </section>
  )
}

function Identity() {
  return (
    <section className="bg-[#F5F2ED] py-[140px] px-6">

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-start">

        <div>
          <p className="text-[12px] tracking-[0.3em] text-[#6B7280] uppercase">
            The Phinisi
          </p>

          <h2 className="mt-6 font-[Canela] text-[32px] md:text-[44px] leading-[1.2] text-[#0F172A]">
            Built for Stillness.
            <br />
            Designed for Distance.
          </h2>
        </div>

        <div className="max-w-[460px]">
          <p className="text-[15px] text-[#475569] leading-relaxed">
            A 45-meter handcrafted phinisi, sailing quietly through Indonesia’s most remote waters — with space for only fourteen guests.
          </p>

          <div className="mt-8">
            <button className="text-sm tracking-wide text-[#0F172A] border-b border-[#0F172A]/30 hover:border-[#0F172A] transition">
              View Specifications
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}




/* =========================
   SPACES (DENSE, TANPA DIPAKSA)
========================= */
function Spaces() {
  const exterior = [
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_24_PM_lzlhwx.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_18_PM_dihjfs.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_38_PM_hqx36m.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_24_PM_lzlhwx.png",
  ];

  const interior = [
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_56_PM_t7jwul.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_15_PM_otnwp1.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_01_PM_yfdh57.png",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_56_PM_t7jwul.png",
  ];

  const [mode, setMode] = useState("exterior");
  const [active, setActive] = useState(0);

  const images = mode === "exterior" ? exterior : interior;

  return (
    <section className="bg-[#F5F2ED] py-[120px] px-6">

      <div className="max-w-[1280px] mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <h2 className="font-[Canela] text-[28px] md:text-[36px] text-[#0F172A]">
            Spaces
          </h2>

          <div className="flex items-center gap-4 text-[14px]">

            <button
              onClick={() => {
                setMode("exterior");
                setActive(0);
              }}
              className={mode === "exterior" ? "text-[#0F172A]" : "text-[#0F172A]/30"}
            >
              Exterior
            </button>

            <span className="text-[#0F172A]/20">/</span>

            <button
              onClick={() => {
                setMode("interior");
                setActive(0);
              }}
              className={mode === "interior" ? "text-[#0F172A]" : "text-[#0F172A]/30"}
            >
              Interior
            </button>

          </div>

        </div>

        {/* GRID (PADAT, NO BORDER) */}
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-6">

          {/* LEFT */}
          <div className="grid grid-cols-2 gap-3">

            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`relative h-[160px] md:h-[180px] overflow-hidden cursor-pointer ${
                  active === i
                    ? "ring-2 ring-[#0F172A]"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}

          </div>

          {/* RIGHT */}
          <div className="relative w-full h-[520px] overflow-hidden">
            <img
              src={images[active]}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* TEXT */}
        <div className="mt-6 max-w-[520px]">

          <h3 className="font-[Canela] text-[24px] md:text-[30px] text-[#0F172A]">
            Handcrafted by Artisans
          </h3>

          <p className="mt-2 text-[14px] text-[#0F172A]/70 leading-relaxed">
            Built by legendary Bulukumba artisans, every structure reflects
            Indonesia’s maritime heritage. Open decks, natural materials,
            and thoughtful proportions create a space that feels both grounded and expansive.
          </p>

        </div>

      </div>

    </section>
  );
}

function Cabins() {
  const shouldReduceMotion = useReducedMotion()

  const CABINS = [
    {
      name: 'Forward Cabin',
      location: 'Front Section · Bow',
      size: '15.74 sqm',
      desc: 'Closest to the bow. The movement of the sea is felt more directly here — subtle shifts, gentle rises, constant presence. Morning light arrives first, unobstructed.',
      note: 'More movement. Closer to the ocean.',
      units: '1',
      occupancy: '2 Guests',
      deck: 'Main',
      beds: 'Twin',
      image:
        'https://res.cloudinary.com/dombq6plz/image/upload/v1776068960/34_nlkpdq.webp',
      detail:
        'https://res.cloudinary.com/dombq6plz/image/upload/v1776068958/28_csbw7z.webp',
    },
    {
      name: 'Mid Cabin',
      location: 'Center of Vessel',
      size: '15.74 sqm',
      desc: 'Positioned at the center, where movement settles into balance. Close to shared spaces, yet acoustically and physically removed from them.',
      note: 'Most stable. Most balanced.',
      units: '2',
      occupancy: '2 Guests',
      deck: 'Main',
      beds: 'Twin',
      image:
        'https://res.cloudinary.com/dombq6plz/image/upload/v1776068959/26_uyo84o.webp',
      detail:
        'https://res.cloudinary.com/dombq6plz/image/upload/v1776068966/39_t9ofoe.webp',
    },
    {
      name: 'Lower Cabin',
      location: 'Lower Deck',
      size: '18.48 sqm',
      desc: 'Below the main deck, where external motion softens. Light becomes more controlled, and sound from above fades into the background.',
      note: 'Quieter. More contained.',
      units: '1',
      occupancy: '2 Guests',
      deck: 'Lower',
      beds: 'Twin',
      image:
        'https://res.cloudinary.com/dombq6plz/image/upload/v1776068955/23_1_gcmciz.webp',
      detail:
        'https://res.cloudinary.com/dombq6plz/image/upload/v1776068966/38_1_cx1idm.webp',
    },
  ]

  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)
  const [imgKey, setImgKey] = useState(0)

  const current = CABINS[active]

  const select = (i) => {
    if (i === active) return

    if (shouldReduceMotion) {
      setActive(i)
      setImgKey((k) => k + 1)
      return
    }

    setVisible(false)

    setTimeout(() => {
      setActive(i)
      setImgKey((k) => k + 1)
      setVisible(true)
    }, 320)
  }

  const specs = [
    { label: 'Size', value: current.size },
    { label: 'Beds', value: current.beds },
    { label: 'Occupancy', value: current.occupancy },
    { label: 'Deck', value: current.deck },
    { label: 'Units', value: current.units },
  ]

  return (
    <section className="relative overflow-hidden bg-[#2D3C68]">

      {/* ════════════════════════════════════════
          ATMOSPHERIC ENTRY
      ════════════════════════════════════════ */}
      <div
        className="absolute top-0 left-0 right-0 h-[120px] pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(244,245,242,0.10) 0%, transparent 100%)',
        }}
      />


      {/* ════════════════════════════════════════
          TABS RAIL
          No more section header.
      ════════════════════════════════════════ */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 pt-[100px] md:pt-[120px]">

        <div className="overflow-x-auto scrollbar-hide">

          <div className="relative flex gap-10 md:gap-12 min-w-max pb-5">

            {/* Faded rail line */}
            <div
              className="absolute left-0 right-0 bottom-0 h-[1px]"
              style={{
                background:
                  'linear-gradient(to right, rgba(244,245,242,0.10) 0%, rgba(244,245,242,0.06) 40%, rgba(244,245,242,0.02) 100%)',
              }}
            />

            {CABINS.map((c, i) => (
              <button
                key={i}
                onClick={() => select(i)}
                className="relative text-left flex-shrink-0"
              >
                <span
                  className={`block text-[11px] md:text-[12px] tracking-[0.14em] uppercase transition-colors duration-300 ${
                    active === i
                      ? 'text-[#F4F5F2]'
                      : 'text-[#F4F5F2]/28 hover:text-[#F4F5F2]/54'
                  }`}
                >
                  {c.name.replace(' Cabin', '')}
                </span>

                {/* Active brass line */}
                <span
                  className={`absolute -bottom-[21px] left-0 h-[1px] bg-[#B08D57] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active === i
                      ? 'w-full opacity-100'
                      : 'w-0 opacity-0'
                  }`}
                />
              </button>
            ))}

          </div>

        </div>
      </div>


      {/* ════════════════════════════════════════
          SPLIT LAYOUT
      ════════════════════════════════════════ */}
      <div className="grid md:grid-cols-2 pt-[28px] md:pt-[34px]">

        {/* IMAGE */}
        <div className="relative h-[440px] md:h-[660px] overflow-hidden">

          <img
            key={imgKey}
            src={current.image}
            alt={current.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${
              shouldReduceMotion
                ? 'opacity-100 scale-100'
                : visible
                ? 'duration-[1400ms] opacity-100 scale-100'
                : 'duration-[1400ms] opacity-0 scale-[1.04]'
            }`}
          />

          {/* Bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-transparent to-transparent pointer-events-none" />

          {/* Interior inset */}
          <div
            className={`absolute bottom-5 right-5 md:bottom-6 md:right-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              shouldReduceMotion
                ? 'opacity-100'
                : visible
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <div className="p-[2px] bg-[#F4F5F2]/18">

              <div className="w-[88px] h-[88px] md:w-[108px] md:h-[108px] overflow-hidden">
                <img
                  src={current.detail}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            <p className="mt-[6px] text-[9px] text-[#F4F5F2]/36 text-right uppercase tracking-[0.28em]">
              Interior
            </p>
          </div>

        </div>


        {/* CONTENT */}
        <div className="flex flex-col px-6 py-12 md:px-16 md:py-20">

          {/* Name + location */}
          <div
            className={`transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              shouldReduceMotion
                ? 'opacity-100'
                : visible
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >

            <h3 className="font-[Gambarino] text-[38px] md:text-[50px] leading-[1.06] tracking-[-0.02em] text-[#F4F5F2]">
              {current.name}
            </h3>

            <p className="mt-2 text-[10px] text-[#F4F5F2]/30 uppercase tracking-[0.32em]">
              {current.location}
            </p>

          </div>

          {/* Description + note */}
          <div className="mt-8 md:mt-10">

            <p className="text-[14px] md:text-[15px] leading-[1.9] text-[#F4F5F2]/65">
              {current.desc}
            </p>

            <div className="mt-5 flex items-start gap-3">

              <span className="w-[14px] h-[1px] bg-[#F4F5F2]/20 mt-[9px] flex-shrink-0" />

              <p className="text-[12px] italic text-[#F4F5F2]/30">
                {current.note}
              </p>

            </div>

          </div>

          {/* Specs */}
          <div className="mt-12 md:mt-auto md:pt-10">

            {specs.map((s) => (
              <div
                key={s.label}
                className="flex justify-between py-[12px] border-t border-[#F4F5F2]/8"
              >

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#F4F5F2]/28">
                  {s.label}
                </span>

                <span className="text-[13px] text-[#F4F5F2]/65 text-right">
                  {s.value}
                </span>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-8">

            <a
              href="/contact"
              className="inline-block border border-[#F4F5F2]/28 px-9 py-[14px] text-[11px] uppercase tracking-[0.18em] text-[#F4F5F2] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#F4F5F2] hover:text-[#2D3C68] hover:border-[#F4F5F2]"
            >
              Begin Your Voyage
            </a>

          </div>

        </div>
      </div>


      {/* ════════════════════════════════════════
          BATHROOM CALLOUT
      ════════════════════════════════════════ */}
      <div className="border-t border-[#F4F5F2]/8 py-7 px-6">

        <p className="text-center text-[10px] uppercase tracking-[0.32em] text-[#F4F5F2]/28 leading-[1.9]">
          All cabins — dark navy tile · brass fixtures · marble floor · rain shower
        </p>

      </div>


      {/* ════════════════════════════════════════
          ATMOSPHERIC EXIT
      ════════════════════════════════════════ */}
      <div
        className="h-[80px] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(244,245,242,0.06) 100%)',
        }}
      />

    </section>
  )
}
 

function Gallery() {
  const images = [
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068957/29_dychc2.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068955/21_pdqnqq.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068953/19_1_mwv93q.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/08_noz6qg.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/05_ec1k9n.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068961/27_unvtvm.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068973/49_ph3xr3.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/07_iujxr6.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/06_f2yr7e.webp",
  ];

  const layout = [
    { i: 0, span: "col-span-6", h: "h-[520px]" },
    { i: 1, span: "col-span-3", h: "h-[300px]" },
    { i: 2, span: "col-span-3", h: "h-[300px]" },
    { i: 3, span: "col-span-6", h: "h-[380px]" },
    { i: 4, span: "col-span-2", h: "h-[260px]" },
    { i: 5, span: "col-span-2", h: "h-[260px]" },
    { i: 6, span: "col-span-2", h: "h-[260px]" },
    { i: 7, span: "col-span-3", h: "h-[300px]" },
    { i: 8, span: "col-span-3", h: "h-[300px]" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((p) => (p + 1) % images.length);
  const prev = () => setActiveIndex((p) => (p === 0 ? images.length - 1 : p - 1));

  useEffect(() => {
    const key = (e) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [activeIndex]);

  return (
    <section className="bg-[#F4F5F2] py-[160px] px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="mb-20 max-w-[520px]">
          <p className="text-[11px] tracking-[0.35em] text-[#2D3C68]/50 uppercase">
            Gallery
          </p>
          <h2 className="mt-4 font-[Gambarino] text-[42px] md:text-[56px] text-[#2D3C68] leading-[1.1]">
            A Closer Look
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {layout.map(({ i, span, h }) => (
            <div
              key={i}
              className={`${span} cursor-pointer group`}
              onClick={() => setActiveIndex(i)}
            >
              <div className="overflow-hidden">
                <img
                  src={images[i]}
                  loading="lazy"
                  className={`w-full ${h} object-cover transition duration-700 group-hover:scale-[1.02]`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          <button onClick={close} className="absolute top-6 right-6 text-white text-[11px] tracking-[0.4em]">
            CLOSE
          </button>

          <button onClick={prev} className="absolute left-6 text-white text-[28px] opacity-40 hover:opacity-100">
            ←
          </button>

          <img
            key={activeIndex}
            src={images[activeIndex]}
            className="max-h-[85vh] max-w-[90vw] object-contain animate-fade"
          />

          <button onClick={next} className="absolute right-6 text-white text-[28px] opacity-40 hover:opacity-100">
            →
          </button>
        </div>
      )}

      <style jsx>{`
        .animate-fade {
          animation: fadeScale 0.4s ease;
        }
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}


function LivingSpaces() {
  return (
    <section className="bg-[#F5F2ED] py-[140px] px-6">

      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="max-w-[640px]">
          <p className="text-[12px] tracking-[0.3em] text-[#6B7280] uppercase">
            Saloon
          </p>

          <h2 className="mt-6 font-[Canela] text-[36px] md:text-[52px] leading-[1.1] text-[#0F172A]">
            Living Spaces
            <br />
            Home Away From Home
          </h2>
        </div>

        {/* IMAGE COMPOSITION */}
        <div className="mt-14 grid md:grid-cols-[1.3fr_0.7fr] gap-8 items-start">

          {/* LEFT (LEADER) */}
          <div className="relative w-full h-[360px] md:h-[440px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_24_PM_lzlhwx.png"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT (SUPPORTING, NAIK + LEBIH KECIL) */}
          <div className="relative w-full h-[300px] md:h-[360px] overflow-hidden md:mt-10">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_18_PM_dihjfs.png"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* CONTENT (DIKETATIN + CTA MASUK FLOW) */}
        <div className="mt-10 max-w-[560px]">

          <p className="text-[15px] text-[#0F172A]/75 leading-relaxed">
            Sanctuary’s communal spaces offer elegant relaxation and connection.
            Panoramic ocean views frame the lounge and dining areas, while
            generous decks invite long conversations and quiet moments at sea.
          </p>

          <div className="mt-8 flex items-center gap-4">

            <button className="px-6 py-2.5 rounded-full bg-[#A8BEB7] text-[#0F172A] text-[13px] tracking-[0.12em] uppercase hover:bg-[#9CB3AC] transition">
              Reserve
            </button>

            <button className="px-6 py-2.5 rounded-full border border-[#0F172A]/20 text-[#0F172A] text-[13px] tracking-[0.12em] uppercase hover:border-[#0F172A] transition">
              Book a Call
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

function DeckAndSpecs() {
  const [deck, setDeck] = useState("main");
  const [visible, setVisible] = useState({
    header: false,
    image: false,
    peak: false,
    specs: false,
  });

  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const peakRef = useRef(null);
  const specsRef = useRef(null);

  const decks = {
    lower:
      "https://res.cloudinary.com/dombq6plz/image/upload/v1776068975/Layout_00_-_Lower_Deck_m92vvk.webp",
    main:
      "https://res.cloudinary.com/dombq6plz/image/upload/v1776068978/Layout_01_-_Main_Deck_yztnzb.webp",
    upper:
      "https://res.cloudinary.com/dombq6plz/image/upload/v1776068974/Layout_-_02_Upper_Deck_pouo1p.webp",
    top:
      "https://res.cloudinary.com/dombq6plz/image/upload/v1776068975/Layout_-_03_Top_Deck_yvyisz.webp",
  };

  const deckList = ["lower", "main", "upper", "top"];

  const specs = [
    ["Vessel Type", "Phinisi Sailing Yacht"],
    ["Flag", "Indonesia"],
    ["Beam", "7.26 m"],
    ["Draft", "2.20 m"],
    ["Year Built", "2025"],
    ["Build Location", "Tanah Beru & Bira, South Sulawesi"],
    ["Cruise Speed", "8–10 knots"],
    ["Maximum Speed", "11 knots"],
    ["Navigation", "Garmin Navigation System"],
  ];

  useEffect(() => {
    const observe = (ref, key) => {
      const o = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setVisible((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.15 }
      );

      if (ref.current) o.observe(ref.current);
      return o;
    };

    const observers = [
      observe(headerRef, "header"),
      observe(imageRef, "image"),
      observe(peakRef, "peak"),
      observe(specsRef, "specs"),
    ];

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="bg-[#F4F5F2] py-[160px] px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* ================= HEADER ================= */}
        <div
          ref={headerRef}
          className={`text-center mb-[80px] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${visible.header ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#2D3C68]/40">
            Vessel Overview
          </p>

          <h2 className="mt-6 font-[Gambarino] text-[46px] md:text-[60px] leading-[1.15] text-[#2D3C68]">
            Understand the Vessel
          </h2>
        </div>

        {/* ================= SELECTOR ================= */}
        <div
          className={`flex justify-center gap-10 mb-[60px] transition-all duration-[800ms]
          ${visible.image ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          {deckList.map((key) => (
            <button
              key={key}
              onClick={() => setDeck(key)}
              className={`text-[11px] tracking-[0.3em] uppercase pb-2 transition
              ${
                deck === key
                  ? "text-[#2D3C68] border-b border-[#2D3C68]"
                  : "text-[#2D3C68]/30 hover:text-[#2D3C68]/60"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* ================= IMAGE ================= */}
        <div
          ref={imageRef}
          className={`relative max-w-[1000px] mx-auto mb-[140px] transition-all duration-[1000ms]
          ${visible.image ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="relative p-[10px] bg-[#F4F5F2] shadow-[0_40px_80px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 border border-[#2D3C68]/10 pointer-events-none" />

            <div className="relative p-[14px] bg-white">
              <div className="absolute inset-0 border border-[#2D3C68]/10 pointer-events-none" />

              <div className="relative aspect-[16/9] overflow-hidden">
                {Object.entries(decks).map(([key, src]) => (
                  <img
                    key={key}
                    src={src}
                    alt={`${key} deck`}
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      deck === key
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-[1.01]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= DATA SYSTEM ================= */}
        <div ref={peakRef} className="max-w-[900px] mx-auto text-center">

          {/* 12 */}
          <div
            className={`mb-[32px] transition-all duration-[1000ms]
            ${visible.peak ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="font-[Gambarino] text-[90px] md:text-[110px] leading-none text-[#2D3C68]">
              12
            </div>

            <p className="mt-2 text-[12px] tracking-[0.28em] uppercase text-[#2D3C68]/45">
              Guests
            </p>
          </div>

          {/* MEANING */}
          <div
            className={`mb-[80px] transition-all duration-[1000ms] delay-100
            ${visible.peak ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p className="text-[16px] leading-[1.8] text-[#2D3C68]/70 max-w-[560px] mx-auto">
              Not crowded. Not empty.
              A scale where people stay close without feeling compressed.
            </p>
          </div>

          {/* STRUCTURE */}
          <div
            className={`grid grid-cols-3 gap-12 mb-[120px] transition-all duration-[1000ms] delay-200
            ${visible.peak ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {[
              ["Length", "40.75 m"],
              ["Cabins", "4"],
              ["Crew", "10"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[11px] tracking-[0.25em] uppercase text-[#2D3C68]/40">
                  {label}
                </p>

                <p className="mt-3 text-[20px] text-[#2D3C68]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SPECS ================= */}
        <div
          ref={specsRef}
          className={`max-w-[900px] mx-auto transition-all duration-[1000ms]
          ${visible.specs ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-center text-[11px] tracking-[0.35em] uppercase mb-[32px] text-[#2D3C68]/35">
            Technical Specifications
          </p>

          <div className="grid md:grid-cols-2 gap-x-20">
            {specs.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between items-baseline py-[14px] border-b border-[#2D3C68]/10"
              >
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#2D3C68]/35">
                  {label}
                </span>

                <span className="text-[14px] text-[#2D3C68] text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Reservation() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <img
        src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/06_f2yr7e.webp"
        alt="Serenity Reservation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">

        <div className="text-center max-w-[640px]">

          {/* LABEL */}
          <p className="text-[11px] tracking-[0.35em] text-white/60 uppercase">
            Reservation
          </p>

          {/* HEADLINE */}
          <h2 className="mt-6 font-[Gambarino] text-[44px] md:text-[60px] leading-[1.1] text-white">
            Start Your Journey
          </h2>

          {/* SUBTEXT */}
          <p className="mt-6 text-[15px] text-white/80 leading-[1.7]">
            Share your preferred dates and group size.  
            We’ll take care of the rest.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">

            {/* PRIMARY */}
            <button className="px-8 py-3 bg-white text-[#1A1A1A] text-[13px] tracking-[0.15em] uppercase rounded-full hover:bg-white/90 transition">
              Enquire
            </button>

            {/* SECONDARY */}
            <a
              href="https://wa.me/6281353613617"
              target="_blank"
              className="px-8 py-3 border border-white/40 text-white text-[13px] tracking-[0.15em] uppercase rounded-full hover:border-white transition"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}


function Closing() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_15_PM_otnwp1.png"
        alt="Closing"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ATMOSPHERIC OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">

        <div className="text-center max-w-[820px]">

          {/* LABEL */}
          <p className="text-[11px] tracking-[0.4em] text-white/60 uppercase">
            Reservations
          </p>

          {/* HEADLINE */}
          <h2 className="mt-6 text-[42px] md:text-[64px] leading-[1.15] text-white font-[Canela]">

            <span className="block font-light">
              Find the <span className="italic">Sanctuary</span>
            </span>

            <span className="block mt-2">
              You’ve Been Searching For
            </span>

          </h2>

          {/* CTA GROUP */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">

            {/* PRIMARY */}
            <button className="px-8 py-3 bg-white text-[#0F172A] text-[13px] tracking-[0.15em] uppercase rounded-full hover:bg-white/90 transition">
              Reserve
            </button>

            {/* SECONDARY */}
            <button className="px-8 py-3 border border-white/40 text-white text-[13px] tracking-[0.15em] uppercase rounded-full hover:border-white transition">
              Book an Initial Call
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}