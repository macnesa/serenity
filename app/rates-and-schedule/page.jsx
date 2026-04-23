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
       <RateOverview/>
       <IncludedSection/>
       <PricingDetails/>  
       <SampleJourney/>
       <FinalCTA/>
       {/* <CharterRates/> */}
       {/* <Schedule/> */}
       {/* <InclusionsExclusions/> */}
      <Footer/> 
    </main>
  )
}


function Hero() {
  return (
    <section className="relative w-full bg-[#2D3C68] overflow-hidden">

      {/* SOFT DEPTH (NO DRAMA) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D3C68] via-[#2D3C68] to-[#1f2a4a] opacity-90" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[140px] pb-[120px]">

        <div className="max-w-[640px]">

          {/* MICRO */}
          <div className="mb-6 text-[11px] tracking-[0.28em] text-[#F4F5F2]/60">
            PRIVATE CHARTER
          </div>

          {/* HEADLINE */}
          <h1 className="font-[Gambarino] text-[44px] md:text-[64px] leading-[1.08] tracking-[-0.03em] text-[#F4F5F2]">
            Plan your
            <br />
            time on board
          </h1>

          {/* SUBCOPY */}
          <p className="mt-6 text-[15px] text-[#F4F5F2]/75 max-w-[520px] mx-auto leading-[1.7]">
            Each journey is shaped by where you go, how long you stay, and how you choose to spend your days.
          </p>

          {/* MICRO CONTEXT */}
          <div className="mt-8 text-[12px] tracking-[0.25em] text-[#F4F5F2]/50">
            UP TO 12 GUESTS · FULL CREW · FLEXIBLE ROUTE
          </div>

        </div>

      </div>

    </section>
  )
}


function RateOverview() {
  return (
    <section className="relative w-full bg-[#F4F5F2] py-[160px] md:py-[180px] px-6 overflow-hidden">

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-[140px] bg-gradient-to-b from-[#2D3C68]/10 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-24 items-start">

        {/* ================= LEFT ================= */}
        <div className="max-w-[420px]">

          <p className="text-[11px] tracking-[0.35em] text-[#6A6A6A] uppercase">
            Rates
          </p>

          <h2 className="mt-6 font-[Gambarino] text-[52px] md:text-[64px] leading-[1.05] text-[#2D3C68]">
            Simple, flexible pricing
          </h2>

          <p className="mt-6 text-[15px] text-[#5C5C5C] leading-relaxed">
            You’re booking the entire yacht, not per person.
            The final price depends on where you go and how long you stay.
          </p>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative md:translate-y-[60px]">

          {/* ================= PEAK ================= */}
          <div className="mb-24">

            <p className="text-[12px] tracking-[0.2em] text-[#2D3C68]/60 uppercase mb-4">
              Peak Season
            </p>

            {/* PEAK MOMENT */}
            <div className="font-[Gambarino] text-[64px] md:text-[72px] text-[#1A1A1A] leading-none relative inline-block">

              USD 8,500

              {/* subtle underline = visual anchor */}
              <div className="absolute left-0 -bottom-3 w-12 h-[1px] bg-[#2D3C68]/20" />
            </div>

            <p className="mt-3 text-[14px] text-[#5C5C5C]">
              per night · up to 12 guests
            </p>

          </div>

          {/* ================= LOW ================= */}
          <div className="relative md:top-[40px] md:ml-[60px]">

            <p className="text-[12px] tracking-[0.2em] text-[#2D3C68]/60 uppercase mb-3">
              Low Season
            </p>

            <div className="font-[Gambarino] text-[36px] md:text-[44px] text-[#1A1A1A] leading-none">
              USD 6,500
            </div>

            <p className="mt-2 text-[14px] text-[#5C5C5C]">
              per night · up to 12 guests
            </p>

          </div>

          {/* ================= INCLUDED ================= */}
          <div className="mt-28 max-w-[360px] relative">

            {/* divider biar punya role */}
            <div className="w-8 h-[1px] bg-[#2D3C68]/20 mb-5" />

            <p className="text-[13px] text-[#5C5C5C]/80 leading-relaxed">
              Includes a fully crewed yacht, all meals, and access to onboard and water activities.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

function IncludedSection() {
  return (
    <section className="w-full bg-[#F4F5F2] py-[180px] px-6">

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* ================= LEFT (HEADER) ================= */}
        <div className="max-w-[360px]">

          <p className="text-[11px] tracking-[0.35em] text-[#6A6A6A] uppercase">
            Details
          </p>

          <h2 className="mt-6 font-[Gambarino] text-[42px] leading-[1.1] text-[#2D3C68]">
            What’s included
          </h2>

          <p className="mt-6 text-[14px] text-[#5C5C5C] leading-relaxed">
            Clear breakdown of what’s covered and what isn’t.
          </p>

        </div>

        {/* ================= RIGHT (DATA GRID) ================= */}
        <div>

          {/* INCLUDED GRID */}
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">

            <div>
              <p className="text-[13px] text-[#6A6A6A] mb-2">Yacht</p>
              <p className="text-[16px] text-[#1A1A1A]">Private use (max 12 guests)</p>
            </div>

            <div>
              <p className="text-[13px] text-[#6A6A6A] mb-2">Crew</p>
              <p className="text-[16px] text-[#1A1A1A]">Captain, chef, full team</p>
            </div>

            <div>
              <p className="text-[13px] text-[#6A6A6A] mb-2">Meals</p>
              <p className="text-[16px] text-[#1A1A1A]">Breakfast, lunch, dinner, snacks</p>
            </div>

            <div>
              <p className="text-[13px] text-[#6A6A6A] mb-2">Drinks</p>
              <p className="text-[16px] text-[#1A1A1A]">Water and basic beverages</p>
            </div>

            <div>
              <p className="text-[13px] text-[#6A6A6A] mb-2">Activities</p>
              <p className="text-[16px] text-[#1A1A1A]">Snorkeling gear, paddle boards</p>
            </div>

            <div>
              <p className="text-[13px] text-[#6A6A6A] mb-2">Service</p>
              <p className="text-[16px] text-[#1A1A1A]">Daily cleaning and onboard help</p>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="my-16 h-[1px] bg-[#2D3C68]/10" />

          {/* NOT INCLUDED */}
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-6">

            <div>
              <p className="text-[13px] text-[#6A6A6A] mb-2">Flights</p>
              <p className="text-[15px] text-[#1A1A1A]">Not included</p>
            </div>

            <div>
              <p className="text-[13px] text-[#6A6A6A] mb-2">Park fees</p>
              <p className="text-[15px] text-[#1A1A1A]">Not included</p>
            </div>

            <div>
              <p className="text-[13px] text-[#6A6A6A] mb-2">Alcohol</p>
              <p className="text-[15px] text-[#1A1A1A]">Available on request</p>
            </div>

            <div>
              <p className="text-[13px] text-[#6A6A6A] mb-2">Personal</p>
              <p className="text-[15px] text-[#1A1A1A]">Own expenses</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

function PricingDetails() {
  return (
    <section className="w-full bg-[#E9EDF5] py-[180px] px-6">

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* ================= LEFT (IMAGE) ================= */}
        <div className="relative w-full aspect-[4/5] overflow-hidden">

          <img
            src="https://res.cloudinary.com/dombq6plz/image/upload/v1776176459/Aerial_view_of_phinisi_yacht_indonesia_f4zq1l.png"
            alt=""
            className="w-full h-full object-cover"
          />

        </div>

        {/* ================= RIGHT (DATA) ================= */}
        <div>

          <p className="text-[11px] tracking-[0.35em] text-[#6A6A6A] uppercase">
            Pricing Details
          </p>

          <h2 className="mt-6 font-[Gambarino] text-[42px] leading-[1.1] text-[#2D3C68]">
            Where the cost comes from
          </h2>

          <div className="mt-10 space-y-10 text-[15px] text-[#1A1A1A]">

            {/* FUEL */}
            <div>
              <p className="font-medium">Fuel</p>
              <p className="text-[#5C5C5C] mt-1">
                300–600 liters per day depending on route and speed.
              </p>
            </div>

            {/* CREW */}
            <div>
              <p className="font-medium">Crew</p>
              <p className="text-[#5C5C5C] mt-1">
                8–10 crew members on board throughout the trip.
              </p>
            </div>

            {/* FOOD */}
            <div>
              <p className="font-medium">Food & Supplies</p>
              <p className="text-[#5C5C5C] mt-1">
                Fresh ingredients restocked before each trip and during longer routes.
              </p>
            </div>

            {/* ROUTE */}
            <div>
              <p className="font-medium">Distance</p>
              <p className="text-[#5C5C5C] mt-1">
                Longer routes (e.g. Raja Ampat) require higher fuel and logistics cost.
              </p>
            </div>

            {/* SEASON */}
            <div>
              <p className="font-medium">Season</p>
              <p className="text-[#5C5C5C] mt-1">
                Peak season (Jun–Sep) has higher demand and limited availability.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

function SampleJourney() {
  return (
    <section className="w-full bg-[#F4F5F2] py-[200px] px-6 overflow-hidden">

      <div className="max-w-[1200px] mx-auto">

        {/* ================= HEADER ================= */}
        <div className="max-w-[520px] mb-20">
          <p className="text-[11px] tracking-[0.35em] text-[#6A6A6A] uppercase">
            Sample journeys
          </p>

          <h2 className="mt-6 font-[Gambarino] text-[44px] md:text-[60px] leading-[1.08] text-[#2D3C68]">
            What your trip could look like
          </h2>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* ================= KOMODO ================= */}
          <div>

            {/* IMAGE */}
            <div className="relative w-full aspect-[4/5] overflow-hidden mb-8">
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1776176460/Padar_Island_Indonesia_sunrise_lwcb1h.png"
                alt="Komodo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TITLE */}
            <h3 className="font-[Gambarino] text-[28px] text-[#1A1A1A]">
              Komodo · 4 days
            </h3>

            {/* DATA */}
            <div className="mt-4 space-y-2 text-[15px] text-[#5C5C5C]">
              <p>Padar Island sunrise</p>
              <p>Pink Beach snorkeling</p>
              <p>Komodo National Park visit</p>
              <p>Island hopping by boat</p>
            </div>

          </div>

          {/* ================= RAJA AMPAT ================= */}
          <div className="md:mt-[100px]">

            {/* IMAGE */}
            <div className="relative w-full aspect-[4/5] overflow-hidden mb-8">
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1776176460/Raja_Ampat_Wayag_islands_aerial_qkwj3o.png"
                alt="Raja Ampat"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TITLE */}
            <h3 className="font-[Gambarino] text-[28px] text-[#1A1A1A]">
              Raja Ampat · 5 days
            </h3>

            {/* DATA */}
            <div className="mt-4 space-y-2 text-[15px] text-[#5C5C5C]">
              <p>Wayag viewpoint</p>
              <p>Hidden lagoons and reefs</p>
              <p>Remote island stops</p>
              <p>Snorkeling across multiple sites</p>
            </div>

          </div>

        </div>

        {/* ================= NOTE ================= */}
        <div className="mt-24 max-w-[420px] text-[14px] text-[#5C5C5C]">
          Routes are flexible. Each trip is adjusted based on your time,
          preferences, and weather conditions.
        </div>

      </div>

    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://res.cloudinary.com/dombq6plz/image/upload/v1776176460/Phinisi_yacht_sunset_ocean_horizon_cinematic_lighting_x2k9sf.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#2D3C68]/70" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-[520px]">

        {/* HEADLINE */}
        <h2 className="font-[Gambarino] text-[44px] md:text-[60px] leading-[1.08] text-white">
          Tell us what you have in mind
        </h2>

        {/* SUB */}
        <p className="mt-6 text-[15px] text-white/80 leading-relaxed">
          We’ll help you plan the route, timing, and everything else — based on what you want to do.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button className="px-8 py-3 rounded-full border border-white/70 text-[14px] text-white hover:bg-white hover:text-[#2D3C68] transition">
            Start planning →
          </button>
        </div>

        {/* MICRO TRUST */}
        <p className="mt-6 text-[12px] text-white/60">
          No commitment. We’ll get back to you within 24 hours.
        </p>

      </div>

    </section>
  )
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

