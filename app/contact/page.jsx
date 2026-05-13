"use client"

import { useEffect, useRef, useState } from "react"
import { gsap, ScrollTrigger } from "../../lib/gsap"
import Image from "next/image";
import { motion, AnimatePresence,useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";


import Footer from '../../components/Footer'


export default function Page() {
  return (
    <main className="bg-[#0a0f14] text-white overflow-hidden">
     <ContactHero/>
     <ContactForm/>
      <Footer/> 
    </main>
  )
}

function ContactHero() {
  const lineRef     = useRef(null);
  const headlineRef = useRef(null);
  const supportRef  = useRef(null);
 
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 
    if (reduce) {
      gsap.set([lineRef.current, headlineRef.current, supportRef.current], {
        opacity: 1, y: 0, scaleX: 1,
      });
      return;
    }
 
    gsap.set(lineRef.current,     { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(headlineRef.current, { opacity: 0, y: 28 });
    gsap.set(supportRef.current,  { opacity: 0, y: 20 });
 
    const tl = gsap.timeline({ delay: 0.3 });
 
    tl.to(lineRef.current, {
      scaleX:   1,
      duration: 0.5,
      ease:     'power2.out',
    })
    .to(headlineRef.current, {
      opacity:  1,
      y:        0,
      duration: 1.05,
      ease:     [0.22, 1, 0.36, 1],
    }, '-=0.15')
    .to(supportRef.current, {
      opacity:  1,
      y:        0,
      duration: 0.9,
      ease:     [0.22, 1, 0.36, 1],
    }, '-=0.65');
  }, []);
 
  return (
    <section
      className="relative min-h-[55vh] flex items-end overflow-hidden"
      style={{ backgroundColor: '#2D3C68' }}
    >
      {/* ── Atmospheric layers — cool section ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(circle at 35% 45%, rgba(255,255,255,0.04), transparent 55%)',
            'radial-gradient(circle at 68% 22%, rgba(176,141,87,0.06), transparent 50%)',
          ].join(', '),
        }}
      />
 
      {/* ── Content ── */}
      <div className="relative w-full px-6 md:px-10 lg:px-14 pb-14 md:pb-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-24">
 
            {/* LEFT — Headline */}
            <div className="flex-1 max-w-[700px]">
              <div
                ref={lineRef}
                aria-hidden="true"
                style={{
                  height:          '1px',
                  width:           '64px',
                  backgroundColor: '#B08D57',
                  marginBottom:    '24px',
                }}
              />
              <h1
                ref={headlineRef}
                style={{
                  fontFamily:    'Gambarino',
                  fontSize:      'clamp(38px, 5vw, 64px)',
                  lineHeight:    1.02,
                  letterSpacing: '-0.03em',
                  color:         '#F4F5F2',
                  margin:        0,
                }}
              >
                Your voyage begins<br />
                with a conversation
              </h1>
            </div>
 
            {/* RIGHT — Human reassurance */}
            <div ref={supportRef} style={{ maxWidth: '220px' }}>
              <p style={{
                fontFamily:    'Switzer',
                fontWeight:    400,
                fontSize:      '10px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color:         'rgba(244,245,242,0.45)',
                marginBottom:  '12px',
              }}>
                Guest Inquiries
              </p>
              <p style={{
                fontFamily: 'Switzer',
                fontWeight: 300,
                fontSize:   '13px',
                lineHeight: 1.78,
                color:      'rgba(244,245,242,0.65)',
              }}>
                Alexandra Wira personally reviews
                every inquiry and responds
                within 24 hours.
              </p>
            </div>
 
          </div>
        </div>
      </div>
 
      {/* ── Atmospheric bridge → sail-white form below ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height:     '80px',
          background: 'linear-gradient(to bottom, transparent, rgba(244,245,242,0.05) 70%, rgba(244,245,242,0.12) 100%)',
        }}
      />
    </section>
  );
}
 


const REQUIRED = ['name', 'email', 'destination', 'duration', 'guests', 'dates'];
 
/* ============================================================
   INLINE INPUT
   ============================================================ */
function InlineInput({ value, onChange, placeholder, type = 'text', error = false }) {
  const [focused, setFocused] = useState(false);
  const mirrorRef = useRef(null);
  const inputRef  = useRef(null);
 
  useEffect(() => {
    if (!mirrorRef.current || !inputRef.current) return;
    mirrorRef.current.textContent = value || placeholder;
    inputRef.current.style.width  = (mirrorRef.current.offsetWidth + 12) + 'px';
  }, [value, placeholder]);
 
  const borderColor = error && !value
    ? '#C66A4A'
    : focused
    ? '#B08D57'
    : 'rgba(45,60,104,0.20)';
 
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span
        ref={mirrorRef}
        aria-hidden="true"
        style={{
          position:      'absolute',
          visibility:    'hidden',
          whiteSpace:    'pre',
          fontFamily:    'inherit',
          fontSize:      'inherit',
          letterSpacing: 'inherit',
          pointerEvents: 'none',
        }}
      />
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        style={{
          fontFamily:    'inherit',
          fontSize:      'inherit',
          lineHeight:    'inherit',
          letterSpacing: 'inherit',
          color:         value ? '#2D3C68' : 'rgba(45,60,104,0.35)',
          background:    'transparent',
          border:        'none',
          borderBottom:  `1.5px solid ${borderColor}`,
          outline:       'none',
          padding:       '0 4px 3px',
          minWidth:      '110px',
          transition:    'border-color 300ms ease, color 200ms ease',
          verticalAlign: 'baseline',
        }}
      />
    </span>
  );
}
 
/* ============================================================
   INLINE SELECT
   ============================================================ */
function InlineSelect({ value, onChange, placeholder, options, error = false }) {
  const [open, setOpen] = useState(false);
  const containerRef    = useRef(null);
 
  useEffect(() => {
    const handler = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
 
  const borderColor = error && !value
    ? '#C66A4A'
    : open
    ? '#B08D57'
    : 'rgba(45,60,104,0.20)';
 
  return (
    <span ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          fontFamily:    'inherit',
          fontSize:      'inherit',
          lineHeight:    'inherit',
          letterSpacing: 'inherit',
          color:         value ? '#2D3C68' : 'rgba(45,60,104,0.35)',
          background:    'transparent',
          border:        'none',
          borderBottom:  `1.5px solid ${borderColor}`,
          outline:       'none',
          cursor:        'pointer',
          padding:       '0 4px 3px',
          transition:    'all 300ms ease',
          verticalAlign: 'baseline',
          display:       'inline-flex',
          alignItems:    'baseline',
          gap:           '5px',
        }}
      >
        {value || placeholder}
        <svg
          width="9" height="5" viewBox="0 0 9 5" fill="none"
          style={{
            transform:  open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 300ms ease',
            opacity:    0.4,
            alignSelf:  'center',
            flexShrink: 0,
          }}
        >
          <path
            d="M1 1L4.5 4.5L8 1"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
 
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8,  scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0,   scaleY: 1    }}
            exit={{    opacity: 0, y: -8,  scaleY: 0.95 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position:        'absolute',
              top:             'calc(100% + 12px)',
              left:            0,
              transformOrigin: 'top center',
              backgroundColor: '#F4F5F2',
              border:          '1px solid rgba(45,60,104,0.10)',
              boxShadow:       '0 24px 60px rgba(22,32,55,0.08)',
              zIndex:          200,
              minWidth:        '190px',
              padding:         '6px 0',
            }}
          >
            {options.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                onMouseEnter={e => { e.currentTarget.style.color = '#B08D57'; }}
                onMouseLeave={e => { e.currentTarget.style.color = value === opt ? '#B08D57' : '#2D3C68'; }}
                style={{
                  display:       'block',
                  width:         '100%',
                  textAlign:     'left',
                  padding:       '10px 22px',
                  fontFamily:    'Switzer',
                  fontWeight:    300,
                  fontSize:      '13px',
                  letterSpacing: '0.02em',
                  color:         value === opt ? '#B08D57' : '#2D3C68',
                  background:    'transparent',
                  border:        'none',
                  cursor:        'pointer',
                  transition:    'color 150ms ease',
                }}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
 
/* ============================================================
   CONTACT SIDEBAR
   ============================================================ */
function ContactSidebar() {
  const contacts = [
    { label: 'Email',     value: 'hello@serenityphinisi.com' },
    { label: 'WhatsApp',  value: '+62 xxx xxxx xxxx'         },
    { label: 'Instagram', value: '@serenity.phinisi'         },
  ];
 
  return (
    <div>
      <p style={{
        fontFamily:    'Switzer',
        fontSize:      '10px',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color:         '#6A6A6A',
        marginBottom:  '24px',
      }}>
        Or reach out directly
      </p>
 
      <div style={{ marginBottom: '28px' }}>
        <p style={{
          fontFamily:    'Switzer',
          fontWeight:    500,
          fontSize:      '14px',
          color:         '#2D3C68',
          marginBottom:  '4px',
          letterSpacing: '-0.01em',
        }}>
          Alexandra Wira
        </p>
        <p style={{
          fontFamily:    'Switzer',
          fontWeight:    300,
          fontSize:      '12px',
          color:         '#6A6A6A',
          letterSpacing: '0.04em',
        }}>
          Guest Experience Manager
        </p>
      </div>
 
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {contacts.map(({ label, value }) => (
          <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
            <span style={{
              fontFamily:    'Switzer',
              fontSize:      '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         '#6A6A6A',
              minWidth:      '72px',
              flexShrink:    0,
            }}>
              {label}
            </span>
            <span style={{
              fontFamily: 'Switzer',
              fontWeight: 300,
              fontSize:   '13px',
              color:      '#2D3C68',
              lineHeight: 1.5,
            }}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
 
/* ============================================================
   MAIN SECTION
   ============================================================ */
function ContactForm() {
  const [fields, setFields] = useState({
    name:        '',
    email:       '',
    phone:       '',
    destination: '',
    duration:    '',
    guests:      '',
    dates:       '',
    message:     '',
  });
  const [submitted,       setSubmitted]       = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
 
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const linesRef   = useRef([]);
 
  const update   = key => val => setFields(f => ({ ...f, [key]: val }));
  const addRef   = i   => el  => { linesRef.current[i] = el; };
  const hasErrors = REQUIRED.some(k => !fields[k]);
 
  /* Inject Sumba Ikat keyframe once */
  useEffect(() => {
    if (document.getElementById('serenity-ikat-kf')) return;
    const s = document.createElement('style');
    s.id = 'serenity-ikat-kf';
    s.textContent = '@keyframes ikatRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}';
    document.head.appendChild(s);
  }, []);
 
  /* Stagger reveal on scroll enter */
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 
    if (reduce) {
      gsap.set(linesRef.current.filter(Boolean), { opacity: 1, y: 0 });
      return;
    }
 
    const lines = linesRef.current.filter(Boolean);
    gsap.set(lines, { opacity: 0, y: 18 });
 
    triggerRef.current = ScrollTrigger.create({
      trigger: sectionRef.current,
      start:   'top 72%',
      onEnter: () => {
        gsap.to(lines, {
          opacity:  1,
          y:        0,
          duration: 0.9,
          stagger:  0.1,
          ease:     [0.22, 1, 0.36, 1],
        });
      },
      once: true,
    });
 
    return () => { triggerRef.current?.kill(); };
  }, []);
 
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (hasErrors) return;
    setSubmitted(true);
  };
 
  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#F4F5F2', padding: '48px 0 140px' }}
    >
      {/* FIX 1 — single padding system, Tailwind only */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14">
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px]"
          style={{ gap: '64px', alignItems: 'start' }}
        >
 
          {/* ─── LEFT: CONVERSATIONAL FORM ────────────── */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{
                  fontFamily:    'Gambarino',
                  fontSize:      'clamp(20px, 2.2vw, 28px)',
                  lineHeight:    1.95,
                  letterSpacing: '-0.02em',
                  color:         '#2D3C68',
                }}>
 
                  {/* 01 — Name */}
                  <div ref={addRef(0)}>
                    My name is{' '}
                    <InlineInput
                      value={fields.name}
                      onChange={update('name')}
                      placeholder="your name"
                      error={submitAttempted}
                    />
                    ,
                  </div>
 
                  {/* 02 — Email */}
                  <div ref={addRef(1)}>
                    and you can reach me at{' '}
                    <InlineInput
                      value={fields.email}
                      onChange={update('email')}
                      placeholder="your email"
                      type="email"
                      error={submitAttempted}
                    />
                    .
                  </div>
 
                  {/* 03 — Phone optional, visually subdued */}
                  <div
                    ref={addRef(2)}
                    style={{ fontSize: 'clamp(14px, 1.3vw, 17px)', opacity: 0.48, marginTop: '4px', lineHeight: 1.6 }}
                  >
                    <InlineInput
                      value={fields.phone}
                      onChange={update('phone')}
                      placeholder="WhatsApp or phone — optional"
                      type="tel"
                    />
                  </div>
 
                  {/* 04 — Destination */}
                  <div ref={addRef(3)} style={{ marginTop: '36px' }}>
                    I'm dreaming of sailing through{' '}
                    <InlineSelect
                      value={fields.destination}
                      onChange={update('destination')}
                      placeholder="where"
                      options={['Raja Ampat', 'Labuan Bajo', 'Both', 'Not sure yet']}
                      error={submitAttempted}
                    />
                  </div>
 
                  {/* 05 — Duration + Guests */}
                  <div ref={addRef(4)}>
                    for{' '}
                    <InlineSelect
                      value={fields.duration}
                      onChange={update('duration')}
                      placeholder="how long"
                      options={['5–7 nights', '7–10 nights', '10+ nights', 'Not sure yet']}
                      error={submitAttempted}
                    />
                    , with{' '}
                    <InlineSelect
                      value={fields.guests}
                      onChange={update('guests')}
                      placeholder="how many"
                      options={['1–4 guests', '5–8 guests', '9–12 guests']}
                      error={submitAttempted}
                    />
                    {' '}aboard.
                  </div>
 
                  {/* 06 — Dates */}
                  <div ref={addRef(5)} style={{ marginTop: '36px' }}>
                    I'm thinking of{' '}
                    <InlineInput
                      value={fields.dates}
                      onChange={update('dates')}
                      placeholder="dates or rough window"
                      error={submitAttempted}
                    />
                    {' '}as a departure window.
                  </div>
 
                  {/* 07 — Message */}
                  <div ref={addRef(6)} style={{ marginTop: '44px' }}>
                    <textarea
                      value={fields.message}
                      onChange={e => update('message')(e.target.value)}
                      placeholder="Anything else we should know."
                      rows={3}
                      style={{
                        width:         '100%',
                        fontFamily:    'Gambarino',
                        fontSize:      'clamp(20px, 2.2vw, 28px)',
                        lineHeight:    1.7,
                        letterSpacing: '-0.02em',
                        color:         '#2D3C68',
                        background:    'transparent',
                        border:        'none',
                        borderBottom:  '1.5px solid rgba(45,60,104,0.16)',
                        outline:       'none',
                        resize:        'none',
                        padding:       '0 0 10px 0',
                        display:       'block',
                      }}
                    />
                  </div>
                </div>
 
                {/* SUBMIT */}
                <div ref={addRef(7)} style={{ marginTop: '56px' }}>
                  <button
                    type="submit"
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#B08D57'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2D3C68'; }}
                    style={{
                      fontFamily:      'Switzer',
                      fontWeight:      400,
                      fontSize:        '11px',
                      letterSpacing:   '0.28em',
                      textTransform:   'uppercase',
                      color:           '#F4F5F2',
                      backgroundColor: '#2D3C68',
                      border:          'none',
                      padding:         '17px 52px',
                      cursor:          'pointer',
                      transition:      'background-color 500ms ease',
                      display:         'block',
                    }}
                  >
                    Start the Conversation
                  </button>
 
                  {/* FIX 3 — validation feedback */}
                  <AnimatePresence>
                    {submitAttempted && hasErrors && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0  }}
                        exit={{    opacity: 0         }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          fontFamily:    'Switzer',
                          fontWeight:    300,
                          fontSize:      '12px',
                          letterSpacing: '0.03em',
                          color:         '#C66A4A',
                          marginTop:     '14px',
                        }}
                      >
                        Please complete the highlighted fields above.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.form>
            ) : (
              /* ─── SUCCESS STATE ─────────────────────── */
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ paddingTop: '16px' }}
              >
                <p style={{
                  fontFamily:    'Gambarino',
                  fontSize:      'clamp(26px, 3vw, 44px)',
                  lineHeight:    1.2,
                  letterSpacing: '-0.03em',
                  color:         '#2D3C68',
                }}>
                  Thank you, {fields.name}.<br />
                  Alexandra will be<br />
                  in touch shortly.
                </p>
                <div style={{
                  width:           '48px',
                  height:          '1px',
                  backgroundColor: '#B08D57',
                  marginTop:       '36px',
                }} />
              </motion.div>
            )}
          </AnimatePresence>
 
          {/* ─── RIGHT: SIDEBAR + SUMBA IKAT ──────────── */}
          {/* FIX 2 — sticky via Tailwind only, no conflicting inline position */}
          <div className="md:sticky top-[120px] relative">
            <ContactSidebar />
 
            {/* FIX 4 — hidden on mobile, absolute bleed causes overflow on single col */}
            <div
              aria-hidden="true"
              className="hidden md:block"
              style={{
                position:      'absolute',
                bottom:        '-80px',
                right:         '-32px',
                width:         '180px',
                height:        '180px',
                opacity:       0.06,
                pointerEvents: 'none',
                animation:     'ikatRotate 120s linear infinite',
              }}
            >
              <img
                src="https://res.cloudinary.com/dombq6plz/image/upload/v1778486588/ChatGPT_Image_May_11_2026_03_01_56_PM_1_v2exmt.png"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
}
