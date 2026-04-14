"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "../../lib/gsap"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Footer from '../../components/Footer'


export default function Page() {
  return (
    <main className="bg-[#0a0f14] text-white overflow-hidden">
       <Hero/> 
       <CharterRates/>
       <Schedule/>
       <InclusionsExclusions/>
      <Footer/> 
    </main>
  )
}


function Hero() {
  return (
    <section className="relative h-[50vh] w-full overflow-hidden">

      {/* IMAGE */}
      <img
        src="https://res.cloudinary.com/dombq6plz/image/upload/v1775720933/Teak_wood_and_rope_craftsmanship_etuf8i.png"
        alt="Rates and Schedule"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* CONTROLLED OVERLAY */}
      <div className="absolute inset-0 bg-[#F5F2ED]/70" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-end">

        <div className="w-full max-w-[1100px] mx-auto px-6 pb-12">

          <p className="text-[12px] tracking-[0.35em] text-[#0F172A]/40 uppercase">
            Rates & Schedule
          </p>

          <h1 className="mt-6 font-[Canela] text-[44px] md:text-[72px] leading-[1.05] text-[#0F172A] max-w-[800px]">
            Plan Your Journey
          </h1>

          <p className="mt-6 max-w-[520px] text-[15px] text-[#0F172A]/70 leading-relaxed">
            Each voyage is tailored — but these rates and seasonal windows
            offer a clear starting point for planning your time aboard Sanctuary.
          </p>

        </div>

      </div>

    </section>
  );
}


function CharterRates() {
  return (
    <section className="bg-[#F5F2ED] py-[140px] px-6">

      <div className="max-w-[1200px] mx-auto">

        {/* TOP */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div>
            <p className="text-[12px] tracking-[0.35em] text-[#0F172A]/40 uppercase">
              Rates
            </p>

            <h2 className="mt-6 font-[Canela] text-[40px] md:text-[56px] leading-[1.1] text-[#0F172A]">
              Chartering
              <br />
              With Us
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-[520px] text-[15px] text-[#0F172A]/70 leading-relaxed">
            Explore our rates and schedules to plan your Sanctuary journey.
            With flexible itineraries, each voyage offers a unique blend of
            luxury and adventure through Indonesia’s archipelago.
          </div>

        </div>

        {/* RATES */}
        <div className="mt-20 grid md:grid-cols-2 gap-16">

          {/* LEFT RATE */}
          <div className="border-t border-[#0F172A]/20 pt-10">

            <div className="flex items-baseline gap-3">
              <span className="font-[Canela] text-[40px] md:text-[52px] text-[#0F172A]">
                45,000
              </span>
              <span className="text-[14px] text-[#0F172A]/60">
                USD / week
              </span>
            </div>

            <p className="mt-6 text-[14px] text-[#0F172A]/60 leading-relaxed max-w-[420px]">
              Private charter of the entire vessel with seven staterooms,
              accommodating up to fourteen guests.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-[12px] tracking-wide text-[#0F172A]/50 uppercase">
              <span>Raja Ampat</span>
              <span>•</span>
              <span>Banda Sea</span>
              <span>•</span>
              <span>Ambon</span>
            </div>

          </div>

          {/* RIGHT RATE */}
          <div className="border-t border-[#0F172A]/20 pt-10">

            <div className="flex items-baseline gap-3">
              <span className="font-[Canela] text-[40px] md:text-[52px] text-[#0F172A]">
                55,000
              </span>
              <span className="text-[14px] text-[#0F172A]/60">
                USD / week
              </span>
            </div>

            <p className="mt-6 text-[14px] text-[#0F172A]/60 leading-relaxed max-w-[420px]">
              Private charter of the entire vessel with seven staterooms,
              accommodating up to fourteen guests.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-[12px] tracking-wide text-[#0F172A]/50 uppercase">
              <span>Komodo</span>
              <span>•</span>
              <span>Flores</span>
              <span>•</span>
              <span>Alor</span>
            </div>

          </div>

        </div>

        {/* PAYMENT TERMS */}
        <div className="mt-24 pt-12 border-t border-[#0F172A]/20">

          <h3 className="font-[Canela] text-[26px] text-[#0F172A]">
            Payment Terms
          </h3>

          <p className="mt-4 text-[14px] text-[#0F172A]/60 max-w-[520px] leading-relaxed">
            A fifty percent non-refundable deposit is required at the time of
            booking. The remaining balance is due sixty days prior to departure.
          </p>

        </div>

      </div>

    </section>
  );
}


function Schedule() {
  return (
    <section className="bg-[#F5F2ED] py-[140px] px-6">

      <div className="max-w-[1100px] mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-[12px] tracking-[0.35em] text-[#0F172A]/40 uppercase">
            Schedule
          </p>

          <h2 className="mt-6 font-[Canela] text-[42px] md:text-[56px] text-[#0F172A]">
            Choose Your Trip
          </h2>
        </div>

        {/* LIST */}
        <div className="mt-20 divide-y divide-[#0F172A]/10">

          {/* ROW 1 */}
          <div className="group grid grid-cols-[1fr_1fr_auto] items-center py-10">

            <p className="font-[Canela] text-[18px] tracking-wide text-[#0F172A]">
              JAN–APR
            </p>

            <p className="text-[13px] tracking-[0.2em] text-[#0F172A]/50 uppercase">
              Raja Ampat · West Papua
            </p>

            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_28_PM_fkhsss.png"
              className="w-[120px] h-[80px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

          </div>

          {/* ROW 2 */}
          <div className="group grid grid-cols-[1fr_1fr_auto] items-center py-10 pl-6">

            <p className="font-[Canela] text-[18px] tracking-wide text-[#0F172A]">
              APR
            </p>

            <p className="text-[13px] tracking-[0.2em] text-[#0F172A]/50 uppercase">
              Spice Islands · Maluku
            </p>

            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_15_PM_otnwp1.png"
              className="w-[120px] h-[80px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

          </div>

          {/* HERO ROW (highlight) */}
          <div className="group grid grid-cols-[1fr_1fr_auto] items-center py-14">

            <p className="font-[Canela] text-[22px] text-[#0F172A]">
              MAY–SEP
            </p>

            <p className="text-[14px] tracking-[0.2em] text-[#0F172A]/60 uppercase">
              Komodo · Sumbawa · Alor
            </p>

            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_08_12_PM_xxx.png"
              className="w-[160px] h-[110px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

          </div>

          {/* ROW 4 */}
          <div className="group grid grid-cols-[1fr_1fr_auto] items-center py-10 pl-6">

            <p className="font-[Canela] text-[18px] text-[#0F172A]">
              SEP–OCT
            </p>

            <p className="text-[13px] tracking-[0.2em] text-[#0F172A]/50 uppercase">
              Spice Islands · Maluku
            </p>

            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_07_15_PM_otnwp1.png"
              className="w-[120px] h-[80px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

          </div>

          {/* ROW 5 */}
          <div className="group grid grid-cols-[1fr_1fr_auto] items-center py-10">

            <p className="font-[Canela] text-[18px] text-[#0F172A]">
              OCT–DEC
            </p>

            <p className="text-[13px] tracking-[0.2em] text-[#0F172A]/50 uppercase">
              Raja Ampat · West Papua
            </p>

            <img
              src="https://res.cloudinary.com/dombq6plz/image/upload/v1775031030/ChatGPT_Image_Apr_1_2026_03_06_28_PM_fkhsss.png"
              className="w-[120px] h-[80px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center gap-4">

          <div className="flex gap-4">

            <button className="px-6 py-3 rounded-full bg-[#9FB7B1] text-white text-[12px] tracking-[0.2em] uppercase">
              Reserve
            </button>

            <button className="px-6 py-3 rounded-full border border-[#0F172A]/30 text-[#0F172A] text-[12px] tracking-[0.2em] uppercase">
              Book an Initial Call
            </button>

          </div>

          <p className="text-[11px] text-[#0F172A]/40 italic">
            Typical schedule. Subject to change.
          </p>

        </div>

      </div>

    </section>
  );
}


function InclusionsExclusions() {
  return (
    <section className="bg-[#0B0B0B] text-white py-[140px] px-6">

      <div className="max-w-[1200px] mx-auto">

        {/* INTRO */}
        <div className="text-center max-w-[620px] mx-auto">
          <p className="text-[12px] tracking-[0.35em] text-white/40 uppercase">
            Details
          </p>

          <h2 className="mt-6 font-[Canela] text-[40px] md:text-[56px] leading-[1.1]">
            What’s Included
          </h2>

          <p className="mt-6 text-[15px] text-white/60 leading-relaxed">
            Everything you need for a seamless journey is thoughtfully arranged.
            Additional services can be tailored to your preferences.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-24 grid md:grid-cols-2 gap-20">

          {/* INCLUSIONS */}
          <div>

            <h3 className="font-[Canela] text-[28px] text-white">
              Inclusions
            </h3>

            <div className="mt-6 border-t border-white/10" />

            <div className="mt-10 space-y-10">

              {/* GROUP 1 */}
              <div>
                <p className="text-[11px] tracking-[0.3em] text-white/40 uppercase">
                  Experience
                </p>

                <ul className="mt-4 space-y-4">

                  {[
                    "Freshly cooked meals by Michelin-trained chef",
                    "Activities and guided excursions",
                    "Use of all water toys onboard",
                    "National Park fees"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[#9FB7B1] text-[14px] mt-[2px]">✓</span>
                      <span className="text-[14px] text-white/80">{item}</span>
                    </li>
                  ))}

                </ul>
              </div>

              {/* GROUP 2 */}
              <div>
                <p className="text-[11px] tracking-[0.3em] text-white/40 uppercase">
                  Service
                </p>

                <ul className="mt-4 space-y-4">

                  {[
                    "Fully crewed vessel",
                    "Expedition leader",
                    "Dive master and equipment",
                    "Nitrox for certified divers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[#9FB7B1] text-[14px] mt-[2px]">✓</span>
                      <span className="text-[14px] text-white/80">{item}</span>
                    </li>
                  ))}

                </ul>
              </div>

              {/* GROUP 3 */}
              <div>
                <p className="text-[11px] tracking-[0.3em] text-white/40 uppercase">
                  Comfort & Logistics
                </p>

                <ul className="mt-4 space-y-4">

                  {[
                    "Free-flow local beer & house wine",
                    "Soft drinks, tea, coffee",
                    "Return airport / hotel transfers",
                    "Starlink satellite internet",
                    "Daily massage therapy (3 hours)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[#9FB7B1] text-[14px] mt-[2px]">✓</span>
                      <span className="text-[14px] text-white/80">{item}</span>
                    </li>
                  ))}

                </ul>
              </div>

            </div>

          </div>

          {/* EXCLUSIONS */}
          <div>

            <h3 className="font-[Canela] text-[28px] text-white/90">
              Exclusions
            </h3>

            <div className="mt-6 border-t border-white/10" />

            <ul className="mt-10 space-y-5">

              {[
                "Alcoholic beverages beyond house selection",
                "Travel & dive insurance",
                "Crew gratuities (customary 10–15%)",
                "Fuel surcharge when applicable",
                "Hotels before and after the cruise",
                "Dive certifications and dive computer",
                "Additional massage treatments"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-white/40 text-[14px] mt-[2px]">×</span>
                  <span className="text-[14px] text-white/60">{item}</span>
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

