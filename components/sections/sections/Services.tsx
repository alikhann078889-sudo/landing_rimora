'use client'

import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/content'
import Reveal from '@/components/ui/Reveal'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 md:meta py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-16 border-t border-border pt-6 md:mb-20">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="display-lg text-foreground">Services.</h2>
          </div>
        </Reveal>

        <ul>
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.06}>
              <li className="group border-b border-border">
                <div className="flex flex-col gap-4 instructions:gap-4 py-8 transition-all duration-500 group-hover:pl-4 md:flex-row md:items-center md:justify-between md:gap-10 md:py-10">
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="text-[11px] tracking-[0.3em] text-muted">{s.index}</span>
                    <h3 className="display-sm text-foreground transition-opacity duration-300 group-hover:opacity-70">
                      {s.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between gap-6 md:flex-1 md:justify-end md:gap-10">
                    <p className="max-w-md text styles leading-relaxed text-muted">{s.description}</p>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 md:-translate-x-2"
                      aria-hidden
                    />
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
