'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const COLORS = {
  maritimeBlue: '#2D3C68',
  sailWhite: '#F4F5F2',
  terracotta: '#C66A4A',
  teak: '#8B6A4F',
  brass: '#B08D57',
  footer: '#ECEDE9',
  dark: '#1A1A1A',
  textSecondary: '#5C5C5C',
  textMuted: '#6A6A6A',
}

const ease = [0.22, 1, 0.36, 1]

/* ─── FONTS (inject via head in layout.jsx) ─────────────────────────────────
   Gambarino: https://fonts.cdnfonts.com/css/gambarino
   Switzer:   https://api.fontshare.com/v2/css?f[]=switzer@300,400,700&display=swap
──────────────────────────────────────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['Yacht', 'Destination', 'Experience', 'Rates', 'About']

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 56px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.6s ease, backdrop-filter 0.6s ease',
          background: scrolled
            ? 'rgba(26,26,26,0.82)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled
            ? '0.5px solid rgba(176,141,87,0.15)'
            : '0.5px solid transparent',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <span style={{
            fontFamily: 'Gambarino, serif',
            fontSize: '20px',
            color: COLORS.sailWhite,
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}>
            SERENITY
          </span>
          <span style={{
            fontFamily: 'Switzer, sans-serif',
            fontSize: '9px',
            letterSpacing: '0.28em',
            color: COLORS.brass,
            fontWeight: 400,
            textTransform: 'uppercase',
          }}>
            PHINISI
          </span>
        </div>

        {/* Desktop links */}
        <div style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
        }}>
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'Switzer, sans-serif',
                fontSize: '12px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(244,245,242,0.7)',
                textDecoration: 'none',
                fontWeight: 400,
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.color = COLORS.brass}
              onMouseLeave={e => e.target.style.color = 'rgba(244,245,242,0.7)'}
            >
              {link}
            </a>
          ))}

          <a
            href="#contact"
            style={{
              fontFamily: 'Switzer, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: COLORS.dark,
              background: COLORS.brass,
              padding: '10px 22px',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Enquire
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Open menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '24px',
              height: '1px',
              background: COLORS.sailWhite,
            }} />
          ))}
        </button>
      </motion.nav>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: COLORS.dark,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px',
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '28px',
                right: '32px',
                background: 'none',
                border: 'none',
                color: COLORS.sailWhite,
                fontSize: '28px',
                cursor: 'pointer',
                fontFamily: 'Switzer, sans-serif',
                fontWeight: 300,
              }}
            >
              ×
            </button>
            {[...navLinks, 'Contact'].map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.6, ease }}
                style={{
                  fontFamily: 'Gambarino, serif',
                  fontSize: '42px',
                  color: COLORS.sailWhite,
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => e.target.style.color = COLORS.brass}
                onMouseLeave={e => e.target.style.color = COLORS.sailWhite}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          nav > div:nth-child(2) { display: none !important; }
          nav > button { display: flex !important; }
        }
      `}</style>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO — IMMERSION
═══════════════════════════════════════════════════════════════════════════ */
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        overflow: 'hidden',
        background: COLORS.dark,
      }}
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          y: bgY,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1800&q=85&fit=crop"
          alt="Serenity Phinisi sailing through Indonesian waters"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 60%',
          }}
        />
        {/* Multi-layer overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to top, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.3) 40%, transparent 70%),
            linear-gradient(to right, rgba(45,60,104,0.35) 0%, transparent 60%),
            radial-gradient(ellipse at 30% 60%, rgba(45,60,104,0.2) 0%, transparent 55%)
          `,
        }} />
      </motion.div>

      {/* Atmospheric grain overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '14%',
          left: '56px',
          right: '56px',
          y: contentY,
          opacity,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '20px',
          }}
        >
          <div style={{
            width: '32px',
            height: '0.5px',
            background: COLORS.brass,
          }} />
          <span style={{
            fontFamily: 'Switzer, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: COLORS.brass,
            fontWeight: 400,
          }}>
            Indonesia · 2025
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.5, ease }}
          style={{
            fontFamily: 'Gambarino, serif',
            fontSize: 'clamp(64px, 9vw, 112px)',
            color: COLORS.sailWhite,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            fontWeight: 400,
            margin: 0,
            maxWidth: '680px',
          }}
        >
          Freedom
          <br />
          <span style={{ color: COLORS.brass }}>at Sea</span>
        </motion.h1>

        {/* Sub + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.85, ease }}
          style={{
            marginTop: '28px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <p style={{
            fontFamily: 'Switzer, sans-serif',
            fontSize: '15px',
            color: 'rgba(244,245,242,0.65)',
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: '380px',
            margin: 0,
          }}>
            A contemporary phinisi designed for<br />
            intimate ocean adventures.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {/* Scroll indicator */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}>
              <div style={{
                width: '0.5px',
                height: '48px',
                background: 'rgba(244,245,242,0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <motion.div
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: COLORS.brass,
                  }}
                />
              </div>
              <span style={{
                fontFamily: 'Switzer, sans-serif',
                fontSize: '9px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'rgba(244,245,242,0.35)',
              }}>
                Scroll
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Top-right vessel tag */}
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 1.1, ease }}
        style={{
          position: 'absolute',
          top: '96px',
          right: '56px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '4px',
        }}
      >
        {[
          '40.75 m',
          '12 guests',
          '10 crew',
        ].map((stat, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Switzer, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: 'rgba(244,245,242,0.4)',
              fontWeight: 300,
            }}
          >
            {stat}
          </span>
        ))}
      </motion.div>

      {/* Bottom atmospheric bridge */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '180px',
        background: `linear-gradient(to bottom, transparent, ${COLORS.sailWhite})`,
        pointerEvents: 'none',
      }} />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PHILOSOPHY BREAK — BREAKING
═══════════════════════════════════════════════════════════════════════════ */
function PhilosophyBreak() {
  const ref = useRef(null)

  return (
    <section
      ref={ref}
      style={{
        background: COLORS.sailWhite,
        padding: '120px 56px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sumba Ikat pattern — point 1 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232D3C68' fill-opacity='0.04'%3E%3Cpath d='M20 0l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
      }}>
        {/* Brass line top */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease }}
          style={{
            width: '48px',
            height: '0.5px',
            background: COLORS.brass,
            margin: '0 auto 36px',
            transformOrigin: 'left',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
          style={{
            fontFamily: 'Gambarino, serif',
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            color: COLORS.maritimeBlue,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            fontWeight: 400,
            margin: 0,
          }}
        >
          Not simply a vessel.
          <br />
          <span style={{ color: COLORS.teak }}>The freedom to explore it.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, delay: 0.35, ease }}
          style={{
            fontFamily: 'Switzer, sans-serif',
            fontSize: '15px',
            color: COLORS.textSecondary,
            fontWeight: 300,
            lineHeight: 1.8,
            margin: '28px auto 0',
            maxWidth: '440px',
          }}
        >
          Live at sea, not travel across it. An intimate journey through
          the islands, shaped by exploration and shared moments on the water.
        </motion.p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   VESSEL STATS BREAK — BREAKING VARIANT C
═══════════════════════════════════════════════════════════════════════════ */
function VesselStats() {
  const stats = [
    { value: '40.75m', label: 'Length' },
    { value: '4', label: 'Cabins' },
    { value: '12', label: 'Guests' },
    { value: '10', label: 'Crew' },
  ]

  return (
    <section style={{
      background: COLORS.maritimeBlue,
      padding: '80px 56px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Atmospheric radial */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 68% 22%, rgba(176,141,87,0.08) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2px',
      }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: i * 0.1, ease }}
            style={{
              padding: '40px 32px',
              borderLeft: i === 0 ? 'none' : '0.5px solid rgba(244,245,242,0.1)',
              textAlign: 'center',
            }}
          >
            <div style={{
              fontFamily: 'Gambarino, serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              color: COLORS.sailWhite,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              fontWeight: 400,
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: 'Switzer, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: COLORS.brass,
              marginTop: '10px',
              fontWeight: 400,
            }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Atmospheric bridge bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '80px',
        background: `linear-gradient(to bottom, transparent, ${COLORS.dark})`,
        pointerEvents: 'none',
      }} />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PREVIEW TILES — FRAMING
═══════════════════════════════════════════════════════════════════════════ */
const tiles = [
  {
    id: 'yacht',
    label: 'The Yacht',
    headline: 'Built by hand.\nTanah Beru, 2025.',
    img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=900&q=80&fit=crop',
    href: '#yacht',
    tall: true,
  },
  {
    id: 'destination',
    label: 'Destinations',
    headline: 'Komodo.\nRaja Ampat.',
    img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=80&fit=crop',
    href: '#destination',
    tall: false,
  },
  {
    id: 'experience',
    label: 'Experience',
    headline: 'No schedules.\nJust the sea.',
    img: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?w=900&q=80&fit=crop',
    href: '#experience',
    tall: false,
  },
  {
    id: 'crew',
    label: 'The Crew',
    headline: 'They know every\ncurrent by name.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&fit=crop',
    href: '#about',
    tall: true,
  },
]

function PreviewTile({ tile, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={tile.href}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, delay: index * 0.12, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'block',
        gridRow: tile.tall ? 'span 2' : 'span 1',
        overflow: 'hidden',
        textDecoration: 'none',
        cursor: 'pointer',
        minHeight: tile.tall ? '560px' : '260px',
      }}
    >
      {/* Image */}
      <motion.img
        src={tile.img}
        alt={tile.label}
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.9, ease }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          position: 'absolute',
          inset: 0,
        }}
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(26,26,26,0.88) 0%, rgba(26,26,26,0.2) 60%, transparent 100%)'
          : 'linear-gradient(to top, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.1) 60%, transparent 100%)',
        transition: 'background 0.6s ease',
      }} />

      {/* Content */}
      <div style={{
        position: 'absolute',
        bottom: '28px',
        left: '28px',
        right: '28px',
      }}>
        <div style={{
          fontFamily: 'Switzer, sans-serif',
          fontSize: '9px',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: COLORS.brass,
          marginBottom: '8px',
        }}>
          {tile.label}
        </div>
        <div style={{
          fontFamily: 'Gambarino, serif',
          fontSize: tile.tall ? 'clamp(24px, 2.5vw, 32px)' : '22px',
          color: COLORS.sailWhite,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          whiteSpace: 'pre-line',
        }}>
          {tile.headline}
        </div>

        {/* Arrow on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
          transition={{ duration: 0.4, ease }}
          style={{
            marginTop: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: COLORS.brass,
          }}
        >
          <span style={{
            fontFamily: 'Switzer, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>
            Explore
          </span>
          <span style={{ fontSize: '14px' }}>→</span>
        </motion.div>
      </div>
    </motion.a>
  )
}

function PreviewTiles() {
  return (
    <section style={{
      background: COLORS.dark,
      padding: '0 0 120px',
      position: 'relative',
    }}>
      {/* Top bridge from VesselStats */}
      <div style={{
        height: '80px',
        background: `linear-gradient(to bottom, ${COLORS.dark}, ${COLORS.dark})`,
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 56px',
      }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div style={{ width: '28px', height: '0.5px', background: COLORS.brass }} />
          <span style={{
            fontFamily: 'Switzer, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: COLORS.brass,
          }}>
            Discover Serenity
          </span>
        </motion.div>

        {/* Grid — 2 col, asymmetric rows */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '3px',
        }}>
          {tiles.map((tile, i) => (
            <PreviewTile key={tile.id} tile={tile} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom bridge */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '120px',
        background: `linear-gradient(to bottom, transparent, ${COLORS.sailWhite})`,
        pointerEvents: 'none',
      }} />
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CTA SECTION — CONVERSION
═══════════════════════════════════════════════════════════════════════════ */
function CtaSection() {
  return (
    <section
      id="contact"
      style={{
        background: COLORS.sailWhite,
        padding: '140px 56px 160px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sumba Ikat point 2 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232D3C68' fill-opacity='0.035'%3E%3Cpath d='M20 0l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        pointerEvents: 'none',
      }} />

      {/* Maritime blue radial accent */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: `radial-gradient(circle, rgba(45,60,104,0.06) 0%, transparent 65%)`,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
      }}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease }}
          style={{
            width: '48px',
            height: '0.5px',
            background: COLORS.brass,
            margin: '0 auto 40px',
            transformOrigin: 'left',
          }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1, ease }}
          style={{
            fontFamily: 'Gambarino, serif',
            fontSize: 'clamp(36px, 5vw, 60px)',
            color: COLORS.maritimeBlue,
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            fontWeight: 400,
            margin: 0,
          }}
        >
          Your voyage begins
          <br />
          <span style={{ color: COLORS.teak }}>with a conversation.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.28, ease }}
          style={{
            fontFamily: 'Switzer, sans-serif',
            fontSize: '15px',
            color: COLORS.textSecondary,
            fontWeight: 300,
            lineHeight: 1.8,
            margin: '28px auto 0',
            maxWidth: '400px',
          }}
        >
          Routes shaped by season, sea, and curiosity.
          Reach out and we'll chart something together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.44, ease }}
          style={{
            marginTop: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="mailto:hello@serenityphinisi.com"
            style={{
              fontFamily: 'Switzer, sans-serif',
              fontSize: '12px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: COLORS.sailWhite,
              background: COLORS.maritimeBlue,
              padding: '16px 40px',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'inline-block',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = COLORS.dark}
            onMouseLeave={e => e.currentTarget.style.background = COLORS.maritimeBlue}
          >
            Begin Your Voyage
          </a>

          <a
            href="https://instagram.com/serenity.phinisi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Switzer, sans-serif',
              fontSize: '12px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: COLORS.maritimeBlue,
              border: `0.5px solid ${COLORS.maritimeBlue}`,
              padding: '15px 32px',
              textDecoration: 'none',
              fontWeight: 400,
              display: 'inline-block',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            @serenity.phinisi
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.6, ease }}
          style={{
            fontFamily: 'Switzer, sans-serif',
            fontSize: '12px',
            color: COLORS.textMuted,
            marginTop: '24px',
            fontWeight: 300,
            letterSpacing: '0.05em',
          }}
        >
          hello@serenityphinisi.com · Alexandra Wira, Guest Experience
        </motion.p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════════════════════ */
function Footer() {
  const links = ['Yacht', 'Destination', 'Experience', 'Rates & Schedule', 'About', 'Contact']

  return (
    <footer style={{
      background: COLORS.footer,
      padding: '56px 56px 40px',
      borderTop: `0.5px solid rgba(45,60,104,0.12)`,
    }}>
      {/* Sumba Ikat point 3 — divider */}
      <div style={{
        width: '100%',
        height: '1px',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='1' viewBox='0 0 20 1' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='4' height='1' fill='%232D3C68' fill-opacity='0.15'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat-x',
        marginBottom: '48px',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '40px',
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: 'Gambarino, serif',
            fontSize: '24px',
            color: COLORS.maritimeBlue,
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}>
            SERENITY
          </div>
          <div style={{
            fontFamily: 'Switzer, sans-serif',
            fontSize: '9px',
            letterSpacing: '0.28em',
            color: COLORS.brass,
            textTransform: 'uppercase',
            marginTop: '3px',
          }}>
            PHINISI
          </div>
          <p style={{
            fontFamily: 'Switzer, sans-serif',
            fontSize: '13px',
            color: COLORS.textMuted,
            fontWeight: 300,
            lineHeight: 1.7,
            marginTop: '16px',
            maxWidth: '240px',
          }}>
            Built 2025. Tanah Beru &amp; Bira,
            <br />South Sulawesi, Indonesia.
          </p>
        </div>

        {/* Nav links */}
        <div style={{
          display: 'flex',
          gap: '48px',
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{
              fontFamily: 'Switzer, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: COLORS.brass,
              marginBottom: '16px',
              fontWeight: 500,
            }}>
              Navigate
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                  style={{
                    fontFamily: 'Switzer, sans-serif',
                    fontSize: '13px',
                    color: COLORS.textSecondary,
                    textDecoration: 'none',
                    fontWeight: 300,
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = COLORS.maritimeBlue}
                  onMouseLeave={e => e.target.style.color = COLORS.textSecondary}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'Switzer, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: COLORS.brass,
              marginBottom: '16px',
              fontWeight: 500,
            }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'hello@serenityphinisi.com', href: 'mailto:hello@serenityphinisi.com' },
                { label: '@serenity.phinisi', href: 'https://instagram.com/serenity.phinisi' },
                { label: 'www.serenityphinisi.com', href: '#' },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    fontFamily: 'Switzer, sans-serif',
                    fontSize: '13px',
                    color: COLORS.textSecondary,
                    textDecoration: 'none',
                    fontWeight: 300,
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = COLORS.maritimeBlue}
                  onMouseLeave={e => e.target.style.color = COLORS.textSecondary}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1280px',
        margin: '48px auto 0',
        paddingTop: '24px',
        borderTop: '0.5px solid rgba(45,60,104,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <span style={{
          fontFamily: 'Switzer, sans-serif',
          fontSize: '11px',
          color: COLORS.textMuted,
          fontWeight: 300,
          letterSpacing: '0.05em',
        }}>
          © 2025 Serenity Phinisi. All rights reserved.
        </span>
        <span style={{
          fontFamily: 'Switzer, sans-serif',
          fontSize: '11px',
          color: 'rgba(106,106,106,0.5)',
          fontWeight: 300,
          letterSpacing: '0.05em',
        }}>
          Indonesia
        </span>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE ROOT
═══════════════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <main style={{ background: COLORS.dark, overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <PhilosophyBreak />
      <VesselStats />
      <PreviewTiles />
      <CtaSection />
      <Footer />
    </main>
  )
}