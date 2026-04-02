"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "../lib/gsap"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
 
/* =========================
   PAGE WRAPPER
========================= */
export default function Home() {
  return (
    <main className="bg-[#0a0f14] text-white overflow-hidden">
      <Hero />
      <Statement/>
      {/* <Destinations/> */}
      {/* <Yacht/>   */}
      {/* <Experience/> */}
      <Expedition/>
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

  const revealRef = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // IMAGE REVEAL
    tl.fromTo(
      revealRef.current,
      { clipPath: "inset(50% 0 50% 0)" },
      {
        clipPath: "inset(0% 0 0% 0)",
        duration: 2,
        ease: "power3.inOut",
      }
    );

    // TEXT
    tl.from(
      [line1.current, line2.current],
      {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 1.3,
        ease: "power3.out",
      },
      "-=0.6"
    );

    tl.from(subRef.current, { y: 20, opacity: 0, duration: 1 }, "-=0.8");
    tl.from(ctaRef.current, { y: 20, opacity: 0, duration: 1 }, "-=0.7");
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* ================= IMAGE ================= */}
      <div ref={revealRef} className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031144/ChatGPT_Image_Apr_1_2026_03_12_07_PM_idf62v.png"
          alt="Ocean"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY (BALIK KE ASLI) */}
        <div className="absolute inset-0 bg-black/25" />

        {/* GRADIENT (UNCHANGED) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dombq6plz/image/upload/v1775052779/ChatGPT_Image_Apr_1_2026_09_12_06_PM_zhzo6w.png')",
            opacity: 0.12,
            mixBlendMode: "soft-light",
          }}
        />

        {/* TEXTURE (UNCHANGED) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dombq6plz/image/upload/v1775052779/ChatGPT_Image_Apr_1_2026_09_05_54_PM_asniqb.png')",
            opacity: 0.04,
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* ================= TOP BAR ================= */}
      <div className="absolute top-0 left-0 w-full z-30 flex justify-between items-center px-8 md:px-12 py-6 text-white">

        {/* BRAND (REFINED WORDMARK — ONLY CHANGE) */}
        <div className="flex flex-col leading-none">
          <span className="font-[Canela] text-[12px] tracking-[0.18em]">
            Serenity
          </span>
          <span className="text-[9px] tracking-[0.3em] text-white/40 mt-[2px]">
            INDONESIA
          </span>
        </div>

        {/* MENU (UNCHANGED) */}
        <button
          onClick={() => setOpen(true)}
          className="text-[12px] tracking-[0.3em] text-white/70 hover:text-white transition"
        >
          MENU
        </button>

      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="text-white max-w-[780px]">

          <h1 className="font-[Canela] text-[52px] md:text-[72px] leading-[1.08]">
            <div ref={line1}>Private voyages</div>
            <div ref={line2}>through Indonesia</div>
          </h1>

          <p
            ref={subRef}
            className="mt-6 font-[SuisseIntl] text-[16px] md:text-[18px] text-white/85 max-w-[560px] mx-auto leading-relaxed"
          >
            Mornings begin on still waters, afternoons drift between islands, and every moment moves at a pace that feels natural to you.
          </p>

          <div
            ref={ctaRef}
            className="mt-10 flex justify-center gap-6 text-[13px]"
          >
            <button className="border-b border-white pb-1">
              Explore journeys
            </button>

            <button className="text-white/60">
              The yacht
            </button>
          </div>

        </div>
      </div>

      {/* ================= MENU OVERLAY ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 text-white flex flex-col justify-between px-10 py-10"
          >

            <div className="flex justify-between items-center">
              <div className="text-[12px] tracking-[0.3em]">
                SERENITY
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-[12px] tracking-[0.3em]"
              >
                CLOSE
              </button>
            </div>

            <div className="flex flex-col gap-6 text-[32px] md:text-[44px] font-[Canela]">
              <a className="hover:opacity-70 transition">Journeys</a>
              <a className="hover:opacity-70 transition">The Yacht</a>
              <a className="hover:opacity-70 transition">Destinations</a>
              <a className="hover:opacity-70 transition">Contact</a>
            </div>

            <div className="text-[12px] text-white/40">
              Indonesia — Serenity Yacht
            </div>

          </motion.div>
        )}
      </AnimatePresence>

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


function Experience() {
  return (
    <section className="bg-[#F5F2ED] py-[160px] px-6">
      
      <div className="max-w-[1280px] mx-auto flex flex-col gap-32">
        
        {/* ================= BLOCK 1 ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE */}
          <div className="h-[480px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031029/ChatGPT_Image_Apr_1_2026_03_07_35_PM_ci1xyi.png"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-[420px]">
            <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-medium text-[#0F172A]">
              Wake Up to Open Waters
            </h2>

            <p className="mt-6 text-[16px] text-[#475569] leading-relaxed">
              Begin each day surrounded by endless horizons, where the only sound is the sea and the pace is entirely your own.
            </p>
          </div>

        </div>

        {/* ================= BLOCK 2 ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* TEXT */}
          <div className="max-w-[420px] md:order-1 order-2">
            <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-medium text-[#0F172A]">
              Explore Without Boundaries
            </h2>

            <p className="mt-6 text-[16px] text-[#475569] leading-relaxed">
              From hidden coves to untouched islands, every route is flexible — allowing each moment to unfold naturally.
            </p>
          </div>

          {/* IMAGE */}
          <div className="h-[480px] overflow-hidden md:order-2 order-1">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_05_PM_nsfruu.png"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* ================= BLOCK 3 (FEATURE MOMENT) ================= */}
        <div className="relative h-[520px] overflow-hidden">
          
          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031029/ChatGPT_Image_Apr_1_2026_03_07_46_PM_hvigtv.png"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-10 left-10 max-w-[500px] text-white">
            
            <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-medium">
              Evenings That Stay With You
            </h2>

            <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
              As the sun sets, the atmosphere shifts — creating moments that linger long after the journey ends.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
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
  const destinations = [
    {
      title: "Komodo",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_01_PM_yfdh57.png",
    },
    {
      title: "Raja Ampat",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_28_PM_fkhsss.png",
    },
    {
      title: "Banda Islands",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_09_PM_i95qhf.png",
    },
  ];

  return (
    <section className="bg-[#F5F2ED] py-[140px] px-6">
      
      <div className="max-w-[1280px] mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 max-w-[520px]">
          <p className="text-[12px] tracking-[0.3em] text-[#64748B] uppercase">
            Destinations
          </p>

          <h2 className="mt-4 text-[40px] md:text-[56px] leading-[1.2] font-medium text-[#0F172A]">
            Discover Indonesia
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="group relative h-[520px] overflow-hidden cursor-pointer"
            >
              
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20" />

              {/* TEXT */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-[20px] font-medium">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

        {/* OPTIONAL CTA */}
        <div className="mt-16">
          <button className="text-sm tracking-wide text-[#0F172A] border-b border-[#0F172A]/30 hover:border-[#0F172A] transition">
            View All Destinations
          </button>
        </div>

      </div>
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


function Footer() {
  return (
    <footer className="bg-[#0B0F14] text-white py-[80px] px-6">
      
      <div className="max-w-[1280px] mx-auto">
        
        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* BRAND */}
          <div>
            <h3 className="text-[14px] tracking-[0.3em] mb-4">
              SERENITY
            </h3>

            <p className="text-white/60 text-[14px] leading-relaxed max-w-[260px]">
              Private yacht journeys across Indonesia’s most remote and extraordinary destinations.
            </p>
          </div>

          {/* NAV */}
          <div className="flex flex-col gap-3 text-[14px] text-white/70">
            <p className="text-white mb-2">Explore</p>

            <a className="hover:text-white transition">Expeditions</a>
            <a className="hover:text-white transition">The Yacht</a>
            <a className="hover:text-white transition">Destinations</a>
            <a className="hover:text-white transition">Journal</a>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-3 text-[14px] text-white/70">
            <p className="text-white mb-2">Contact</p>

            <span>+62 812 0000 0000</span>
            <span>hello@serenity-yacht.com</span>
            <span>Indonesia</span>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-[12px] text-white/40 gap-4">
          
          <p>© 2026 Serenity Yacht. All rights reserved.</p>

          <div className="flex gap-6">
            <a className="hover:text-white transition">Privacy</a>
            <a className="hover:text-white transition">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
}