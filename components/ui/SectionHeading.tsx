import Reveal from '@/components/ui/Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  className?: string
}

export default function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-xl mt-6 uppercase">{title}</h2>
    </Reveal>
  )
}
