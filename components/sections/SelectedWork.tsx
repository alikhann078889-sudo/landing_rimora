'use client'

import { useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/content'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

export default function SelectedWork() {
  const reduce = useReducedMotion()

  return (
    <section id="work" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Portfolio" title="Selected Work." />
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              A selection of projects across identity, digital, and direction — chosen for what they say quietly.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={reduce ? 0 : (i % 2) * 0.1}>
              <a href={project.href} className="group block" aria-label={`View project: ${project.title}`}>
                <div className="relative overflow-hidden bg-surface">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:opacity-0"
                  />
                  <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-border pb-6">
                  <div>
                    <h3 className="display-sm uppercase">{project.title}</h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted">{project.category}</p>
                  </div>
                  <span className="shrink-0 text-sm text-muted">{project.year}</span>
                </div>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{project.description}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
