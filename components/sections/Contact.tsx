'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Loader2 } from 'lucide-react'
import { contact } from '@/lib/content'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

type Status = 'idle' | 'sending' | 'sent'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  const validate = (data: FormData): Errors => {
    const next: Errors = {}
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name) next.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email address.'
    if (message.length < 10) next.message = 'A few more words would help — 10 characters minimum.'
    return next
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const next = validate(data)
    setErrors(next)

    if (Object.keys(next).length > 0) return

    setStatus('sending')
    window.setTimeout(() => {
      setStatus('sent')
      form.reset()
    }, 900)
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="grid gap-16 md:grid-cols-2 md:gap-10">
          <div>
            <SectionHeading eyebrow="Contact" title="Have Something in Mind?" />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">{contact.blurb}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={`mailto:${contact.email}`}
                className="group mt-10 inline-flex items-center gap-3 border border-border px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 border-t border-border pt-8">
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 block text-lg text-foreground underline-offset-4 hover:underline"
                >
                  {contact.email}
                </a>

                <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-muted">Social</p>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {contact.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} noValidate className="border border-border bg-background p-6 md:p-10">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-[11px] uppercase tracking-[0.25em] text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted/50 focus:border-foreground focus:outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-2 text-sm text-muted">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="text-[11px] uppercase tracking-[0.25em] text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted/50 focus:border-foreground focus:outline-none"
                    placeholder="you@studio.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-muted">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="text-[11px] uppercase tracking-[0.25em] text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    aria-invalid={Boolean(errors.message)}
                    className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted/50 focus:border-foreground focus:outline-none"
                    placeholder="Tell us about your project"
                  />
                  {errors.message && <p className="mt-2 text-sm text-muted">{errors.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-10 inline-flex w-full items-center justify-center gap-2 bg-foreground px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-background transition-colors duration-300 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {status === 'sent' && (
                <p role="status" className="mt-4 flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Thank you — we&apos;ll reply within two business days.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
