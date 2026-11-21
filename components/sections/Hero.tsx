'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { hero } from '@/lib/content'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease, delay },
        }

  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      {/* faint radial glow for depth — stays monochrome */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 38%, rgba(255,255,255,0.06), transparent 70%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-24 text-center md:pt-36">
        <motion.p {...fade(0)} className="eyebrow">
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          {...fade(0.12)}
          className="display-xl mx-auto mt-8 max-w-5xl uppercase"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          {...fade(0.24)}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          {hero.description}
        </motion.p>

        <motion.div {...fade(0.36)} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="inline-flex w-full items-center justify-center gap-2 bg-foreground px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-background transition-colors duration-300 hover:bg-muted sm:w-auto"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex w-full items-center justify-center gap-2 border border-border px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:border-foreground sm:w-auto"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#work"
        aria-label="Scroll to selected work"
        {...fade(0.6)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <span className="flex flex-col items-center gap-2 text-muted transition-colors duration-300 hover:text-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </span>
      </motion.a>
    </section>
  )
}
