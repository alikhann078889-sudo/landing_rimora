import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RIMORA — Independent Creative Studio',
  description:
    'Rimora is an independent creative brand building meaningful digital experiences through thoughtful design, creativity, and innovation.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
