"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "../../lib/gsap"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Footer from '../../components/Footer'


export default function Page() {
  return (
    <main className="bg-[#0a0f14] text-white overflow-hidden">
      <Hero /> 
      <Identity/>
      <Spaces/>
      <Suites/>
      <LivingSpaces/>
      <DeckAndSpecs/>
      <Closing/>
      <Footer/>
    </main>
  )
}


function Hero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">

      {/* IMAGE */}
      <img
        src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_15_PM_otnwp1.png"
        alt="Yacht"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* VERY SUBTLE DEPTH */}
      <div className="absolute inset-0 bg-black/10" />

      {/* TYPOGRAPHY */}
      <div className="relative z-10 h-full flex items-end px-6 pb-12 md:pb-16">

        <h1 className="font-[Canela] text-white text-[56px] md:text-[120px] leading-[0.9] tracking-tight">
          The Yacht
        </h1>

      </div>

    </section>
  );
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

function Suites() {
  const suites = [
    {
      name: "Presidential Suite",
      location: "Main Deck",
      occupancy: "2 pax",
      units: "1",
      description:
        "A private oasis with expansive panoramic views. Designed for complete stillness, with generous space, natural light, and a quiet sense of separation from the rest of the vessel.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_15_PM_otnwp1.png",
    },
    {
      name: "Executive Suite",
      location: "Upper Deck",
      occupancy: "2 pax",
      units: "3",
      description:
        "Balanced between openness and privacy, offering direct access to ocean views and a refined interior that feels both intimate and expansive.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_56_PM_t7jwul.png",
    },
    {
      name: "Junior Suites",
      location: "Lower Deck",
      occupancy: "2 pax",
      units: "3",
      description:
        "Quiet, grounded, and thoughtfully designed. These suites offer comfort and calm with a subtle connection to the surrounding sea.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_01_PM_yfdh57.png",
    },
  ];

  const [active, setActive] = useState(0);
  const current = suites[active];

  return (
    <section className="bg-[#F5F2ED] py-[140px] px-6">

      <div className="max-w-[1280px] mx-auto">

        {/* TABS */}
        <div className="flex justify-center gap-10 text-[13px] tracking-wide mb-10">
          {suites.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition ${
                active === i
                  ? "text-[#0F172A]"
                  : "text-[#0F172A]/30"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* TITLE (NAIK LEVEL) */}
        <div className="text-center">
          <h2 className="font-[Canela] text-[40px] md:text-[64px] leading-[1.1] text-[#0F172A]">
            {current.name}
          </h2>

          <p className="mt-3 text-[13px] text-[#0F172A]/50 tracking-wide">
            {current.location}
          </p>
        </div>

        {/* IMAGE (CENTERPIECE) */}
        <div className="mt-12 relative w-full h-[420px] md:h-[520px] overflow-hidden">

          <img
            src={current.image}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* subtle depth */}
          <div className="absolute inset-0 ring-1 ring-black/10 pointer-events-none" />

        </div>

        {/* CONTENT BLOCK (DITARIK DEKAT, GAK NGAMBANG) */}
        <div className="mt-10 grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">

          {/* DESCRIPTION */}
          <div className="max-w-[560px]">
            <p className="text-[16px] text-[#0F172A]/80 leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* SPECS (JADI VISUAL BLOCK) */}
          <div className="grid grid-cols-3 gap-6 text-center">

            <div>
              <p className="text-[11px] tracking-[0.2em] text-[#0F172A]/40 uppercase">
                Units
              </p>
              <p className="mt-2 text-[20px] font-medium text-[#0F172A]">
                {current.units}
              </p>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.2em] text-[#0F172A]/40 uppercase">
                Location
              </p>
              <p className="mt-2 text-[20px] font-medium text-[#0F172A]">
                {current.location}
              </p>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.2em] text-[#0F172A]/40 uppercase">
                Occupancy
              </p>
              <p className="mt-2 text-[20px] font-medium text-[#0F172A]">
                {current.occupancy}
              </p>
            </div>

          </div>

        </div>

        {/* CTA (PUNYA POSISI JELAS) */}
        <div className="mt-14 flex flex-wrap items-center gap-4">

{/* PRIMARY CTA */}
<button className="px-7 py-3 rounded-full bg-[#0F172A] text-white text-[13px] tracking-[0.12em] uppercase hover:bg-[#0F172A]/90 transition">

  Reserve

</button>

{/* SECONDARY CTA */}
<button className="px-7 py-3 rounded-full border border-[#0F172A]/20 text-[#0F172A] text-[13px] tracking-[0.12em] uppercase hover:border-[#0F172A] transition">

  Book an Initial Call

</button>

</div>

      </div>

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
  return (
    <section className="bg-[#EAE4DB] py-[140px] px-6">

      <div className="max-w-[1280px] mx-auto">

        {/* HEADER */}
        <div className="max-w-[720px]">
          <p className="text-[12px] tracking-[0.3em] text-[#6B7280] uppercase">
            Deck Plan
          </p>

          <h2 className="mt-6 font-[Canela] text-[36px] md:text-[52px] leading-[1.1] text-[#1A1A1A]">
            Sanctuary, Deck by Deck
          </h2>

          <p className="mt-4 text-[15px] text-[#1A1A1A]/70 leading-relaxed">
            Thoughtfully crafted spaces designed for both gathering and retreat,
            balancing openness with quiet corners across every level.
          </p>
        </div>

        {/* TABS */}
        <div className="mt-10 flex gap-8 text-[13px] tracking-[0.2em] uppercase border-b border-black/10 pb-4">

          {["Main Deck", "Upper Deck", "Lower Deck", "Rooftop"].map((tab, i) => (
            <button
              key={i}
              className={`transition ${
                i === 0 ? "text-[#1A1A1A]" : "text-[#1A1A1A]/40"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>

        {/* PLAN (DIKUATIN PRESENCE) */}
        <div className="mt-12 relative bg-white rounded-[6px] p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">

          <div className="overflow-hidden">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_09_PM_i95qhf.png"
              className="w-full h-full object-contain transition duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* subtle frame */}
          <div className="absolute inset-0 ring-1 ring-black/5 pointer-events-none" />

        </div>

        {/* VISUAL BREAK */}
        <div className="mt-20 border-t border-black/10" />

        {/* SPECIFICATIONS */}
        <div className="mt-16">

          <h3 className="font-[Canela] text-[30px] md:text-[40px] text-center text-[#1A1A1A]">
            Specifications
          </h3>

          {/* GRID (LEBIH PADAT + BERAT) */}
          <div className="mt-12 grid md:grid-cols-2 gap-x-20 gap-y-6 max-w-[900px] mx-auto">

            {[
              ["Year Built", "2025"],
              ["Length", "45 m (148 ft)"],
              ["Beam", "8.6 m"],
              ["Draft", "3.75 m"],
              ["Guest Staterooms", "7"],
              ["Maximum Guests", "14"],
              ["Crew", "17"],
              ["Generators", "2 × 65 kVA"],
              ["Water Capacity", "6,000 L"],
              ["Fuel Capacity", "13,000 L"],
              ["Water Maker", "10,000 L/day"],
              ["Max Speed", "10 knots"],
              ["Engine", "Yanmar 450 HP"],
            ].map(([label, value], i) => (
              <div key={i} className="flex justify-between border-b border-black/10 pb-3">

                <span className="text-[12px] tracking-[0.2em] text-[#6B7280] uppercase">
                  {label}
                </span>

                <span className="text-[14px] text-[#1A1A1A]">
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