import { twMerge } from 'tailwind-merge'

interface BadgeProps extends React.ComponentProps<'span'> {
	variant?: 'main' | 'skill'
	ping?: boolean
}

export default function Badge({
	children,
	className,
	variant = 'main',
	ping,
	...props
}: BadgeProps) {
	const commonClassNames =
		'bg-surface-soft px-4 py-2 rounded cursor-cell size-fit border border-border-strong text-sm text-text-secondary block w-fit'

	if (variant === 'skill') {
		return (
			<span
				className={twMerge(
					commonClassNames,
					'px-2 py-1 uppercase text-xs',
					className
				)}>
				{children}
			</span>
		)
	}

	return (
		<span
			className={twMerge(
				commonClassNames,
				'flex flex-row items-center gap-1.5',
				className
			)}
			{...props}>
			{ping && (
				<span className="flex items-center justify-center size-3 bg-primary rounded-full relative">
					<span className="block absolute size-[150%] animate-ping bg-primary rounded-full"></span>
				</span>
			)}
			{children}
		</span>
	)
}