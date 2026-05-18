import { twMerge } from 'tailwind-merge'

interface SelectItemProps extends React.ComponentProps<'button'> {}

export function SelectItem({ children, className, ...props }: SelectItemProps) {
	return (
		<button
			type="button"
			className={twMerge(
				'px-4 py-2 rounded-lg border border-border/40 bg-surface-soft/60 cursor-pointer hover:bg-surface-soft hover:border-border/80 transition-all text-text-muted text-sm',
				className
			)}
			{...props}>
			{children}
		</button>
	)
}