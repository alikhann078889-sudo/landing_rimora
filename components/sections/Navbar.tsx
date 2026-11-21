'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { nav, site } from '@/lib/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-border bg-background/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground">
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-[13px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 border border-border px-4 py-2 text-[12px] uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background md:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-9 w-9 items-center justify-center border border-border text-foreground md:hidden"
          >
            {open ? '×' : '≡'}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-500 md:hidden ${
          open ? 'max-h-80' : 'max-h-0 border-t-0'
        }`}
      >
        <ul className="space-y-1 px-6 py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm uppercase tracking-[0.2em] text-muted hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-1.5 border border-border px-4 py-2 text-[12px] uppercase tracking-[0.18em] text-foreground"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
