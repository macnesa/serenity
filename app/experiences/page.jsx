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
      <ExperiencesIntro/>
      <ExperienceModes/>
      <Culinary/>
      <Footer/> 
    </main>
  )
}


function Hero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">

      {/* IMAGE */}
      <img
        src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_09_PM_i95qhf.png"
        alt="Experiences"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DEPTH */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end">

        <div className="w-full max-w-[1280px] mx-auto px-6 pb-14">

          {/* SMALL LABEL */}
          <p className="text-[12px] tracking-[0.35em] text-white/70 uppercase">
            Experiences
          </p>

          {/* BIG HEADING */}
          <h1 className="mt-6 font-[Canela] text-white text-[48px] md:text-[92px] leading-[0.95] tracking-tight max-w-[900px]">

            Days That Don’t
            <br />
            Repeat

          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 max-w-[520px] text-[15px] text-white/80 leading-relaxed">
            Each moment unfolds differently — shaped by the sea, the light,
            and the rhythm you choose to follow.
          </p>

        </div>

      </div>

    </section>
  );
}

function ExperiencesIntro() {
  return (
    <section className="bg-[#F5F2ED] py-[140px] px-6">

      <div className="max-w-[1200px] mx-auto">

        {/* TOP */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <p className="text-[12px] tracking-[0.3em] text-[#6B7280] uppercase">
              Experiences
            </p>

            <h2 className="mt-6 font-[Canela] text-[36px] md:text-[52px] leading-[1.1] text-[#0F172A]">
              Memories of
              <br />
              A Lifetime
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-[520px]">

            <p className="text-[15px] text-[#0F172A]/75 leading-relaxed">
              No two days unfold the same. The rhythm shifts with the sea —
              from quiet mornings in open water to long afternoons drifting
              between islands, and evenings that settle into stillness.
            </p>

          </div>

        </div>

        {/* IMAGES (ASYMMETRIC — INI KUNCI) */}
        <div className="mt-20 grid md:grid-cols-[1.3fr_0.7fr] gap-8 items-start">

          {/* BIG IMAGE (LEADER) */}
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_18_PM_dihjfs.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-8">

            <div className="relative w-full h-[200px] md:h-[240px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_24_PM_lzlhwx.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative w-full h-[200px] md:h-[240px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_02_PM_lplfu7.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function ExperienceModes() {
  return (
    <section className="bg-[#F5F2ED] py-[140px] px-6">

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT — IMAGE */}
        <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">

          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_24_PM_lzlhwx.png"
            alt="Experience"
            className="w-full h-full object-cover"
          />

          {/* subtle depth */}
          <div className="absolute inset-0 bg-black/5" />

          {/* arrows (refined, smaller, less loud) */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur flex items-center justify-center text-[#0F172A] text-sm hover:bg-white transition">
            ←
          </button>

          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 backdrop-blur flex items-center justify-center text-[#0F172A] text-sm hover:bg-white transition">
            →
          </button>

        </div>

        {/* RIGHT — CONTENT */}
        <div className="max-w-[480px]">

          <h2 className="font-[Canela] text-[36px] md:text-[48px] leading-[1.1] text-[#0F172A]">
            Things to Do
          </h2>

          {/* tabs (tightened, less contrast) */}
          <div className="mt-6 flex items-center gap-6 text-[12px] tracking-[0.25em] uppercase border-b border-[#0F172A]/10 pb-3">

            <span className="text-[#0F172A] border-b border-[#0F172A] pb-3 -mb-3">
              Land
            </span>

            <span className="text-[#0F172A]/40">Sand</span>
            <span className="text-[#0F172A]/40">Water</span>
            <span className="text-[#0F172A]/40">Massage</span>

          </div>

          {/* paragraph (dipadatkan spacing) */}
          <p className="mt-6 text-[15px] text-[#0F172A]/75 leading-relaxed">
            Let your journey ashore awaken your senses. Wander through lush
            landscapes, encounter native wildlife, and take in sweeping views
            that few ever reach.
          </p>

          {/* list (lebih subtle, gak dominan) */}
          <ul className="mt-6 space-y-3 text-[14px] text-[#0F172A]/65">
            <li>• Guided hikes and nature walks</li>
            <li>• Trekking to scenic viewpoints</li>
            <li>• Birdwatching in remote habitats</li>
            <li>• Cultural or ecological land excursions</li>
          </ul>

          {/* closing line */}
          <p className="mt-8 text-[14px] text-[#0F172A]/70 italic">
            Let our team arrange land experiences tailored to you.
          </p>

        </div>

      </div>

    </section>
  );
}

function Culinary() {
  return (
    <section className="bg-[#E3E3E0] py-[140px] px-6">

      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — IMAGE */}
        <div className="relative w-full h-[520px] md:h-[620px] overflow-hidden">

          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_02_PM_lplfu7.png"
            alt="Chef"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

        </div>

        {/* RIGHT — CONTENT */}
        <div className="max-w-[520px]">

          <p className="text-[11px] tracking-[0.35em] text-[#0F172A]/40 uppercase">
            Profile of Chef Wayan
          </p>

          <h2 className="mt-6 font-[Canela] text-[40px] md:text-[52px] leading-[1.1] text-[#0F172A]">
            Behind The Dishes
          </h2>

          <p className="mt-6 text-[15px] text-[#0F172A]/70 leading-relaxed">
            From sunrise to evening, each dish aboard Sanctuary is created
            to order by Balinese Executive Chef Roniawan. Menus evolve
            around guest desires, with every plate reflecting precision,
            intention, and a deep understanding of taste.
          </p>

          <div className="mt-10 w-full h-px bg-[#0F172A]/10" />

          <div className="mt-10 grid grid-cols-[1fr_140px] gap-6 items-end">

            <div>

              <p className="text-[11px] tracking-[0.3em] text-[#0F172A]/40 uppercase">
                Exclusive Menu By
              </p>

              <h3 className="mt-4 font-[Canela] text-[24px] md:text-[28px] text-[#0F172A] leading-tight">
                Chef Roniawan Putra
              </h3>

              <button className="mt-6 text-[12px] tracking-[0.25em] uppercase text-[#0F172A] border-b border-[#0F172A]/30 hover:border-[#0F172A] transition">
                Learn More →
              </button>

            </div>

            <div className="w-full h-[120px] overflow-hidden">

              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_02_PM_lplfu7.png"
                alt="Detail"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

