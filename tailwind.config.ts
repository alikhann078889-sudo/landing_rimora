import type { Config } from 'tailwindcss'
const v = (n: string) => `var(--${n})`
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: {
    colors: {
    background: v('background'), surface: v('surface'), foreground: v('foreground'), muted: v('muted'),
    primary: v('primary'), 'primary-foreground': v('primary-foreground'), accent: v('accent'), border: v('border'),
  },
    fontFamily: { heading: 'var(--font-heading)', body: 'var(--font-body)' },
    borderRadius: { studio: 'var(--radius)' },
    keyframes: {"spotlight":{"0%":{"opacity":"0","transform":"translate(-72%, -62%) scale(0.5)"},"100%":{"opacity":"1","transform":"translate(-50%, -40%) scale(1)"}},"scroll":{"to":{"transform":"translate(calc(-50% - 0.5rem))"}}},
    animation: {"spotlight":"spotlight 2s ease 0.75s 1 forwards","scroll":"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite"},
  } },
  plugins: [],
}
export default config
