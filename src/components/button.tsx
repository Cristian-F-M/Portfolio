import { twMerge } from 'tailwind-merge'
import Loader from './loader'

interface ButtonProps extends React.ComponentProps<'button'> {
	variant?: 'primary' | 'secondary' | 'custom' | 'glow'
	showLoader?: boolean
	loading?: boolean
}

export default function Button({
	children,
	className,
	type = 'button',
	variant = 'primary',
	showLoader,
	loading,
	...props
}: ButtonProps) {
	const commonClasses = 'px-6 py-3 rounded cursor-pointer relative'
	const primaryClasses =
		'bg-primary text-text-on-primary hover:bg-primary-hover active:bg-primary-pressed'
	const secondaryClasses =
		'border border-border-strong bg-transparent hover:bg-surface-raised active:bg-surface-soft'
	const glowClasses = 'button-glow'

	let finalClasses = ''

	if (variant === 'primary') finalClasses = primaryClasses
	if (variant === 'secondary') finalClasses = secondaryClasses
	if (variant === 'glow') finalClasses = glowClasses
	if (variant === 'custom') finalClasses = 'cursor-pointer'

	finalClasses = twMerge(variant !== 'custom' && commonClasses, finalClasses)

	return (
		<button className={twMerge(finalClasses, className)} type={type} {...props}>
			<div
				className={twMerge(
					'size-full absolute z-5 inset-0 flex flex-col items-center justify-center pointer-events-none',
					loading && '[&_span]:scale-y-100'
				)}>
				<span className="block w-full h-1/2 bg-overlay/50 backdrop-blur-xs scale-y-0 origin-top transition-all duration-200 ease-in-out"></span>
				<span className="block w-full h-1/2 bg-overlay/50 backdrop-blur-xs scale-y-0 origin-bottom transition-all duration-200 ease-in-out"></span>
				<Loader className={loading ? 'opacity-100' : 'opacity-0'} />
			</div>
			{children}
		</button>
	)
}