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
      <About/>
      <Experience/>
      {/* <Identity/> */}
      {/* <Spaces/> */}
      <Cabins/>
      {/* <LivingSpaces/> */}
      <DeckAndSpecs/>
      {/* <Closing/> */}
      <Gallery/>
      <Reservation/>
      <Footer/>
    </main>
  )
}


function Hero() {
  return (
    <section className="relative w-full bg-[#2D3C68] overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dombq6plz/image/upload/v1776870966/ChatGPT_Image_Apr_22_2026_10_15_17_PM_1_clrjp0.png"
          alt="Serenity yacht"
          className="w-full h-full object-cover scale-[1.05]"
        />
      </div>

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D3C68]/40 via-[#2D3C68]/60 to-[#2D3C68]/85" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[140px] pb-[120px]">

        <div className="max-w-[720px]">

          {/* MICRO CONTEXT */}
          <div className="mb-6 text-[11px] tracking-[0.28em] text-[#F4F5F2]/70">
            THE YACHT
          </div>

          {/* HEADLINE */}
          <h1 className="font-[Gambarino] text-[44px] md:text-[64px] leading-[1.08] tracking-[-0.03em] text-[#F4F5F2]">
            Built Around
            <br />
            How You Live
          </h1>

          {/* SUBCOPY */}
          <p className="mt-6 text-[15px] text-[#F4F5F2]/80 max-w-[520px] mx-auto leading-[1.7]">
            Not designed as a vessel alone, but as a space where movement,
            rest, and shared time naturally find their place.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <button className="px-8 py-3 rounded-full border border-[#F4F5F2]/70 text-[13px] text-[#F4F5F2] hover:bg-[#F4F5F2] hover:text-[#2D3C68] transition">
              Explore Deck Plan →
            </button>
          </div>

        </div>

      </div>

    </section>
  );
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
    <section className="bg-[#F4F5F2] pt-[140px] pb-[140px] px-6 border-t border-[#2D3C68]/10">
      
      

      <div className="max-w-[1000px] mx-auto">

        {/* ================= BLOCK 1 ================= */}
        <div className="mb-[160px] grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div className="max-w-[520px]">
            <h2 className="font-[Gambarino]  text-[36px] md:text-[44px] leading-[1.2] text-[#2D3C68]">
              Life Happens
              <br />
              On the Open Deck
            </h2>

            <p className="mt-8 text-[15px] text-[#2D3C68]/80 leading-[1.7]">
              Meals stretch into conversations. People move between sun and shade
              without thinking about it. Everything stays open, shared, and effortless.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068961/27_unvtvm.webp"
              className="w-full h-[420px] object-cover"
            />

            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068973/49_ph3xr3.webp"
              className="absolute -bottom-12 -left-12 w-[220px] h-[260px] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />
          </div>

        </div>


        {/* ================= BLOCK 2 ================= */}
        <div className="mb-[160px] grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative h-[460px]">
            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/04_fqtqkn.webp"
              className="w-full h-full object-cover"
            />

            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/08_noz6qg.webp"
              className="absolute top-12 -right-12 w-[200px] h-[240px] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* TEXT */}
          <div className="max-w-[520px] md:ml-auto">
            <h2 className="font-[Gambarino]  text-[36px] md:text-[44px] leading-[1.2] text-[#2D3C68]">
              A Space Between
              <br />
              Outside and Inside
            </h2>

            <p className="mt-8 text-[15px] text-[#2D3C68]/80 leading-[1.7]">
              You come in without disconnecting. The sea stays visible, the air still moves.
              Conversations soften, but never fully stop.
            </p>
          </div>

        </div>

 


        {/* ================= CLOSING ================= */}
        <div className="text-center max-w-[720px] mx-auto mb-[48px]">

          <h2 className="font-[Gambarino] text-[44px] md:text-[52px] leading-[1.1] text-[#2D3C68]">
            Always Connected
            <br />
            to What Surrounds You
          </h2>

        </div>

        {/* FULL BLEED */}
        <div className="w-full h-[520px] overflow-hidden">
          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1776068893/06_f2yr7e.webp"
            className="w-full h-full object-cover"
          />
        </div>

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

function Cabins() {
  const cabins = [
    {
      name: "Forward Cabin",
      location: "Front Section",
      occupancy: "2 Guests",
      units: "1 Cabin",
      description:
        "Near the bow. Movement is most noticeable when lying down. Direct front light during daytime.",
      note: "For those who want to feel the sea more directly.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1776068960/34_nlkpdq.webp",
      detail:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1776068958/28_csbw7z.webp",
    },
    {
      name: "Mid Cabin",
      location: "Center of Vessel",
      occupancy: "2 Guests",
      units: "2 Cabins",
      description:
        "Center of the vessel. Least movement. Close to shared spaces without direct noise.",
      note: "Most stable option on board.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1776068959/26_uyo84o.webp",
      detail:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1776068966/39_t9ofoe.webp",
    },
    {
      name: "Lower Cabin",
      location: "Lower Deck",
      occupancy: "2 Guests",
      units: "1 Cabin",
      description:
        "Lower deck. More enclosed, less light. Quieter and less affected by surface activity.",
      note: "Best for uninterrupted rest.",
      image:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1776068955/23_1_gcmciz.webp",
      detail:
        "https://res.cloudinary.com/dombq6plz/image/upload/v1776068966/38_1_cx1idm.webp",
    },
  ];

  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, [active]);

  const current = cabins[active];

  return (
    <section className="relative bg-[#F4F5F2] py-[50px] px-6 overflow-hidden">
      <div className="max-w-[1000px] mx-auto">

        {/* HEADER */}
        <div className="mb-[60px] max-w-[520px]">

<p className="text-[11px] tracking-[0.32em] text-[#2D3C68]/40 uppercase">
  Cabins
</p>

<h2 className="mt-4 font-[Gambarino] text-[40px] md:text-[48px] leading-[1.1] text-[#2D3C68]">
  On Board Layout
</h2>

</div>

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-[60px] items-start">

          {/* LEFT */}
          <div>

            {/* SELECTOR */}
            <div className="mb-[24px] flex flex-wrap gap-6">
              {cabins.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="group relative"
                >
                  <span
                    className={`text-[12px] tracking-[0.2em] uppercase transition ${
                      active === i
                        ? "text-[#2D3C68]"
                        : "text-[#2D3C68]/40 group-hover:text-[#2D3C68]/70"
                    }`}
                  >
                    {item.name}
                  </span>

                  <div
                    className={`absolute left-0 -bottom-1 h-[1px] bg-[#2D3C68] transition-all duration-500 ${
                      active === i ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* IMAGE */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                key={current.image}
                src={current.image}
                alt=""
                className={`w-full h-full object-cover transition-all duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  animate ? "scale-[1.05] opacity-100" : "scale-[1.1] opacity-0"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* DETAIL — FIXED */}
              <div
                className={`absolute bottom-[16px] right-[16px] w-[180px] aspect-square overflow-hidden shadow-xl transition-all duration-[1200ms] ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[20px]"
                }`}
              >
                <img
                  src={current.detail}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative z-[2] pt-[20px] pl-[40px] max-w-[460px]">

            <div
              className={`mb-[24px] transition-all duration-[800ms] ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[20px]"
              }`}
            >
              <h3 className="font-serif text-[30px] text-[#2D3C68]">
                {current.name}
              </h3>

              <p className="mt-2 text-[10px] tracking-[0.32em] uppercase text-[#2D3C68]/50">
                {current.location}
              </p>
            </div>

            <div
              className={`mb-[24px] transition-all duration-[900ms] delay-[100ms] ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[20px]"
              }`}
            >
              <p className="text-[14px] leading-[1.7] text-[#2D3C68]/80">
                {current.description}
              </p>
            </div>

            <div
              className={`mb-[40px] transition-all duration-[900ms] delay-[200ms] ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[20px]"
              }`}
            >
              <p className="text-[13px] text-[#2D3C68]/60">
                {current.note}
              </p>
            </div>

            <div
              className={`space-y-3 mb-[48px] transition-all duration-[900ms] delay-[300ms] ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[20px]"
              }`}
            >
              <div className="flex justify-between border-b border-[#2D3C68]/10 pb-2">
                <span className="text-[10px] tracking-[0.3em] text-[#2D3C68]/40 uppercase">
                  Units
                </span>
                <span className="text-[15px] text-[#2D3C68]">
                  {current.units}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#2D3C68]/10 pb-2">
                <span className="text-[10px] tracking-[0.3em] text-[#2D3C68]/40 uppercase">
                  Occupancy
                </span>
                <span className="text-[15px] text-[#2D3C68]">
                  {current.occupancy}
                </span>
              </div>
            </div>

            <div
              className={`flex items-center gap-6 transition-all duration-[900ms] delay-[400ms] ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[20px]"
              }`}
            >
              <button className="px-10 py-3 rounded-full bg-[#2D3C68] text-white text-[12px] tracking-[0.16em] uppercase hover:bg-[#2D3C68]/90 transition">
                Reserve
              </button>

              <button className="text-[12px] tracking-[0.16em] uppercase text-[#2D3C68]/60 hover:text-[#2D3C68] transition">
                View Layout
              </button>
            </div>
          </div>
        </div>

        {/* BACKGROUND */}
        <div
          className="absolute right-[-20%] top-[10%] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(45,60,104,0.05), transparent 70%)",
            filter: "blur(140px)",
          }}
        />
      </div>
    </section>
  );
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

  const primary = [
    ["Length", "40.75 m"],
    ["Cabins", "4"],
    ["Crew", "10"],
  ];

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

  return (
    <section className="bg-[#F4F5F2] py-[160px] px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-[80px]">
          <p className="text-[11px] tracking-[0.35em] text-[#2D3C68]/40 uppercase">
            Vessel Overview
          </p>

          <h2 className="mt-6 font-serif text-[52px] md:text-[60px] leading-[1.15] text-[#2D3C68]">
            Understand the Vessel
          </h2>
        </div>

        {/* SELECTOR */}
        <div className="flex justify-center gap-10 mb-[60px]">
          {deckList.map((key) => (
            <button
              key={key}
              onClick={() => setDeck(key)}
              className="relative text-[11px] tracking-[0.3em] uppercase group"
            >
              <span
                className={`transition-all duration-500 ${
                  deck === key
                    ? "text-[#2D3C68]"
                    : "text-[#2D3C68]/30 group-hover:text-[#2D3C68]/60"
                }`}
              >
                {key}
              </span>

              <div
                className={`absolute left-0 -bottom-2 h-[1px] bg-[#2D3C68] transition-all duration-500 ${
                  deck === key ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* ================= IMAGE (FRAME + OUTER SHADOW) ================= */}
        <div className="relative w-full max-w-[1000px] mx-auto">

          {/* OUTER FRAME WITH SHADOW */}
          <div
            className="relative p-[10px] bg-[#F4F5F2]"
            style={{
              boxShadow:
                "0px 40px 80px rgba(0,0,0,0.08), 0px 15px 30px rgba(0,0,0,0.05)",
            }}
          >

            {/* OUTER BORDER */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                border: "1px solid rgba(45,60,104,0.08)",
              }}
            />

            {/* INNER FRAME */}
            <div className="relative p-[14px] bg-white">

              {/* INNER BORDER */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: "1px solid rgba(45,60,104,0.06)",
                }}
              />

              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[16/9] overflow-hidden bg-white">

                {Object.entries(decks).map(([key, src]) => (
                  <img
                    key={key}
                    src={src}
                    alt={`${key} deck layout`}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      deck === key
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-[1.015]"
                    }`}
                  />
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* PEAK */}
        <div className="mt-[140px] text-center">
          <p className="text-[11px] tracking-[0.3em] text-[#2D3C68]/40 uppercase">
            Capacity
          </p>

          <div className="relative mt-6 inline-block">
            <div className="font-serif text-[72px] md:text-[88px] text-[#2D3C68] leading-none">
              12
            </div>

            <div
              className="absolute inset-0 blur-[14px] opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(45,60,104,0.25), transparent 70%)",
              }}
            />
          </div>

          <p className="mt-4 text-[14px] text-[#2D3C68]/70">
            Intimate for 12 guests — supported by 10 crew
          </p>
        </div>

        {/* PRIMARY */}
        <div className="mt-[110px] grid md:grid-cols-3 gap-y-12 gap-x-12 max-w-[900px] mx-auto">
          {primary.map(([label, value], i) => (
            <div
              key={label}
              className={`
                ${i === 0 ? "text-left" : ""}
                ${i === 1 ? "text-center" : ""}
                ${i === 2 ? "text-right" : ""}
              `}
            >
              <p className="text-[11px] tracking-[0.3em] text-[#2D3C68]/40 uppercase">
                {label}
              </p>

              <p className="mt-3 text-[26px] md:text-[28px] text-[#2D3C68]">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* SECONDARY */}
        <div className="mt-[130px] max-w-[800px] mx-auto space-y-6">
          {specs.map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between items-start pb-4"
              style={{
                borderBottom: "1px solid rgba(45,60,104,0.08)",
              }}
            >
              <span className="text-[11px] tracking-[0.25em] text-[#2D3C68]/40 uppercase">
                {label}
              </span>

              <span className="text-[14px] text-[#2D3C68] text-right max-w-[60%]">
                {value}
              </span>
            </div>
          ))}
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