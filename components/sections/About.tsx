import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { about } from '@/lib/content'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <SectionHeading eyebrow="About" title="Designed to Stand Out." />

        <div className="mt-16 grid items-start gap-12 md:mt-24 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              {about.body}
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] uppercase tracking-[0.25em] text-muted">{stat.label}</dt>
                  <dd className="mt-2 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-5 md:pt-16">
            <figure>
              <div className="overflow-hidden bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={about.image}
                  alt={about.imageAlt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover grayscale"
                />
              </div>
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.25em] text-muted">
                {about.imageCaption}
              </figcaption>
            </figure>
            <p className="mt-8 border-l border-border pl-5 text-sm italic leading-relaxed text-muted">
              {about.quote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
