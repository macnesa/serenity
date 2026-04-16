"use client"

import { useEffect, useRef, useState } from "react"
import { gsap, ScrollTrigger } from "../lib/gsap"
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import Footer from '../components/Footer'
 
/* =========================
   PAGE WRAPPER
========================= */
export default function Home() {
  return (
    <main className="bg-[#0a0f14] text-white overflow-hidden">
      <Hero />
      <Introduction/>
      <QuickContext/>
      <Experience/>
      {/* <Activities/> */}
      <Destinations/>
      <Yacht/>
      {/* <Included/> */}
      {/* <OnBoard/> */}
      <About/>
      {/* <JourneyFlowSection/> */}
      {/* <YachtSection/> */}
      {/* <GalleryStrip/> */}
      {/* <Testimonials/> */}
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

      {/* BACKGROUND */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="https://res.cloudinary.com/dombq6plz/image/upload/v1776086743/Walking_towards_the_phinisi_bow_1_jasshx.png"
          alt="Phinisi yacht sailing in Indonesia"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#2D3C68]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D3C68]/40 via-[#2D3C68]/15 to-transparent" />
      </div>

      {/* CONTENT */}
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

          {/* MICRO CONTEXT */}
          <div className="mb-6 text-[11px] md:text-[12px] tracking-[0.28em] text-[#F4F5F2]/75">
            INDONESIAN PHINISI YACHT
          </div>

          {/* HEADLINE */}
          <h1 className="font-[Gambarino] text-[48px] md:text-[74px] lg:text-[88px] leading-[1.02] tracking-[-0.035em] text-[#F4F5F2]">
            <span className="block opacity-90">
              Explore Indonesia
            </span>
            <span className="block">
              by Sea
            </span>
          </h1>

          {/* SUBCOPY */}
          <p className="mt-5 text-[15px] md:text-[17px] text-[#F4F5F2]/90 max-w-[520px] mx-auto leading-relaxed">
            Sail through Raja Ampat and Komodo with up to 12 guests on a handcrafted phinisi yacht.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <button className="group px-8 py-3 rounded-full border border-[#F4F5F2]/70 text-[13px] tracking-[0.02em] text-[#F4F5F2] transition-all duration-500 hover:bg-[#F4F5F2] hover:text-[#2D3C68] hover:border-[#F4F5F2]">
              <span className="inline-block transition-transform duration-500 group-hover:translate-y-[-2px]">
                View Journeys →
              </span>
            </button>
          </div>

        </motion.div>
      </div>

    </section>
  );
}

function Introduction() {
  return (
    <section
      className="relative w-full bg-[#F4F5F2] py-32 px-6 overflow-hidden"
      aria-label="Introduction"
    >
       {/* ================= TOP TRANSITION ================= */}
       <div className="absolute top-0 left-0 w-full h-[140px] bg-gradient-to-b from-[#2D3C68]/15 to-transparent pointer-events-none" />
       
      <div className="max-w-5xl mx-auto relative text-center">

        {/* LABEL */}
        <div className="text-[10px] tracking-[0.4em] text-[#2D3C68]/60 mb-5 uppercase">
          Experience
        </div>

        {/* HEADLINE */}
        <h2 className="font-[Gambarino]  text-[48px] md:text-[64px] leading-[1.06] tracking-[-0.025em] text-[#2D3C68] max-w-[500px] mx-auto">
          A way of living at your pace
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-[#2D3C68]/70 max-w-[400px] mx-auto text-[13px] leading-[1.6]">
          Move with the rhythm of the ocean. Wake slowly, dive freely,
          gather without effort. Serenity is not something you visit —
          it is something you step into.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <button
            type="button"
            className="group px-6 py-3 text-[12px] tracking-[0.15em] border border-[#2D3C68]/30 rounded-full text-[#2D3C68] transition-all duration-500 hover:bg-[#2D3C68] hover:text-white hover:border-[#2D3C68]"
          >
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-[2px]">
              Discover the Experience →
            </span>
          </button>
        </div>

        {/* CENTER IMAGE */}
        <div className="mt-20 max-w-[340px] mx-auto">
          <div className="aspect-[4/5] overflow-hidden relative">
            <Image
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068967/40_oxbvdi.webp"
              alt="Life on board Serenity yacht"
              fill
              sizes="(max-width: 768px) 100vw, 340px"
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>

      {/* ================= ORBIT (NON-INTERACTIVE) ================= */}

      {/* LEFT */}
      <div className="pointer-events-none absolute left-[12%] top-[28%] w-[180px] hidden lg:block">
        <div className="aspect-[4/5] overflow-hidden relative">
          <Image
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068973/49_ph3xr3.webp"
            alt="Open sea moment"
            fill
            sizes="180px"
            className="object-cover"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="pointer-events-none absolute right-[10%] top-[36%] w-[200px] hidden lg:block">
        <div className="aspect-[4/5] overflow-hidden relative">
          <Image
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068967/41_gbpo3o.webp"
            alt="Interior space on board"
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>
      </div>

      {/* RIGHT LOWER */}
      <div className="pointer-events-none absolute right-[22%] bottom-[20%] w-[160px] hidden lg:block">
        <div className="aspect-[4/5] overflow-hidden relative">
          <Image
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068965/37_rlznw3.webp"
            alt="Ocean environment"
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      </div> 
    </section>
  );
}



function QuickContext() {
  return (
    <section className="w-full bg-[#2D3C68] py-14 md:py-20">

      <div className="max-w-[1100px] mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-0 text-center">

          <div>
            <div className="text-[28px] md:text-[36px] font-[Gambarino] text-white">
              12
            </div>
            <div className="mt-2 text-[12px] tracking-[0.2em] text-white/70">
              GUESTS
            </div>
          </div>

          <div>
            <div className="text-[28px] md:text-[36px] font-[Gambarino] text-white">
              4
            </div>
            <div className="mt-2 text-[12px] tracking-[0.2em] text-white/70">
              CABINS
            </div>
          </div>

          <div>
            <div className="text-[28px] md:text-[36px] font-[Gambarino] text-white">
              10
            </div>
            <div className="mt-2 text-[12px] tracking-[0.2em] text-white/70">
              CREW
            </div>
          </div>

          <div>
            <div className="text-[28px] md:text-[36px] font-[Gambarino] text-white">
              Phinisi
            </div>
            <div className="mt-2 text-[12px] tracking-[0.2em] text-white/70">
              INDONESIA
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
 

function Experience() {
  return (
    <section className="relative bg-[#F4F5F2] pt-[180px] pb-[100px] px-6 overflow-hidden">

      <div className="max-w-[980px] mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-[720px] mx-auto mb-24">

          <p className="text-[11px] tracking-[0.35em] text-[#6A6A6A] uppercase">
            On Board
          </p>

          <h2 className="mt-6 font-[Gambarino] text-[40px] sm:text-[56px] leading-[1.1] tracking-[-0.01em] text-[#2D3C68]">
            Life on board, as it happens
          </h2>

          <p className="mt-7 text-[16px] text-[#5C5C5C] leading-relaxed max-w-[560px] mx-auto">
            Days move between the deck, the water, and time in between. Nothing is fixed, but everything finds its place.
          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* ================= LEFT ================= */}
          <div className="flex justify-center">

            <div>

              {/* 4:5 FRAME (BIGGER) */}
              <div className="relative w-[420px] aspect-[4/5] overflow-hidden rounded-[2px]">
                <img
                  src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068973/49_ph3xr3.webp"
                  alt="Open deck"
                  className="w-full h-full object-cover object-[center_65%] scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              <div className="mt-9">
                <h3 className="font-[Gambarino] text-[27px] text-[#1A1A1A] leading-[1.2]">
                  Open Deck Living
                </h3>

                <p className="mt-4 text-[15px] text-[#5C5C5C] leading-relaxed max-w-[440px]">
                  Most of the day unfolds outside — between the sun, the sea, and conversations that stretch without a plan.
                </p>

                <div className="mt-6">
                  <button className="text-[13px] tracking-[0.12em] text-[#1A1A1A] border-b border-[#1A1A1A]/30 hover:border-[#1A1A1A] transition">
                    Explore deck →
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex justify-center md:mt-[80px]">

            <div>

              {/* 4:5 FRAME (BIGGER) */}
              <div className="relative w-[400px] aspect-[4/5] overflow-hidden rounded-[2px]">
                <img
                  src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068967/41_gbpo3o.webp"
                  alt="Private cabin"
                  className="w-full h-full object-cover object-[center_60%] scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              <div className="mt-9">
                <h3 className="font-[Gambarino] text-[27px] text-[#1A1A1A] leading-[1.2]">
                  Quiet When You Need It
                </h3>

                <p className="mt-4 text-[15px] text-[#5C5C5C] leading-relaxed max-w-[440px]">
                  When things slow down, private spaces offer a place to pause — simple, quiet, and your own.
                </p>

                <div className="mt-6">
                  <button className="text-[13px] tracking-[0.12em] text-[#1A1A1A] border-b border-[#1A1A1A]/30 hover:border-[#1A1A1A] transition">
                    View cabins →
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ================= PRIMARY CTA ================= */}
        <div className="mt-28 flex justify-center">
          <button className="text-[13px] tracking-[0.18em] uppercase text-[#1A1A1A]/80 border-b border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition">
            Step inside the yacht →
          </button>
        </div>

      </div>
    </section>
  );
}


function About() {
  return (
    <section className="bg-[#2D3C68] py-[90px] md:py-[110px] px-6 text-white">

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-14 md:gap-16 items-center">

        {/* ================= LEFT ================= */}
        <div>

          {/* LABEL */}
          <p className="text-[11px] tracking-[0.35em] text-white/50 uppercase">
            About
          </p>

          {/* TITLE */}
          <h2 className="mt-5 font-[Gambarino] text-[42px] md:text-[56px] leading-[1.15] max-w-[520px]">
            Life, Carried
            <br />
            by the Sea
          </h2>

          {/* TEXT BLOCK 1 */}
          <p className="mt-6 text-[15px] text-white/75 leading-[1.7] max-w-[520px]">
            Serenity is not about where you go. It’s about how you spend your time at sea. 
            Days move without a fixed structure, shifting naturally between water, rest, 
            and shared moments on board.
          </p>

          {/* TEXT BLOCK 2 */}
          <p className="mt-4 text-[15px] text-white/75 leading-[1.7] max-w-[520px]">
            You wake, swim, sit, eat, and talk without needing to follow a plan. 
            The boat becomes a space to live in, not just something that takes you somewhere. 
            Everything happens at a pace that feels natural, supported quietly by the crew and the environment around you.
          </p>

          {/* CTA */}
          <div className="mt-7">
            <button className="group text-[13px] tracking-[0.18em] uppercase text-white border-b border-white/30 hover:border-white transition">
              Explore Life On Board
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative h-[440px] md:h-[480px]">

          {/* MAIN — HUMAN MOMENT */}
          <div className="absolute top-0 right-0 w-[78%] h-[300px] md:h-[320px] overflow-hidden rounded-[4px]">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068969/43_fcprng.webp"
              className="w-full h-full object-cover"
            />
          </div>

          {/* SECOND — RELAXED */}
          <div className="absolute bottom-0 left-0 w-[52%] h-[180px] md:h-[200px] overflow-hidden rounded-[4px]">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/04_fqtqkn.webp"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ACCENT — DETAIL */}
          <div className="absolute bottom-[110px] md:bottom-[120px] right-[4%] w-[40%] h-[120px] md:h-[130px] overflow-hidden rounded-[4px]">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068892/01_oomiyy.webp"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  )
}

function ParallaxImage({ src, alt }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);

  return (
    <div ref={ref} className="relative w-full h-[420px] overflow-hidden rounded-[2px]">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover scale-[1.08]"
        />
      </motion.div>

      {/* subtle overlay */}
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
}


function Yacht() {
  return (
    <section className="relative w-full bg-[#F4F5F2] pt-[160px] pb-[160px] px-6 overflow-hidden">

      <div className="max-w-[1400px] mx-auto relative">

        {/* ===== HEADER ===== */}
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <p className="text-[11px] tracking-[0.35em] text-[#6A6A6A] uppercase">
            The Yacht
          </p>

          <h2 className="mt-6 font-[Gambarino] text-[56px] leading-[1.1] text-[#2D3C68]">
            Built for how you actually live
          </h2>

          <p className="mt-6 text-[15px] text-[#5C5C5C] leading-relaxed max-w-[480px] mx-auto">
            Not designed around luxury alone, but around how people move,
            gather, and share time at sea.
          </p>
        </div>

        {/* ===== CANVAS ===== */}
        <div className="relative h-[1400px]">

          {/* ===== CENTER YACHT ===== */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[-140px] bottom-0 flex items-center pointer-events-none z-20">
            <div className="relative w-[270px] h-[1150px]">
              <Image
                src="https://res.cloudinary.com/dombq6plz/image/upload/f_auto,q_auto,w_800/v1776164146/f69b0e9a-54d3-40b4-96dd-460d6b8dff97_1_jicqyu.png"
                alt="Top-down layout of Serenity phinisi yacht"
                fill
                sizes="(max-width: 768px) 100vw, 270px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* ===== LEFT TOP ===== */}
          <motion.div
            className="absolute left-[160px] top-[200px] w-[300px] group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/5] relative overflow-hidden bg-[#EDEBE7]">
              <Image
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068961/27_unvtvm.webp"
                alt="Shared dining space"
                fill
                sizes="300px"
                className="object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-[11px] uppercase text-white/70 mb-2">Living</p>
                <p className="text-[14px] text-white">5 cabins designed for shared living.</p>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT TOP ===== */}
          <motion.div className="absolute right-[120px] top-[320px] w-[280px] group">
            <div className="aspect-[4/5] relative overflow-hidden bg-[#EDEBE7]">
              <Image
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068973/49_ph3xr3.webp"
                alt="Open deck"
                fill
                sizes="280px"
                className="object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-5 text-right">
                <p className="text-[11px] uppercase text-white/70 mb-2">Social</p>
                <p className="text-[14px] text-white">Up to 12 guests.</p>
              </div>
            </div>
          </motion.div>

          {/* ===== LEFT BOTTOM ===== */}
          <motion.div className="absolute left-[100px] top-[820px] w-[320px] group">
            <div className="aspect-[4/5] relative overflow-hidden bg-[#EDEBE7]">
              <Image
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/07_iujxr6.webp"
                alt="Crew"
                fill
                sizes="320px"
                className="object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-[11px] uppercase text-white/70 mb-2">Crew</p>
                <p className="text-[14px] text-white">Quietly present.</p>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT BOTTOM ===== */}
          <motion.div className="absolute right-[180px] top-[1080px] w-[300px] group">
            <div className="aspect-[4/5] relative overflow-hidden bg-[#EDEBE7]">
              <Image
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/06_f2yr7e.webp"
                alt="Phinisi yacht"
                fill
                sizes="300px"
                className="object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-5 text-right">
                <p className="text-[11px] uppercase text-white/70 mb-2">Vessel</p>
                <p className="text-[14px] text-white">32-meter phinisi.</p>
              </div>
            </div>
          </motion.div>

        </div>

{/* ===== ACTION GROUP (OUTSIDE CANVAS = CORRECT) ===== */}
<div className="mt-[70px] flex justify-center">

  <div className="flex flex-col items-center gap-5">

    {/* PRIMARY — DECK PLAN */}
    <button className="group text-[14px] tracking-[0.18em] uppercase text-[#2D3C68] font-medium border-b border-[#2D3C68] pb-2 transition">
      View Deck Plan
      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>

    {/* SECONDARY — BROCHURE */}
    <button className="group text-[13px] tracking-[0.18em] uppercase text-[#2D3C68]/70 hover:text-[#2D3C68] transition">
      Download Brochure
      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>

    {/* TERTIARY — SPECS */}
    <button className="group text-[12px] tracking-[0.18em] uppercase text-[#2D3C68]/40 hover:text-[#2D3C68]/60 transition">
      View Specifications
      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>

  </div>

</div>

      </div>

    </section>
  )
}

function Activities() {
  return (
    <section className="relative w-full h-[110vh] overflow-hidden bg-[#F4F5F2]">

      {/* ===== MAIN SCENE ===== */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dombq6plz/image/upload/v1776152590/Phinisi_yacht_and_vibrant_coral_reef_1_i59pqn.png"
          alt="People jumping and swimming around yacht"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        {/* SIGNATURE BLUE */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D3C68]/55 via-[#2D3C68]/15 to-transparent" />
      </div>

      {/* ===== FLOATING ELEMENTS ===== */}

      {/* LEFT MID — WATER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-[12%] top-[45%] w-[240px]"
      >
        <div className="aspect-[4/5] relative overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.25)]">

          <Image
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_05_PM_nsfruu.png"
            alt="Swimming near the yacht"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#2D3C68]/10" />

          {/* LABEL */}
          <div className="absolute bottom-3 left-3 text-[11px] text-white/85 tracking-wide">
            In the water
          </div>
        </div>
      </motion.div>

      {/* RIGHT TOP — FLOAT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-[6%] top-[12%] w-[260px]"
      >
        <div className="aspect-[4/5] relative overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.25)]">

          <Image
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1775720934/Floating_in_turquoise_serenity_pu8zqp.png"
            alt="Floating near the boat"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#2D3C68]/8" />

          <div className="absolute bottom-3 left-3 text-[11px] text-white/85 tracking-wide">
            Just floating
          </div>
        </div>
      </motion.div>

      {/* RIGHT BOTTOM — DECK */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-[18%] bottom-[18%] w-[250px]"
      >
        <div className="aspect-[4/5] relative overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.25)]">

          <Image
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1775720934/Stepping_onto_the_sunlit_deck_wmgyua.png"
            alt="Relaxing on deck"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#2D3C68]/10" />

          <div className="absolute bottom-3 left-3 text-[11px] text-white/85 tracking-wide">
            On deck
          </div>
        </div>
      </motion.div>

      {/* ===== CONTENT (REPOSITIONED — CENTER LEFT) ===== */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12">
        <div className="max-w-[520px] text-white">

          <p className="text-[10px] tracking-[0.35em] text-white/60 uppercase">
            On Board
          </p>

          <h2 className="mt-4 font-[Gambarino] text-[44px] md:text-[64px] leading-[1.05]">
            What you end up doing
          </h2>

          <p className="mt-5 text-[15px] text-white/85 leading-relaxed">
            Jump into the water, swim around the boat, or just float nearby.

            Stay on deck when you feel like it, move around, or do nothing at all.

            Food comes out, people gather, then drift off again.

            There’s no set plan, but there’s always something happening.
          </p>

        </div>
      </div>

    </section>
  );
}


function Included() {
  return (
    <section className="relative w-full bg-[#F4F5F2] py-[180px] px-6">

      <div className="max-w-[1100px] mx-auto">

        {/* ===== HEADER ===== */}
        <div className="max-w-[520px] mb-24">
          <p className="text-[10px] tracking-[0.35em] text-[#2D3C68]/55 uppercase">
            What’s Included
          </p>

          <h2 className="mt-4 font-[Gambarino] text-[44px] md:text-[60px] leading-[1.1] text-[#2D3C68]">
            Everything you’ll actually use
          </h2>
        </div>

        {/* ===== PRIMARY (ANCHOR) ===== */}
        <div className="max-w-[620px] mb-28">
          <h3 className="font-[Gambarino] text-[32px] text-[#1A1A1A] leading-[1.2]">
            Meals on board
          </h3>

          <p className="mt-5 text-[17px] text-[#2D3C68]/75 leading-relaxed">
            Food comes out while people are already sitting around.
            You eat, stay a bit longer, then slowly drift away.
          </p>
        </div>

        {/* ===== SECONDARY GRID ===== */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-20 max-w-[900px]">

          <div>
            <h3 className="font-[Gambarino] text-[22px] text-[#1A1A1A]">
              Crew & navigation
            </h3>
            <p className="mt-3 text-[14px] text-[#2D3C68]/70 leading-relaxed">
              Routes, anchoring, and timing are handled quietly in the background.
            </p>
          </div>

          <div>
            <h3 className="font-[Gambarino] text-[22px] text-[#1A1A1A]">
              Water access
            </h3>
            <p className="mt-3 text-[14px] text-[#2D3C68]/70 leading-relaxed">
              You can get in anytime. No setup, no waiting.
            </p>
          </div>

          <div>
            <h3 className="font-[Gambarino] text-[22px] text-[#1A1A1A]">
              The space is yours
            </h3>
            <p className="mt-3 text-[14px] text-[#2D3C68]/70 leading-relaxed">
              Move between deck, cabins, and water without thinking twice.
            </p>
          </div>

          <div>
            <h3 className="font-[Gambarino] text-[22px] text-[#1A1A1A]">
              Flexible flow
            </h3>
            <p className="mt-3 text-[14px] text-[#2D3C68]/70 leading-relaxed">
              The day doesn’t follow a plan. It just unfolds.
            </p>
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

function Testimonials() {
  const testimonials = [
    {
      quote:
        "We thought we’d go out a lot, but most of the time we just stayed on the boat. No one really felt like leaving.",
      trip: "Bali & Nusa Penida",
      date: "May 2025",
      author: "A. Williams",
      country: "USA",
    },
    {
      quote:
        "At some point we stopped checking time. People were just moving around, eating, swimming, then sitting again.",
      trip: "Raja Ampat",
      date: "June 2025",
      author: "L. Moreau",
      country: "France",
    },
    {
      quote:
        "Nothing big happened, but that’s kind of why it worked. We just stayed, talked, and let the day pass.",
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
    <section className="relative bg-[#F4F5F2] py-[160px] px-6">

      <div className="max-w-[1100px] mx-auto">

        {/* ===== TOP LINE ===== */}
        <div className="flex items-center justify-between mb-16">

          <p className="text-[10px] tracking-[0.35em] text-[#2D3C68]/55 uppercase">
            Testimonials
          </p>

          <div className="text-[11px] text-[#2D3C68]/40 tracking-[0.25em]">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </div>

        </div>

        {/* ===== MAIN ===== */}
        <div className="max-w-[760px]">

          <p className="font-[Gambarino] text-[26px] md:text-[34px] leading-[1.45] text-[#1A1A1A]">
            “{current.quote}”
          </p>

          <div className="mt-10 text-[13px] text-[#2D3C68]/60">
            {current.trip} — {current.date}
          </div>

          <div className="mt-1 text-[13px] text-[#1A1A1A]">
            {current.author}, {current.country}
          </div>

        </div>

        {/* ===== NAV INLINE (NO FIXED BS) ===== */}
        <div className="mt-20 flex gap-6">

          <button
            onClick={prev}
            className="text-[13px] text-[#2D3C68]/40 hover:text-[#2D3C68] transition"
          >
            ← Previous
          </button>

          <button
            onClick={next}
            className="text-[13px] text-[#2D3C68]/40 hover:text-[#2D3C68] transition"
          >
            Next →
          </button>

        </div>

      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <img
        src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/06_f2yr7e.webp"
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
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068957/29_dychc2.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068955/21_pdqnqq.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068953/19_1_mwv93q.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/08_noz6qg.webp",
    "https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/05_ec1k9n.webp",
  ];

  return (
    <section className="relative py-[120px] px-6 bg-[#F4F5F2]">

      <div className="max-w-[1200px] mx-auto">

        {/* ===== HEADER ===== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          {/* LEFT — LABEL + HANDLE */}
          <div>
            <p className="text-[11px] tracking-[0.35em] text-[#2D3C68]/50 uppercase">
              Instagram
            </p>

            <a
              href="https://www.instagram.com/serenity.yacht/"
              target="_blank"
              className="mt-3 inline-block text-[16px] text-[#2D3C68] hover:opacity-70 transition"
            >
              @serenity.yacht
            </a>
          </div>

          {/* RIGHT — CTA */}
          <a
            href="https://www.instagram.com/serenity.yacht/"
            target="_blank"
            className="group text-[12px] tracking-[0.18em] uppercase text-[#2D3C68] border-b border-[#2D3C68]/30 hover:border-[#2D3C68] transition pb-[2px]"
          >
            Follow
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* ===== STRIP ===== */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar">

          {posts.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/serenity.yacht/"
              target="_blank"
              className="flex-shrink-0 w-[220px] md:w-[260px] aspect-[4/5] overflow-hidden"
            >
              <img
                src={src}
                className="w-full h-full object-cover"
              />
            </a>
          ))}

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

function YachtSection() {
  return (
    <section className="relative bg-[#F4F5F2] py-[200px] overflow-hidden">

      {/* ================= BACKGROUND DEPTH ================= */}
      <div className="absolute inset-0 pointer-events-none">

        {/* radial depth kiri */}
        <div className="absolute left-[-10%] top-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,0,0,0.06),transparent_70%)] blur-[80px]" />

        {/* radial depth kanan */}
        <div className="absolute right-[-10%] bottom-[5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,0,0,0.06),transparent_70%)] blur-[80px]" />

        {/* subtle noise */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,#000,transparent_60%)]" />
        </div>

      </div>

      {/* ================= HEADER ================= */}
      <div className="relative z-10 text-center mb-[160px] px-6">

        <p className="text-[11px] tracking-[0.35em] text-[#6A6A6A] uppercase">
          Spaces
        </p>

        <h2 className="mt-5 font-[Gambarino] text-[56px] md:text-[68px] leading-[1.05] text-[#1A1A1A]">
          Life Across the Yacht
        </h2>

        <p className="mt-6 max-w-[620px] mx-auto text-[15px] text-[#5C5C5C] leading-[1.75]">
          Movement flows naturally across the yacht, from open areas exposed to the sea,
          to shared spaces shaped by daily rhythm, and quieter sections designed for rest.
        </p>

      </div>

      {/* ================= MAIN ================= */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6">

        {/* ================= GRID STRUCTURE ================= */}
        <div className="grid grid-cols-12 gap-10 items-center">

          {/* ================= LEFT ================= */}
          <div className="col-span-3 hidden md:block">

            <div className="space-y-20">

              <div>
                <p className="text-[12px] tracking-[0.25em] text-[#2D3C68]/40 uppercase">
                  01
                </p>
                <p className="mt-3 text-[14px] text-[#2D3C68]/70 leading-[1.7]">
                  Open deck facing directly into wind and horizon.
                </p>
              </div>

              <div>
                <p className="text-[12px] tracking-[0.25em] text-[#2D3C68]/40 uppercase">
                  02
                </p>
                <p className="mt-3 text-[14px] text-[#2D3C68]/70 leading-[1.7]">
                  Lounge areas offering shaded and slower movement.
                </p>
              </div>

              {/* decorative line */}
              <div className="w-[1px] h-[80px] bg-[#2D3C68]/10 mx-auto" />

              <div className="text-[11px] text-[#2D3C68]/30 uppercase tracking-[0.3em]">
                Flow
              </div>

            </div>

          </div>

          {/* ================= CENTER ================= */}
          <div className="col-span-12 md:col-span-6 flex justify-center">

            <div className="relative w-[420px] md:w-[460px]">

              {/* glow belakang yacht */}
              <div className="absolute inset-0 blur-[60px] opacity-[0.2] bg-[radial-gradient(circle,rgba(45,60,104,0.15),transparent_70%)]" />

              {/* YACHT */}
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1776164146/f69b0e9a-54d3-40b4-96dd-460d6b8dff97_1_jicqyu.png"
                className="relative w-full h-auto block z-10"
              />

              {/* shadow bawah */}
              <div className="absolute inset-x-0 bottom-[-35px] h-[70px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.18),transparent_70%)] blur-[25px]" />

              {/* thin frame subtle */}
              <div className="absolute inset-0 border border-[#000]/5 rounded-[6px]" />

            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="col-span-3 hidden md:block text-right">

            <div className="space-y-20">

              <div>
                <p className="text-[12px] tracking-[0.25em] text-[#2D3C68]/40 uppercase">
                  03
                </p>
                <p className="mt-3 text-[14px] text-[#2D3C68]/70 leading-[1.7]">
                  Dining space centered around shared time and rhythm.
                </p>
              </div>

              <div>
                <p className="text-[12px] tracking-[0.25em] text-[#2D3C68]/40 uppercase">
                  04
                </p>
                <p className="mt-3 text-[14px] text-[#2D3C68]/70 leading-[1.7]">
                  Private cabins placed deeper for rest and separation.
                </p>
              </div>

              {/* decorative line */}
              <div className="w-[1px] h-[80px] bg-[#2D3C68]/10 ml-auto" />

              <div className="text-[11px] text-[#2D3C68]/30 uppercase tracking-[0.3em]">
                Depth
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function JourneyFlowSection() {
  const [active, setActive] = useState(0);

  const phases = [
    {
      label: "Morning",
      title: "The day begins quietly",
      desc: "Soft light enters the space. Nothing moves fast.",
      overlay: "bg-yellow-200/20"
    },
    {
      label: "Midday",
      title: "Everything opens",
      desc: "The yacht breathes with the ocean. Movement, light, energy.",
      overlay: "bg-blue-200/20"
    },
    {
      label: "Evening",
      title: "Moments gather",
      desc: "Warmth builds. People come together without structure.",
      overlay: "bg-orange-300/20"
    },
    {
      label: "Night",
      title: "Silence returns",
      desc: "Everything slows. Only the sea remains.",
      overlay: "bg-black/40"
    }
  ];

  return (
    <section className="bg-[#F4F5F2] py-[160px] px-6 md:px-12">

      {/* HEADER */}
      <div className="max-w-[900px] mx-auto text-center mb-[100px]">
        <p className="text-[11px] tracking-[0.4em] text-[#6A6A6A] uppercase">
          Journey Flow
        </p>
        <h2 className="mt-6 font-[Gambarino] text-[48px] md:text-[68px] leading-[1.05] text-[#1A1A1A]">
          One Space, Changing Time
        </h2>
      </div>

      {/* MAIN */}
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-[60px] items-center">

        {/* LEFT — CONTROL */}
        <div className="flex flex-col gap-6">
          {phases.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left transition ${
                active === i ? "opacity-100" : "opacity-40"
              }`}
            >
              <p className="text-[11px] tracking-[0.3em] uppercase mb-2">
                {p.label}
              </p>
              <h3 className="font-[Gambarino] text-[28px] md:text-[34px]">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] text-[#6A6A6A] leading-[1.6] max-w-[400px]">
                {p.desc}
              </p>
            </button>
          ))}
        </div>

        {/* RIGHT — YACHT */}
        <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[8px]">

          {/* BASE IMAGE */}
          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1776164146/f69b0e9a-54d3-40b4-96dd-460d6b8dff97_1_jicqyu.png"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAYS */}
          {phases.map((p, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition duration-700 ${
                active === i ? "opacity-100" : "opacity-0"
              } ${p.overlay}`}
            />
          ))}

          {/* GRAIN */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-[length:3px_3px]" />
          </div>
        </div>

      </div>

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
  const [prevIndex, setPrevIndex] = useState(0);

  const data = [
    {
      place: "Raja Ampat",
      activity: "You slip in",
      desc: `Cold at first. It reaches your chest before your breath settles.
You come back up, look around, take it in for a second.
Then you go again, like you’re starting to understand it.`,
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1776152590/Phinisi_yacht_and_vibrant_coral_reef_1_i59pqn.png",
    },
    {
      place: "Komodo Island",
      activity: "You walk slow",
      desc: `The ground feels dry, the air barely moves.
You don’t think much, you just keep walking.
There’s no pressure to get anywhere, so you let the place set the pace.`,
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1776152688/Couple_strolling_by_a_traditional_phinisi_1_e1alaw.png",
    },
    {
      place: "Banda Neira",
      activity: "You stay a while",
      desc: `You sit longer than you meant to.
Nothing interrupts, nothing pushes you forward.
Time stretches just enough for you to forget you were tracking it.`,
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1775031031/ChatGPT_Image_Apr_1_2026_03_08_09_PM_i95qhf.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % data.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [index]);

  const current = data[index];
  const prev = data[prevIndex];

  return (
    <section className="relative w-full bg-[#F4F5F2]">

      {/* TOP CONTEXT */}
      <div className="max-w-[640px] mx-auto px-6 text-center pt-5 pb-6">
        <p className="text-[11px] md:text-[12px] leading-relaxed text-[#2D3C68]/60">
          Each journey moves across different parts of the Indonesian archipelago, from reef systems and small islands to open stretches of water. There is no fixed route — the direction follows sea conditions, local knowledge, and the pace of the group on board.
        </p>
      </div>

      {/* FRAME */}
      <div className="relative w-full h-[100vh] overflow-hidden">

        {/* PREVIOUS */}
        <img
          key={`prev-${prevIndex}`}
          src={prev.image}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{
            animation: "exit 2400ms cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        />

        {/* CURRENT */}
        <img
          key={`current-${index}`}
          src={current.image}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{
            animation:
              "enter 2400ms cubic-bezier(0.22,1,0.36,1) forwards, slowZoom 7000ms linear forwards",
          }}
        />

        {/* BLUR + GRADIENT */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(1px)",
              WebkitBackdropFilter: "blur(1px)",
              maskImage:
                "linear-gradient(to left, black 0%, black 30%, transparent 65%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 0%, black 30%, transparent 65%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to left,
                  rgba(244,245,242,0.85) 0%,
                  rgba(244,245,242,0.4) 40%,
                  rgba(244,245,242,0) 75%
                )
              `,
            }}
          />
        </div>

        {/* DEPTH ECHO (SMALLER) */}
        <div className="absolute bottom-[8%] right-[-8%] pointer-events-none select-none overflow-hidden">
          <h2 className="font-[Gambarino] text-[#2D3C68]/5 text-[14vw] leading-none tracking-[-0.05em] whitespace-nowrap text-right">
            {current.place}
          </h2>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-16">
          <div className="ml-auto max-w-[520px] text-right">

            {/* ACTIVITY (SMALLER) */}
            <p className="text-[12px] md:text-[13px] tracking-[0.08em] text-[#2D3C68]/65">
              {current.activity}
            </p>

            {/* TITLE (REDUCED) */}
            <h2 className="mt-2 font-[Gambarino] text-[42px] md:text-[58px] leading-[1.05] tracking-[-0.02em] text-[#2D3C68]">
              {current.place}
            </h2>

            {/* DESC (SLIGHTLY SMALLER) */}
            <p className="mt-3 max-w-[420px] ml-auto text-[14px] md:text-[15px] text-[#2D3C68]/80 leading-[1.7]">
              {current.desc}
            </p>

          </div>
        </div>

        {/* NAV */}
        <button
          onClick={() => {
            setPrevIndex(index);
            setIndex((prev) => (prev - 1 + data.length) % data.length);
          }}
          className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 text-[#2D3C68]/25 hover:text-[#2D3C68]/50 transition text-[16px]"
        >
          ←
        </button>

        <button
          onClick={() => {
            setPrevIndex(index);
            setIndex((prev) => (prev + 1) % data.length);
          }}
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 text-[#2D3C68]/25 hover:text-[#2D3C68]/50 transition text-[16px]"
        >
          →
        </button>

        <style jsx>{`
          @keyframes enter {
            from {
              opacity: 0;
              transform: scale(1.08) translateX(60px);
            }
            to {
              opacity: 1;
              transform: scale(1.02) translateX(0px);
            }
          }

          @keyframes exit {
            from {
              opacity: 1;
              transform: scale(1.02) translateX(0px);
            }
            to {
              opacity: 0;
              transform: scale(1.1) translateX(-60px);
            }
          }

          @keyframes slowZoom {
            from {
              transform: scale(1.02);
            }
            to {
              transform: scale(1.08);
            }
          }
        `}</style>

      </div>
    </section>
  );
}
 

function YachtDua() {
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
 