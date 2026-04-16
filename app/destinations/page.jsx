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
                src="https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1600&auto=format&fit=crop"
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
                src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1600&auto=format&fit=crop"
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
  const sectionsRef = useRef([]);

  const experiences = [
    {
      title: "Diving & Snorkeling",
      description:
        "Explore coral reefs across Labuan Bajo and Raja Ampat, home to one of the highest marine biodiversity levels in the world.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1776157051/Playful_moments_on_a_phinisi_yacht_n5vywa.png",
      environment: "UNDERWATER",
      level: "EASY / MEDIUM",
      duration: "5 HOURS",
    },
    {
      title: "Komodo Dragon Trek",
      description:
        "Walk through Komodo National Park and observe the Komodo dragon in its natural habitat across protected island terrain.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_02_PM_lplfu7.png",
      environment: "LAND",
      level: "EASY",
      duration: "2 HOURS",
    },
    {
      title: "Padar Island Hiking",
      description:
        "Hike to the summit for panoramic views of layered islands and curved bays unique to this region.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1776184323/Sailing_through_tropical_waters_1_qwtnm7.png",
      environment: "LAND",
      level: "MEDIUM / HARD",
      duration: "3 HOURS",
    },
  ];

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      const image = section.querySelector(".parallax-image");
      const wrapper = section.querySelector(".image-wrapper");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.2, // smooth banget
        },
      });

      // IMAGE PARALLAX (HALUS BANGET)
      tl.fromTo(
        image,
        { y: -40, scale: 1 },
        {
          y: 40,
          scale: 1.08,
          ease: "none",
        },
        0
      );

      // SOFT BLEED (GAK AGRESIF)
      tl.fromTo(
        wrapper,
        { x: 0, width: "100%" },
        {
          x: -20,
          width: "calc(100% + 40px)",
          ease: "none",
        },
        0
      );
    });
  }, []);

  return (
    <section className="bg-[#F4F5F2] py-32 overflow-hidden">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <p className="text-xs tracking-[0.14em] text-[#2D3C68]/50 mb-4">
          EXPERIENCE SYSTEM
        </p>

        <h2 className="font-[Gambarino] text-5xl md:text-6xl leading-[1.08] text-[#2D3C68] max-w-2xl">
          Structured Experiences
        </h2>
      </div>

      <div className="space-y-32">
        {experiences.map((item, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="max-w-5xl mx-auto px-6"
          >
            {/* IMAGE */}
            <div className="image-wrapper h-[65vh] overflow-hidden bg-[#E9EBE4]">
              <img
                src={item.image}
                alt={item.title}
                className="parallax-image w-full h-[110%] object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="grid md:grid-cols-2 gap-12 mt-10">
              <div>
                <h3 className="font-[Gambarino] text-3xl text-[#2D3C68] mb-4">
                  {item.title}
                </h3>

                <p className="text-base text-[#2D3C68]/80 max-w-md">
                  {item.description}
                </p>
              </div>

              <div className="border-t md:border-t-0 md:border-l border-[#2D3C68]/15 pt-6 md:pt-0 md:pl-8 grid grid-cols-2 gap-y-3 text-sm text-[#2D3C68]">
                <div className="text-[#2D3C68]/50">ENVIRONMENT</div>
                <div>{item.environment}</div>

                <div className="text-[#2D3C68]/50">ACTIVITY LEVEL</div>
                <div>{item.level}</div>

                <div className="text-[#2D3C68]/50">DURATION</div>
                <div>{item.duration}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
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
