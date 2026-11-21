import { ArrowUp } from 'lucide-react'
import { footer } from '@/lib/content'
import { site } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground">
              {site.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{footer.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted">Menu</p>
            <ul className="mt-4 space-y-2">
              {footer.menu.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted">Social</p>
            <ul className="mt-4 space-y-2">
              {footer.socials.map((s) => (
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

          <a
            href="#top"
            className="group inline-flex items-center gap-3 self-start border border-border px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            Back to Top
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Rimora. All rights reserved.</p>
          <p>Designed &amp; built with intent.</p>
        </div>
        <p className="sr-only">Rimora — independent creative studio.</p>
      </div>
    </footer>
  )
}
