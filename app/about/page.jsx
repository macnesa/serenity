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
      <WhySerenityExists/>
      <PhinisiSection/>
      <ThePeople/>
      <ExperienceSummary/>
      <FinalCTA/>      
      <Footer/> 
    </main>
  )
}


function Hero() {
  return (
    <section className="relative w-full h-[92vh] min-h-[700px] flex items-center justify-center overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop"
        alt="Phinisi yacht deck"
        className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
      />

      {/* ================= COLOR DEPTH ================= */}
      <div className="absolute inset-0 bg-[#2D3C68]/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D3C68]/20 via-transparent to-[#2D3C68]/80" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center px-6 max-w-[720px]">

        {/* MICRO */}
        <div className="mb-6 text-[11px] tracking-[0.32em] text-white/60 uppercase">
          About Serenity
        </div>

        {/* HEADLINE */}
        <h1 className="font-[Gambarino] text-[46px] md:text-[72px] leading-[1.04] tracking-[-0.025em] text-white">
          A private yacht,
          <br />
          fully yours
        </h1>

        {/* SUB */}
        <p className="mt-6 text-[15px] text-white/75 max-w-[500px] mx-auto leading-[1.7]">
          One group at a time, with everything on board arranged around how you move, rest, and spend your days.
        </p>

      </div>

      {/* ================= BOTTOM TRANSITION ================= */}
      <div className="absolute bottom-0 left-0 w-full h-[160px] bg-gradient-to-b from-transparent to-[#2D3C68]" />

    </section>
  )
}


function WhySerenityExists() {
  return (
    <section className="relative w-full bg-[#F4F5F2] py-[220px] px-6 overflow-hidden">

      {/* ================= BASE COLOR FADE ================= */}
      <div className="why-gradient-base absolute top-0 left-0 w-full h-[220px] pointer-events-none" />

      {/* ================= DIFFUSION LAYER ================= */}
      <div className="why-gradient-diffuse absolute top-0 left-0 w-full h-[260px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative">

        {/* ================= BLOCK 1 ================= */}
        <div className="max-w-[520px]">
          <p className="text-[26px] md:text-[32px] leading-[1.4] text-[#1A1A1A] font-[Gambarino]">
            Most trips today are built around schedules.
          </p>
        </div>

        {/* ================= BLOCK 2 ================= */}
        <div className="mt-20 md:mt-[-10px] md:ml-auto max-w-[440px]">
          <p className="text-[20px] md:text-[24px] leading-[1.6] text-[#2A2A2A]">
            Fixed routes, fixed stops, and days that feel planned before they begin.
          </p>
        </div>

        {/* ================= BLOCK 3 ================= */}
        <div className="mt-24 max-w-[460px]">
          <p className="text-[20px] md:text-[24px] leading-[1.6] text-[#2A2A2A]">
            You move through places, but rarely get to live inside them.
          </p>
        </div>

        {/* ================= BLOCK 4 ================= */}
        <div className="mt-28 md:ml-auto max-w-[520px]">
          <p className="text-[28px] md:text-[36px] leading-[1.3] text-[#2D3C68] font-[Gambarino]">
            Serenity exists to change that.
          </p>
        </div>

      </div>

      {/* ================= PURE CSS ================= */}
      <style jsx>{`
        /* BASE GRADIENT (COLOR FALL) */
        .why-gradient-base {
          background: linear-gradient(
            to bottom,
            rgba(45, 60, 104, 0.95) 0%,
            rgba(45, 60, 104, 0.85) 15%,
            rgba(45, 60, 104, 0.65) 35%,
            rgba(45, 60, 104, 0.4) 55%,
            rgba(45, 60, 104, 0.18) 75%,
            rgba(45, 60, 104, 0.05) 90%,
            rgba(45, 60, 104, 0) 100%
          );
        }

        /* DIFFUSION LAYER (THIS IS THE MAGIC) */
        .why-gradient-diffuse {
          background: radial-gradient(
            120% 80% at 50% 0%,
            rgba(45, 60, 104, 0.35) 0%,
            rgba(45, 60, 104, 0.2) 40%,
            rgba(45, 60, 104, 0.08) 65%,
            rgba(45, 60, 104, 0.02) 80%,
            rgba(45, 60, 104, 0) 100%
          );
          filter: blur(28px);
          transform: translateY(-20px);
        }
      `}</style>

    </section>
  )
}

function PhinisiSection() {
  return (
    <section className="relative w-full bg-[#F4F5F2] py-[220px] px-6 overflow-hidden">

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-24 items-center">

        {/* ================= LEFT (CONTENT) ================= */}
        <div className="max-w-[520px]">

          {/* MICRO */}
          <p className="text-[11px] tracking-[0.35em] text-[#6A6A6A] uppercase">
            Phinisi
          </p>

          {/* HEADLINE */}
          <h2 className="mt-6 font-[Gambarino] text-[44px] md:text-[60px] leading-[1.05] text-[#2D3C68]">
            Not built like a modern yacht
          </h2>

          {/* CORE */}
          <p className="mt-8 text-[18px] text-[#1A1A1A] leading-[1.7]">
            Wood, open space, and constant exposure to air, light, and movement.
          </p>

          {/* DATA */}
          <div className="mt-10 space-y-6 text-[16px] text-[#2A2A2A]">

            <p>
              You’re not inside sealed rooms — most of the day happens out on deck, with nothing separating you from the surroundings.
            </p>

            <p>
              The structure moves with the water, not against it, making the entire space feel alive rather than fixed.
            </p>

            <p>
              Everything is arranged horizontally, so movement across the boat feels natural, without levels cutting the flow.
            </p>

          </div>

        </div>

        {/* ================= RIGHT (VISUAL SYSTEM) ================= */}
        <div className="relative w-full h-full">

          {/* MAIN IMAGE */}
          <div className="relative w-[85%] aspect-[4/5] overflow-hidden ml-auto">

            <img
              src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1600&auto=format&fit=crop"
              alt="People relaxing on phinisi deck"
              className="w-full h-full object-cover scale-[1.04]"
            />

            {/* DEPTH */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3C68]/25 to-transparent" />
          </div>

          {/* SECONDARY IMAGE (OFFSET) */}
          <div className="absolute -left-6 bottom-[-40px] w-[45%] aspect-[3/4] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
              alt="Phinisi wood detail"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

function ThePeople() {
  return (
    <section className="relative w-full bg-[#F4F5F2] py-[220px] px-6 overflow-hidden">

      <div className="max-w-[1200px] mx-auto">

        {/* ================= HEADER ================= */}
        <div className="max-w-[520px] mb-20">
          <p className="text-[11px] tracking-[0.35em] text-[#6A6A6A] uppercase">
            The People
          </p>

          <h2 className="mt-6 font-[Gambarino] text-[44px] md:text-[60px] leading-[1.05] text-[#2D3C68]">
            Always there,
            <br />
            never in the way
          </h2>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 gap-24 items-start">

          {/* ================= LEFT (MAIN IMAGE) ================= */}
          <div className="relative w-full">

            <div className="relative w-[85%] aspect-[4/5] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=1600&auto=format&fit=crop"
                alt="Crew serving food"
                className="w-full h-full object-cover scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3C68]/20 to-transparent" />
            </div>

            {/* SECOND IMAGE (OFFSET TOP) */}
            <div className="absolute -top-10 right-0 w-[40%] aspect-[3/4] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
                alt="Chef preparing meal"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

          {/* ================= RIGHT (CONTENT + IMAGE) ================= */}
          <div className="max-w-[480px] md:ml-auto">

            {/* TEXT */}
            <div className="space-y-6 text-[16px] text-[#2A2A2A] leading-[1.7]">

              <p>
                A full crew is on board throughout the journey, handling navigation, meals, and everything in between.
              </p>

              <p>
                The captain manages the route and conditions, adjusting plans as needed without disrupting the flow.
              </p>

              <p>
                Meals are prepared fresh during the day, while the rest of the team keeps the space clean, ready, and running.
              </p>

            </div>

            {/* THIRD IMAGE (LOWER DETAIL) */}
            <div className="mt-16 w-[70%] aspect-[4/5] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

              <img
                src="https://images.unsplash.com/photo-1529692236671-f1dc5c4d1d53?q=80&w=1200&auto=format&fit=crop"
                alt="Crew assisting guest"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
 
function ExperienceSummary() {
  return (
    <section className="relative w-full bg-[#F4F5F2] py-[180px] overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* ================= IMAGE ================= */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2000&auto=format&fit=crop"
            alt="Ocean lifestyle on yacht"
            className="w-full h-full object-cover scale-[1.03]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D3C68]/70 via-[#2D3C68]/30 to-transparent" />

          {/* TEXT ON IMAGE */}
          <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-[600px]">

            <p className="text-[11px] tracking-[0.35em] text-white/60 uppercase">
              On Board
            </p>

            <h2 className="mt-4 font-[Gambarino] text-[36px] md:text-[56px] leading-[1.1] text-white">
              This is how it actually feels
            </h2>

          </div>

        </div>

        {/* ================= ACTION STRIP ================= */}
        <div className="mt-20 flex flex-col items-center text-center">

          <p className="text-[18px] text-[#2D3C68] font-[Gambarino]">
            Start planning your time on board
          </p>

          <button className="mt-6 text-[13px] tracking-[0.18em] uppercase text-[#2D3C68]/80 border-b border-[#2D3C68]/40 hover:border-[#2D3C68] hover:text-[#2D3C68] transition">
            Explore Options →
          </button>

        </div>

      </div>

    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative w-full bg-[#F4F5F2] py-[260px] px-6 overflow-hidden">

      <div className="max-w-[900px] mx-auto text-center">

        {/* ================= HEADLINE ================= */}
        <h2 className="font-[Gambarino] text-[42px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[#2D3C68]">
          Plan your time on board
        </h2>

        {/* ================= SUBTEXT (OPTIONAL, LIGHT) ================= */}
        <p className="mt-6 text-[16px] text-[#5C5C5C] leading-[1.7] max-w-[520px] mx-auto">
          Share your dates, route, and preferences — we’ll shape the journey around you.
        </p>

        {/* ================= CTA ================= */}
        <div className="mt-12 flex justify-center">
          <button className="px-10 py-4 rounded-full border border-[#2D3C68]/60 text-[13px] tracking-[0.18em] uppercase text-[#2D3C68] transition hover:bg-[#2D3C68] hover:text-[#F4F5F2]">
            Request Your Journey
          </button>
        </div>

      </div>

    </section>
  )
}

