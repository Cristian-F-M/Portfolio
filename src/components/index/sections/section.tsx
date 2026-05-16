import { twMerge } from 'tailwind-merge'

interface SectionProps extends React.ComponentProps<'section'> {
	id: string
}

export default function Section({ id, className, children }: SectionProps) {
	return (
		<section id={id} className={twMerge('mt-20 w-full', className)}>
			{children}
		</section>
	)
}