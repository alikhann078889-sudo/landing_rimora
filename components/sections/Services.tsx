'use client'

import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/content'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <SectionHeading eyebrow="Capabilities" title="Services." />

        <ul className="mt-16 border-t border-border md:mt-24">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <li className="group border-b border-border">
                <a
                  href="#contact"
                  className="flex items-center justify-between gap-6 py-8 transition-colors duration-300 md:py-10"
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="text-[11px] tracking-[0.25em] text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="display-sm uppercase transition-transform duration-500 group-hover:translate-x-2">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted lg:block">
                      {service.description}
                    </p>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-border text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
