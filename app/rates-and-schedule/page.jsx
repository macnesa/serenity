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
       {/* <PricingDetails/>   */}
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
    <section className="relative w-full h-[82vh] min-h-[660px] overflow-hidden bg-[#2D3C68] text-white">
      {/* ===================================================== */}
      {/* BACKGROUND IMAGE */}
      {/* ===================================================== */}
      <div className="absolute inset-0">
        <motion.img
          src="https://res.cloudinary.com/dombq6plz/image/upload/v1777217651/ChatGPT_Image_Apr_26_2026_10_30_34_PM_1_yc2ihk.png"
          alt="Guests relaxing aboard Serenity"
          className="w-full h-full object-cover scale-[1.06]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* ===================================================== */}
      {/* OVERLAYS */}
      {/* ===================================================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D3C68]/84 via-[#2D3C68]/78 to-[#1F2A4A]/94" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2D3C68]/48 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 h-[220px] w-full bg-gradient-to-b from-transparent via-[#2D3C68]/16 to-[#2D3C68]" />

      {/* ===================================================== */}
      {/* CONTENT */}
      {/* ===================================================== */}
      <div className="relative z-10 flex h-full items-center px-6">
        <div className="mx-auto w-full max-w-[1240px]">
          <div className="max-w-[700px] md:ml-[40px]">

            {/* MICRO */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-6 text-[11px] font-medium uppercase tracking-[0.34em] text-white/60"
            >
              Rates & Schedule
            </motion.p>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.08 }}
              className="font-[Gambarino] text-[56px] md:text-[82px] leading-[0.97] tracking-[-0.04em]"
            >
              Private charter,
              <br />
              planned around you.
            </motion.h1>

            {/* SUBCOPY */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.16 }}
              className="mt-7 max-w-[560px] text-[15px] md:text-[16px] leading-[1.85] text-white/74"
            >
              For up to 12 guests. Explore rates, sample journeys, and
              availability for dates that work for your group.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.24 }}
              className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <button className="rounded-full bg-white px-8 py-3 text-[14px] font-medium text-[#2D3C68] transition hover:bg-[#F4F5F2]">
                Check availability
              </button>

              <button className="text-[13px] text-white/62 transition hover:text-white">
                Explore sample journeys
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}


function RateOverview() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F5F2] py-[170px] md:py-[190px] px-6">
      {/* ===================================================== */}
      {/* TRANSITION FROM HERO */}
      {/* ===================================================== */}
      <div className="pointer-events-none absolute top-0 left-0 h-[140px] w-full bg-gradient-to-b from-[#2D3C68]/12 to-transparent" />

      {/* ===================================================== */}
      {/* ATMOSPHERE */}
      {/* ===================================================== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(176,141,87,0.045),transparent_24%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_76%,rgba(45,60,104,0.028),transparent_22%)]" />

      <div className="relative mx-auto max-w-[1180px]">

        {/* ===================================================== */}
        {/* TOP INTRO */}
        {/* ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="max-w-[760px]"
        >
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#6A6A6A]">
            Rates
          </p>

          <h2 className="mt-6 font-[Gambarino] text-[54px] md:text-[72px] leading-[1] tracking-[-0.035em] text-[#2D3C68]">
            Private charter rates,
            <br />
            made clear
          </h2>

          <p className="mt-7 max-w-[520px] text-[15px] md:text-[16px] leading-[1.9] text-[#2D3C68]/72">
            Reserve the entire yacht for your group. Pricing is per night and
            shaped by season, route, and journey length.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* MONUMENT PRICING */}
        {/* ===================================================== */}
        <div className="mt-20 border-y border-[#2D3C68]/8 py-14 md:py-16">
          <div className="grid items-end gap-16 md:grid-cols-2 md:gap-10">

            {/* PEAK */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72 }}
              viewport={{ once: true }}
            >
              <p className="text-[12px] uppercase tracking-[0.26em] text-[#6A6A6A]">
                Peak Season
              </p>

              <div className="mt-5 flex items-start gap-3">
                <span className="pt-4 text-[13px] uppercase tracking-[0.22em] text-[#6A6A6A]">
                  USD
                </span>

                <span className="font-[Gambarino] text-[74px] md:text-[96px] leading-none tracking-[-0.04em] text-[#1A1A1A]">
                  8,500
                </span>
              </div>

              <p className="mt-4 text-[14px] text-[#5C5C5C]">
                per night
              </p>
            </motion.div>

            {/* LOW */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.08 }}
              viewport={{ once: true }}
              className="md:border-l md:border-[#2D3C68]/8 md:pl-10"
            >
              <p className="text-[12px] uppercase tracking-[0.26em] text-[#6A6A6A]">
                Low Season
              </p>

              <div className="mt-5 flex items-start gap-3">
                <span className="pt-3 text-[12px] uppercase tracking-[0.22em] text-[#6A6A6A]">
                  USD
                </span>

                <span className="font-[Gambarino] text-[58px] md:text-[74px] leading-none tracking-[-0.04em] text-[#1A1A1A]">
                  6,500
                </span>
              </div>

              <p className="mt-4 text-[14px] text-[#5C5C5C]">
                per night
              </p>
            </motion.div>

          </div>
        </div>

        {/* ===================================================== */}
        {/* SUPPORTING NOTES */}
        {/* ===================================================== */}
        <div className="mt-14 grid items-start gap-10 md:grid-cols-[1fr_auto]">

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            viewport={{ once: true }}
            className="max-w-[560px] text-[15px] leading-[1.9] text-[#2D3C68]/72"
          >
            Includes crew, onboard meals, and water activities.
            Final quotes are confirmed once route and dates are selected.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-[#2D3C68]/42 md:justify-end"
          >
            <span>Up to 12 Guests</span>
            <span>Private Charter</span>
            <span>Tailored Quotes</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function IncludedSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F1F3EE] py-[170px] md:py-[190px] px-6">
      {/* ===================================================== */}
      {/* TRANSITION FROM PREVIOUS SECTION */}
      {/* ===================================================== */}
      <div className="pointer-events-none absolute top-0 left-0 h-[120px] w-full bg-gradient-to-b from-[#F4F5F2] to-transparent" />

      {/* ===================================================== */}
      {/* ATMOSPHERE */}
      {/* ===================================================== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(176,141,87,0.04),transparent_24%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_78%,rgba(45,60,104,0.025),transparent_22%)]" />

      <div className="relative mx-auto max-w-[1280px]">

        {/* ===================================================== */}
        {/* TOP GRID */}
        {/* ===================================================== */}
        <div className="grid items-start gap-24 md:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="max-w-[460px]"
          >
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#6A6A6A]">
              Included
            </p>

            <h2 className="mt-6 font-[Gambarino] text-[52px] md:text-[64px] leading-[1.02] tracking-[-0.03em] text-[#2D3C68]">
              Everything
              <br />
              already handled
            </h2>

            <p className="mt-7 max-w-[420px] text-[15px] md:text-[16px] leading-[1.9] text-[#2D3C68]/72">
              From meals to movement, the details are prepared before you arrive.
              Once aboard, very little is asked of you.
            </p>

            <div className="mt-12 border-l border-[#2D3C68]/14 pl-6">
              <p className="font-[Gambarino] text-[26px] leading-[1.18] text-[#2D3C68]">
                Your time stays yours.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="md:pt-8">

            {/* CLUSTER 1 */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid gap-8 border-b border-[#2D3C68]/10 pb-12 sm:grid-cols-[180px_1fr]"
            >
              <p className="text-[12px] uppercase tracking-[0.26em] text-[#6A6A6A]">
                Yacht & Crew
              </p>

              <p className="max-w-[520px] text-[17px] leading-[1.75] text-[#1A1A1A]">
                Private yacht with captain, chef, and full onboard crew
                dedicated to your group throughout the journey.
              </p>
            </motion.div>

            {/* CLUSTER 2 */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              viewport={{ once: true }}
              className="grid gap-8 border-b border-[#2D3C68]/10 py-12 sm:grid-cols-[180px_1fr]"
            >
              <p className="text-[12px] uppercase tracking-[0.26em] text-[#6A6A6A]">
                Onboard Living
              </p>

              <p className="max-w-[520px] text-[17px] leading-[1.75] text-[#1A1A1A]">
                Breakfast, lunch, dinner, snacks, water, and the daily comfort
                of a fully serviced yacht.
              </p>
            </motion.div>

            {/* CLUSTER 3 */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14 }}
              viewport={{ once: true }}
              className="grid gap-8 border-b border-[#2D3C68]/10 py-12 sm:grid-cols-[180px_1fr]"
            >
              <p className="text-[12px] uppercase tracking-[0.26em] text-[#6A6A6A]">
                Exploration
              </p>

              <p className="max-w-[520px] text-[17px] leading-[1.75] text-[#1A1A1A]">
                Snorkeling equipment, paddle boards, and access to the water
                whenever conditions are right.
              </p>
            </motion.div>

            {/* CLUSTER 4 */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-8 pt-12 sm:grid-cols-[180px_1fr]"
            >
              <p className="text-[12px] uppercase tracking-[0.26em] text-[#6A6A6A]">
                Not Included
              </p>

              <p className="max-w-[520px] text-[16px] leading-[1.85] text-[#2D3C68]/72">
                Flights, park fees, alcohol on request, and personal expenses.
                Final trip planning is confirmed before departure.
              </p>
            </motion.div>

          </div>
        </div>

        {/* ===================================================== */}
        {/* FOOTNOTE */}
        {/* ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-[#2D3C68]/42"
        >
          <span>Private Charter</span>
          <span>Up to 12 Guests</span>
          <span>Full Crew</span>
          <span>Prepared Before Arrival</span>
        </motion.div>

      </div>
    </section>
  );
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
    <section className="relative w-full overflow-hidden bg-[#F4F5F2] py-[190px] md:py-[210px] px-6">
      {/* ===================================================== */}
      {/* ATMOSPHERE */}
      {/* ===================================================== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(176,141,87,0.05),transparent_24%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_78%,rgba(45,60,104,0.03),transparent_22%)]" />

      <div className="relative max-w-[1280px] mx-auto">
        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="max-w-[700px]"
        >
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#6A6A6A]">
            Example Journeys
          </p>

          <h2 className="mt-6 font-[Gambarino] text-[54px] md:text-[72px] leading-[1] tracking-[-0.035em] text-[#2D3C68]">
            A few directions
            <br />
            the journey can take
          </h2>

          <p className="mt-7 max-w-[520px] text-[15px] md:text-[16px] leading-[1.9] text-[#2D3C68]/72">
            No route is fixed. These examples simply show different moods,
            landscapes, and rhythms available by sea.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* JOURNEY GRID */}
        {/* ===================================================== */}
        <div className="mt-20 grid md:grid-cols-[1fr_0.86fr] gap-20 items-start">
          {/* ===================================================== */}
          {/* KOMODO / FEATURED */}
          {/* ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden  ">
              <div className="aspect-[4/5]">
                <img
                  src="https://res.cloudinary.com/dombq6plz/image/upload/v1776869679/ChatGPT_Image_Apr_22_2026_09_52_34_PM_ot1mm8.png"
                  alt="Komodo journey"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/6 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/65">
                  4 Nights
                </p>

                <h3 className="mt-3 font-[Gambarino] text-[42px] md:text-[56px] leading-[0.95] tracking-[-0.03em] text-white">
                  Komodo
                </h3>

                <p className="mt-4 max-w-[420px] text-[15px] leading-[1.8] text-white/78">
                  Dramatic islands, clear reefs, sunrise hikes, and one of
                  Indonesia’s most iconic landscapes.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-[#2D3C68]/44">
              <span>Padar Sunrise</span>
              <span>Pink Beach</span>
              <span>Wildlife</span>
              <span>Snorkeling</span>
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* RAJA AMPAT / SECONDARY */}
          {/* ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08 }}
            viewport={{ once: true }}
            className="md:pt-16"
          >
            <div className="relative overflow-hidden  ">
              <div className="aspect-[4/5]">
                <img
                  src="https://res.cloudinary.com/dombq6plz/image/upload/v1776869680/ChatGPT_Image_Apr_22_2026_08_27_54_PM_n8evgp.png"
                  alt="Raja Ampat journey"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/6 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/65">
                  5 Nights
                </p>

                <h3 className="mt-3 font-[Gambarino] text-[36px] md:text-[48px] leading-[0.96] tracking-[-0.03em] text-white">
                  Raja Ampat
                </h3>

                <p className="mt-4 max-w-[380px] text-[15px] leading-[1.8] text-white/78">
                  Hidden lagoons, rich marine life, and a slower rhythm across
                  remote tropical waters.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-[#2D3C68]/44">
              <span>Remote Reefs</span>
              <span>Lagoon Stops</span>
              <span>Diving</span>
              <span>Quiet Cruising</span>
            </div>
          </motion.div>
        </div>

        {/* ===================================================== */}
        {/* FOOTNOTE */}
        {/* ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
          viewport={{ once: true }}
          className="mt-24 max-w-[560px]"
        >
          <p className="text-[15px] leading-[1.9] text-[#2D3C68]/72">
            Every trip is shaped around your dates, preferences, and sea
            conditions. These routes are starting points, not fixed programs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative w-full h-[80vh] min-h-[640px] flex items-center overflow-hidden text-white">

      {/* ================= BACKGROUND (HUMAN — CONTINUITY) ================= */}
      <div className="absolute inset-0">
        <motion.img
          src="https://res.cloudinary.com/dombq6plz/image/upload/v1776176462/people_relaxing_phinisi_sunset_softlight_h8k2dj.png"
          alt=""
          className="w-full h-full object-cover scale-[1.05]"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 6 }}
        />
      </div>

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-[#2D3C68]/75" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full px-6">

        <div className="max-w-[1200px] mx-auto">

          {/* slight offset (no perfect symmetry) */}
          <div className="max-w-[520px] md:ml-[40px]">

            {/* HEADLINE */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-[Gambarino] text-[48px] md:text-[64px] leading-[1.05]"
            >
              Start with a few details
            </motion.h2>

            {/* SUBCOPY */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-[16px] text-white/80 leading-relaxed"
            >
              Tell us when you want to go and who you’re traveling with.
              We’ll take care of the rest and shape the trip around you.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex items-center gap-6"
            >
              <button className="px-8 py-3 rounded-full bg-white text-[#2D3C68] text-[14px] font-medium hover:bg-[#F4F5F2] transition">
                Check availability
              </button>

              {/* MICRO TRUST */}
              <span className="text-[13px] text-white/60">
                No commitment
              </span>
            </motion.div>

          </div>

        </div>

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

