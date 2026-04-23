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
       {/* <WorldDefinition/>    */}
       <RegionSystem/>
       {/* <BaliFragment/> */}
       <ExperienceStructure/> 
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

      {/* MAP */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dombq6plz/image/upload/v1776257972/indonesia_ruqj89.svg"
          alt="Indonesia Map"
          className="
            w-[180%]
            opacity-[0.12]
            invert
            object-contain
            translate-x-[-18%]
            translate-y-[6%]
            scale-[1.4]
            blur-[1px]
          "
        />
      </div>

      {/* ROUTE */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B08D57" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#E0C48A" stopOpacity="1" />
            <stop offset="100%" stopColor="#B08D57" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <path
          ref={pathRef}
          d="
            M220 340
            C360 300, 460 260, 560 280
            S760 320, 880 240
          "
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      {/* DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_50%,rgba(255,255,255,0.04)_0%,rgba(45,60,104,0.9)_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2D3C68] via-transparent to-transparent opacity-90" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] mx-auto w-full px-6 grid grid-cols-12">

          <div className="col-span-7 col-start-2">

            <div className="mb-6 text-[11px] tracking-[0.28em] text-[#F4F5F2]/70">
              DESTINATIONS
            </div>

            <h1 className="font-[Gambarino] text-[56px] md:text-[76px] leading-[1.05] tracking-[-0.03em] text-[#F4F5F2]">
              The sea shapes
              <br />
              everything here
            </h1>

            <p className="mt-6 text-[15px] text-[#F4F5F2]/80 max-w-[520px] leading-[1.7]">
              A chain of islands where movement, stillness, and shared moments
              unfold naturally across water, land, and time.
            </p>

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

function RegionSystem() {
  const mapRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let raf;
    let t = 0;

    const animate = () => {
      t += 0.002;

      if (mapRef.current) {
        const x = Math.cos(t * 0.6) * 10;
        const y = Math.sin(t) * 14;

        mapRef.current.style.transform = `
          translate(${x}px, ${y}px) scale(1.06)
        `;
      }

      raf = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
        else cancelAnimationFrame(raf);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      cancelAnimationFrame(raf);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F4F5F2] py-[100px] overflow-hidden"
    >
      {/* DIRECTIONAL DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2D3C68]/5 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 items-center relative">

        {/* ================= MAP ================= */}
        <div className="col-span-7 relative h-[640px] flex items-center justify-center">

          <div
            ref={mapRef}
            className="relative w-[170%] will-change-transform"
          >
            {/* BASE MAP */}
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1776257972/indonesia_ruqj89.svg"
              alt="Indonesia Map"
              className="w-full h-auto object-contain opacity-[0.55]"
            />

            {/* WEST FADE (arah perjalanan) */}
            <div className="absolute left-0 top-0 w-[35%] h-full bg-gradient-to-r from-[#F4F5F2] to-transparent" />

            {/* EAST EMPHASIS (focal bias, super subtle) */}
            <div className="absolute right-[5%] top-[20%] w-[300px] h-[300px] bg-[#2D3C68]/8 blur-[120px] rounded-full" />
          </div>

          {/* GLOBAL ATMOSPHERE */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[420px] h-[420px] bg-[#2D3C68]/6 blur-[120px] rounded-full absolute left-[20%] top-[30%]" />
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="col-span-5 relative z-10 -ml-[80px]">

          {/* TEXT MASK */}
          <div className="absolute -left-[40px] top-[-40px] w-[120%] h-[120%] bg-gradient-to-r from-[#F4F5F2] via-[#F4F5F2]/90 to-transparent pointer-events-none" />

          <div className="relative max-w-[440px]">

            <p className="text-[11px] tracking-[0.28em] text-[#2D3C68]/50 mb-6">
              DESTINATIONS
            </p>

            <h3 className="font-[Gambarino] text-[52px] leading-[1.05] text-[#2D3C68] mb-6">
              A country
              <br />
              shaped by water
            </h3>

            <p className="text-[15px] leading-[1.75] text-[#2D3C68]/75">
              Indonesia stretches across thousands of islands, forming a landscape
              defined by water. Each region carries a different rhythm — from dry,
              rugged terrain to dense marine ecosystems — shaping how the sea is
              experienced.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

function BaliFragment() {
  const islandRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let raf;
    let t = 0;

    const animate = () => {
      t += 0.002;

      if (islandRef.current) {
        const x = Math.cos(t * 0.5) * 14;
        const y = Math.sin(t) * 20;

        islandRef.current.style.transform = `
          translate(${x}px, ${y}px) scale(1.2)
        `;
      }

      raf = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
        else cancelAnimationFrame(raf);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      cancelAnimationFrame(raf);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F4F5F2] py-[240px] overflow-hidden"
    >
      {/* DEPTH WASH */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2D3C68]/5 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 items-center relative">

        {/* ================= ISLAND ================= */}
        <div className="col-span-7 relative h-[720px]">

          <div
            ref={islandRef}
            className="absolute left-[-35%] top-[-15%] w-[200%] opacity-[0.7] will-change-transform"
          >
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1776862471/svg-image-1_rgzioi.svg"
              alt="Bali Island"
              className="w-full h-auto object-contain"
            />

            {/* SOFT MASS SHADOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_50%,rgba(45,60,104,0.18),transparent_70%)]" />
          </div>

          {/* GLOBAL ATMOSPHERE */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[600px] h-[600px] bg-[#2D3C68]/10 blur-[160px] rounded-full left-[45%] top-[20%]" />
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="col-span-5 relative z-10 -ml-[120px]">

          {/* MASK */}
          <div className="absolute -left-[80px] top-[-80px] w-[140%] h-[140%] bg-gradient-to-r from-[#F4F5F2] via-[#F4F5F2]/95 to-transparent pointer-events-none" />

          <div className="relative max-w-[460px]">

            <p className="text-[11px] tracking-[0.28em] text-[#2D3C68]/50 mb-6">
              A FRAGMENT
            </p>

            <h3 className="font-[Gambarino] text-[56px] leading-[1.05] text-[#2D3C68] mb-6">
              A shape
              <br />
              in the water
            </h3>

            <p className="text-[15px] leading-[1.8] text-[#2D3C68]/75">
              Removed from context, the island is no longer a destination.
              It becomes a presence — defined by edges, distance, and the
              surrounding sea.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

function ExperienceStructure() {
  const destinations = [
    {
      name: "Raja Ampat Archipelago",
      hero: "https://res.cloudinary.com/dombq6plz/image/upload/v1776869679/ChatGPT_Image_Apr_22_2026_09_52_18_PM_ylbg4q.png",
      mainImage: "https://res.cloudinary.com/dombq6plz/image/upload/v1776869680/ChatGPT_Image_Apr_22_2026_08_28_23_PM_1_pbeqgf.png",
      description:
        "Nothing here needs to be arranged. The water moves, the light shifts, and you follow. Time softens when everything around you is already in motion.",
      gallery: [
        {
          img: "https://res.cloudinary.com/dombq6plz/image/upload/v1776869680/ChatGPT_Image_Apr_22_2026_08_27_54_PM_n8evgp.png",
          text: "Below the surface, everything moves on its own rhythm",
        },
        {
          img: "https://res.cloudinary.com/dombq6plz/image/upload/v1776869680/ChatGPT_Image_Apr_22_2026_08_29_52_PM_fzz6eu.png",
          text: "Paths appear as you move between islands and land",
        },
        {
          img: "https://res.cloudinary.com/dombq6plz/image/upload/v1776869887/ChatGPT_Image_Apr_22_2026_09_57_35_PM_1_vwbdwb.png",
          text: "Evenings settle quietly, without needing anything more",
        },
      ],
    },
    {
      name: "Komodo — Padar Island",
      hero: "https://res.cloudinary.com/dombq6plz/image/upload/v1776869680/ChatGPT_Image_Apr_22_2026_09_52_24_PM_ksm8ag.png",
      mainImage: "https://res.cloudinary.com/dombq6plz/image/upload/v1776869679/ChatGPT_Image_Apr_22_2026_09_52_27_PM_sk1t1e.png",
      description:
        "The land holds a different pace. You walk through heat, through open space, through something more exposed. Not rushed, not forced — just steady movement forward.",
      gallery: [
        {
          img: "https://res.cloudinary.com/dombq6plz/image/upload/v1776869679/ChatGPT_Image_Apr_22_2026_09_52_31_PM_maxcdv.png",
          text: "Life here moves quietly, powerful without needing to show it",
        },
        {
          img: "https://res.cloudinary.com/dombq6plz/image/upload/v1776869679/ChatGPT_Image_Apr_22_2026_09_52_34_PM_ot1mm8.png",
          text: "Higher ground opens everything at once",
        },
        {
          img: "https://res.cloudinary.com/dombq6plz/image/upload/v1776869679/ChatGPT_Image_Apr_22_2026_09_52_38_PM_u9zpja.png",
          text: "By the end of the day, you return and let it slow again",
        },
      ],
    },
  ]

  return (
    <section className="bg-[#F4F5F2]">

      {destinations.map((dest, i) => (
        <div key={i}>

          {/* ================= HERO ================= */}
          <div className="w-full h-[70vh] md:h-[85vh] relative overflow-hidden">

            <img
              src={dest.hero}
              className="w-full h-full object-cover scale-[1.02]"
            />

            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <h1 className="font-[Gambarino] text-[40px] md:text-[72px] text-white leading-[1.1]">
                {dest.name}
              </h1>
            </div>

          </div>


          {/* ================= LARGE IMAGE + TEXT ================= */}
          <div className="max-w-[1200px] mx-auto px-6 mt-[80px] md:mt-[140px]">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

              {/* IMAGE */}
              <div className="md:col-span-7">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={dest.mainImage}
                    className="w-full h-full object-cover scale-[1.03]"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="md:col-span-5 md:translate-y-6">

                <div className="max-w-full md:max-w-[320px] mt-6 md:mt-0">

                  <p className="text-[14px] md:text-[15px] leading-[1.8] text-[#2D3C68]/80 mb-8 md:mb-10">
                    {dest.description}
                  </p>

                  <div className="mb-4 md:mb-6 text-[10px] md:text-[11px] tracking-[0.25em] text-[#2D3C68]/50">
                    START YOUR JOURNEY
                  </div>

                  <button className="border border-[#2D3C68]/40 px-5 md:px-6 py-3 text-[11px] md:text-[12px] tracking-[0.15em] text-[#2D3C68] hover:bg-[#2D3C68] hover:text-white transition w-full md:w-auto">
                    REQUEST ITINERARY
                  </button>

                </div>

              </div>

            </div>

          </div>


          {/* ================= GALLERY ================= */}
          <div className="max-w-[1200px] mx-auto px-6 mt-[80px] md:mt-[140px] pb-[100px] md:pb-[160px]">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {dest.gallery.map((item, j) => (
                <div
                  key={j}
                  className={
                    j === 1
                      ? "md:translate-y-10"
                      : j === 2
                      ? "md:-translate-y-6"
                      : ""
                  }
                >
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-[13px] md:text-[14px] text-[#2D3C68]/70">
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
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // progress: -1 → 1 (atas → bawah)
      const progress = rect.top / windowH;

      // subtle banget
      const translateY = progress * -50;

      imageRef.current.style.transform = `translateY(${translateY}px) scale(1.06)`;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[88vh] w-full overflow-hidden"
    >
      {/* ================= BACKGROUND (INNER PARALLAX) ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/06_f2yr7e.webp"
          alt="Serenity closing"
          className="w-full h-full object-cover will-change-transform"
          style={{
            transform: "scale(1.06)",
          }}
        />
      </div>

      {/* ================= NATURAL OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/45" />

      {/* LIGHT LIFT */}
      <div className="absolute inset-0 bg-black/10" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-[760px] -mt-6">

          {/* LABEL */}
          <p className="text-[11px] tracking-[0.4em] text-white/60 uppercase">
            Reservations
          </p>

          {/* HEADLINE */}
 {/* HEADLINE */}
 <h2 className="mt-8 font-[Gambarino] text-[48px] md:text-[64px] leading-[1.08] text-white">
            Your journey begins at sea
          </h2>

          {/* CTA GROUP */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">

            {/* PRIMARY */}
            <button className="px-8 py-3 bg-white text-[#1A1A1A] text-[13px] tracking-[0.15em] uppercase rounded-full transition-all duration-700 hover:bg-white/90">
              Reserve
            </button>

            {/* SECONDARY */}
            <button className="px-8 py-3 border border-white/40 text-white text-[13px] tracking-[0.15em] uppercase rounded-full transition-all duration-700 hover:border-white">
              View availability
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}