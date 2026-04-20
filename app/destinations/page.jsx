"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "../../lib/gsap"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Footer from '../../components/Footer'


export default function Page() {
  return (
    <main className="bg-[#0a0f14] text-white overflow-hidden">
       <Hero/>
       <WorldDefinition/>   
       <ExperienceStructure/>
       {/* <Destinations/> */}
       <Reservation/>
      <Footer/> 
    </main>
  )
}


function Hero() {
  const pathRef = useRef(null)

  useEffect(() => {
    const path = pathRef.current
    const length = path.getTotalLength()

    path.style.strokeDasharray = length
    path.style.strokeDashoffset = length

    let progress = 0

    function animate() {
      progress += 0.0016
      path.style.strokeDashoffset = length * (1 - progress)

      if (progress < 1) requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <section className="relative h-screen bg-[#2D3C68] overflow-hidden">

      {/* MAP — REORIENTED TO BALI → MALUKU */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dombq6plz/image/upload/v1776257972/indonesia_ruqj89.svg"
          alt="Indonesia Map"
          className="
            w-[180%]
            opacity-[0.06]
            invert
            object-contain
            translate-x-[-18%]
            translate-y-[6%]
            scale-[1.4]
          "
        />
      </div>

      {/* ROUTE — ADJUSTED TO EAST REGION */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B08D57" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#B08D57" stopOpacity="1" />
            <stop offset="100%" stopColor="#B08D57" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* BALI → FLORES → MALUKU FLOW */}
        <path
          ref={pathRef}
          d="
            M220 340
            C360 300, 460 260, 560 280
            S760 320, 880 240
          "
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>

      {/* DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(45,60,104,0)_30%,rgba(45,60,104,0.9)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2D3C68] via-transparent to-transparent opacity-80" />

      {/* CONTENT (UNCHANGED) */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] mx-auto w-full px-6 grid grid-cols-12">

          <div className="col-span-7 col-start-2">

            {/* MICRO */}
            <div className="mb-6 text-[11px] tracking-[0.28em] text-[#F4F5F2]/70">
              DESTINATIONS
            </div>

            {/* HEADLINE */}
            <h1 className="font-[Gambarino] text-[56px] md:text-[76px] leading-[1.05] tracking-[-0.03em] text-[#F4F5F2]">
              The sea shapes
              <br />
              everything here
            </h1>

            {/* SUBCOPY */}
            <p className="mt-6 text-[15px] text-[#F4F5F2]/80 max-w-[520px] leading-[1.7]">
              A chain of islands where movement, stillness, and shared moments
              unfold naturally across water, land, and time.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <button className="px-8 py-3 rounded-full border border-[#F4F5F2]/70 text-[13px] text-[#F4F5F2] transition hover:bg-[#F4F5F2] hover:text-[#2D3C68]">
                Explore Destinations →
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}


function WorldDefinition() {
  return (
    <section className="bg-[#F4F5F2] py-[140px] overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* ===== INTRO (SUBTLE) ===== */}
        <div className="mb-24 max-w-xl">
          <p className="text-[11px] tracking-[0.28em] text-[#2D3C68]/60 mb-6">
            DESTINATIONS
          </p>

          <h2 className="font-[Gambarino] text-[42px] md:text-[56px] leading-[1.08] tracking-[-0.02em] text-[#2D3C68]">
            Two regions, two
            <br />
            distinct worlds
          </h2>
        </div>

        {/* ===== LABUAN BAJO (STABLE) ===== */}
        <div className="grid grid-cols-12 items-center mb-[160px]">

          {/* IMAGE */}
          <div className="col-span-6">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068973/49_ph3xr3.webp"
                alt="Labuan Bajo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="col-span-5 col-start-8">

            <p className="text-[11px] tracking-[0.28em] text-[#2D3C68]/50 mb-6">
              LABUAN BAJO
            </p>

            <h3 className="font-[Gambarino] text-[34px] leading-[1.1] text-[#2D3C68] mb-6">
              Where land and sea
              <br />
              meet in contrast
            </h3>

            <p className="text-[15px] leading-[1.7] text-[#2D3C68]/80">
              A gateway into Komodo National Park, where rugged islands rise
              from turquoise waters. Here, days move between coral reefs,
              quiet bays, and encounters with Komodo dragons — a landscape
              that feels both raw and accessible.
            </p>

          </div>

        </div>

        {/* ===== RAJA AMPAT (BREAK / OFFSET) ===== */}
        <div className="grid grid-cols-12 items-center">

          {/* TEXT (SHIFTED LEFT = TENSION) */}
          <div className="col-span-5 col-start-1">

            <p className="text-[11px] tracking-[0.28em] text-[#2D3C68]/50 mb-6">
              RAJA AMPAT
            </p>

            <h3 className="font-[Gambarino] text-[34px] leading-[1.1] text-[#2D3C68] mb-6">
              A world beneath
              <br />
              the surface
            </h3>

            <p className="text-[15px] leading-[1.7] text-[#2D3C68]/80">
              One of the most biodiverse marine regions on earth, where over
              1,300 species of reef fish inhabit crystal-clear waters.
              Surrounded by limestone islands and hidden lagoons, this is a
              place defined by depth, isolation, and extraordinary life below
              the surface.
            </p>

          </div>

          {/* IMAGE (OFFSET BREAK) */}
          <div className="col-span-6 col-start-7 translate-y-[80px]">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_28_PM_fkhsss.png"
                alt="Raja Ampat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

function ExperienceStructure() {

  const destinations = [
    {
      name: "Raja Ampat",
      hero: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000",
      portrait: "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_05_PM_nsfruu.png",
      description:
        "A remote marine region in West Papua, known for its unmatched biodiversity beneath the surface.",
      detail:
        "Days here are shaped almost entirely by water. Movement is constant — currents shift, light refracts, and marine life moves in layered depth. You don’t simply observe it; you enter it, adjusting your pace to something that was already in motion long before you arrived.",
      activities: [
        {
          img: "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_28_PM_fkhsss.png",
          text: "Snorkel across coral systems where visibility reveals dense layers of marine life.",
        },
        {
          img: "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_28_PM_fkhsss.png",
          text: "Navigate between limestone formations rising directly from open water.",
        },
        {
          img: "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_28_PM_fkhsss.png",
          text: "Drift slowly through lagoons shaped by tide and geological structure.",
        },
      ],
    },

    {
      name: "Labuan Bajo",
      hero: "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_01_PM_yfdh57.png",
      portrait: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
      description:
        "The gateway to Komodo National Park, where rugged islands meet open ocean.",
      detail:
        "The rhythm shifts once you step onto land. Terrain becomes dry, distances feel longer, and movement requires more intention. The environment is exposed — sun, wind, and elevation define how you move through space.",
      activities: [
        {
          img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200",
          text: "Walk across open terrain where wildlife exists without enclosure.",
        },
        {
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
          text: "Swim in bays framed by dry, sculpted island ridges.",
        },
        {
          img: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200",
          text: "Observe shifting light across layered island formations.",
        },
      ],
    }, 
  ]

  return (
    <section className="bg-[#F4F5F2] pb-[160px]">

      {/* ================= INTRO ================= */}
      <div className="max-w-[900px] mx-auto px-6 pt-[180px] mb-[140px]">

        <p className="text-[11px] tracking-[0.32em] text-[#2D3C68]/50 mb-6">
          DESTINATIONS
        </p>

        <h2 className="font-[Gambarino] text-[56px] md:text-[72px] leading-[1.04] text-[#2D3C68]">
          What you’ll experience
        </h2>

      </div>

      {/* ================= DESTINATIONS ================= */}
      {destinations.map((dest, i) => (
        <div
          key={i}
          className={i === destinations.length - 1 ? "" : "mb-[200px]"}
        >

          {/* HERO */}
          <div className="w-full h-[75vh] relative overflow-hidden">

            <img
              src={dest.hero}
              className="w-full h-full object-cover scale-[1.02]"
            />

            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

            <div className="absolute bottom-14 left-[max(6%,60px)] text-white max-w-[560px]">

              <p className="text-[11px] tracking-[0.3em] uppercase text-white/70 mb-4">
                Destination
              </p>

              <h3 className="font-[Gambarino] text-[56px] leading-[1.04] mb-5">
                {dest.name}
              </h3>

              <p className="text-[16px] leading-[1.85] text-white/90">
                {dest.description}
              </p>

            </div>

          </div>

          {/* CONTENT */}
          <div className="max-w-[1100px] mx-auto px-6 mt-[120px] mb-[110px]">

            <div className="grid grid-cols-12 gap-16 items-start">

              <div className="col-span-5">
                <p className="text-[16px] leading-[1.95] text-[#2D3C68]">
                  <span className="block mb-4 text-[#2D3C68]/70">
                    {dest.detail.split(".")[0]}.
                  </span>
                  {dest.detail.split(".").slice(1).join(".")}
                </p>
              </div>

              <div className="col-span-6 col-start-7">
                <div className="aspect-[4/5] overflow-hidden translate-y-2">
                  <img
                    src={dest.portrait}
                    className="w-full h-full object-cover scale-[1.03]"
                  />
                </div>
              </div>

            </div>

          </div>

          {/* GALLERY */}
          <div className="max-w-[1200px] mx-auto px-6">

            <div className="grid grid-cols-3 gap-8">

              {dest.activities.map((item, j) => (
                <div
                  key={j}
                  className={j === 1 ? "translate-y-6" : ""}
                >

                  <div className="aspect-[4/3] overflow-hidden mb-5">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover scale-[1.02]"
                    />
                  </div>

                  <p className="text-[15px] text-[#2D3C68]/80 leading-[1.75]">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      ))}

    </section>
  )
}


function Destinations() {
  const data = [
    {
      title: "Komodo Islands",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_24_PM_lzlhwx.png",
      description:
        "Experience the raw beauty of Komodo National Park, where dramatic landscapes meet thriving marine life. From rugged trails to vibrant reefs, every moment feels untouched and alive.",
      highlights: [
        "Hiking",
        "Snorkeling",
        "Paddle boarding",
        "Diving",
        "Private beach dinner",
        "Komodo dragons",
      ],
    },
    {
      title: "Raja Ampat",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_18_PM_dihjfs.png",
      description:
        "Raja Ampat’s untouched islands and crystalline waters create a sanctuary of biodiversity. Every journey here feels like entering a different world — quiet, vast, and deeply immersive.",
      highlights: [
        "Birdwatching",
        "Snorkeling",
        "Kayaking",
        "Diving",
        "Private beach dinner",
        "Manta rays",
      ],
    },
  ];

  return (
    <section className="bg-[#F5F2ED]">

      {/* ================= KOMODO — CENTERED CINEMATIC ================= */}
      <div className="py-[140px] px-6">

        <div className="max-w-[1100px] mx-auto text-center">

          <h2 className="font-[Canela] text-[36px] md:text-[56px] text-[#0F172A] tracking-[0.2em] uppercase">
            {data[0].title}
          </h2>

          <div className="mt-12 w-full h-[420px] md:h-[520px] overflow-hidden">

            <img
              src={data[0].image}
              alt={data[0].title}
              className="w-full h-full object-cover"
            />

          </div>

          <p className="mt-10 max-w-[720px] mx-auto text-[15px] text-[#0F172A]/70 leading-relaxed">
            {data[0].description}
          </p>

          {/* highlights — editorial inline */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[13px] text-[#0F172A]/60">

            {data[0].highlights.map((item, i) => (
              <span key={i}>
                {item}
              </span>
            ))}

          </div>

          {/* CTA — only here */}
          <div className="mt-12 flex justify-center gap-4">

            <button className="px-6 py-3 text-[12px] tracking-[0.25em] uppercase bg-[#8FA7A3] text-white rounded-full">
              Reserve
            </button>

            <button className="px-6 py-3 text-[12px] tracking-[0.25em] uppercase border border-[#0F172A]/30 text-[#0F172A] rounded-full">
              Book Initial Call
            </button>

          </div>

        </div>

      </div>

      {/* ================= RAJA AMPAT — SPLIT (BREAK RHYTHM) ================= */}
      <div className="py-[140px] px-6">

        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — TEXT */}
          <div>

            <h2 className="font-[Canela] text-[36px] md:text-[56px] text-[#0F172A] leading-[1.1]">
              {data[1].title}
            </h2>

            <p className="mt-6 text-[15px] text-[#0F172A]/70 leading-relaxed max-w-[480px]">
              {data[1].description}
            </p>

            {/* highlights — stacked minimal */}
            <div className="mt-8 space-y-2 text-[14px] text-[#0F172A]/60">

              {data[1].highlights.map((item, i) => (
                <div key={i}>{item}</div>
              ))}

            </div>

          </div>

          {/* RIGHT — IMAGE */}
          <div className="w-full h-[420px] md:h-[520px] overflow-hidden">

            <img
              src={data[1].image}
              alt={data[1].title}
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}


function Reservation() {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <img
        src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/06_f2yr7e.webp"
        alt="Serenity Reservation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ================= DEPTH OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-[100vh] flex items-center justify-center px-6">

        <div className="text-center max-w-[680px]">

          {/* LABEL */}
          <p className="text-[11px] tracking-[0.4em] text-white/50 uppercase">
            Reservation
          </p>

          {/* HEADLINE */}
          <h2 className="mt-8 font-[Gambarino] text-[48px] md:text-[64px] leading-[1.08] text-white">
            Your journey begins at sea
          </h2>

          {/* SUBTEXT */}
          <p className="mt-8 text-[15px] text-white/75 leading-[1.9] max-w-[520px] mx-auto">
            Share your preferred dates and group size.  
            Everything else unfolds naturally — guided, not scheduled.
          </p>

          {/* CTA */}
          <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-5">

            {/* PRIMARY */}
            <button className="group relative px-10 py-4 bg-white text-[#1A1A1A] text-[13px] tracking-[0.18em] uppercase rounded-full overflow-hidden">

              {/* subtle cinematic hover */}
              <span className="absolute inset-0 bg-white scale-100 group-hover:scale-105 transition duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"></span>

              <span className="relative z-10">
                Enquire now
              </span>
            </button>

            {/* SECONDARY */}
            <a
              href="https://wa.me/6281353613617"
              target="_blank"
              className="px-9 py-4 border border-white/40 text-white text-[13px] tracking-[0.18em] uppercase rounded-full hover:border-white transition duration-300"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}