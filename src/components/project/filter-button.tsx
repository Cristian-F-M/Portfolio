import { twMerge } from 'tailwind-merge'
import Button from '../button'

interface FilterButtonProps extends React.ComponentProps<'button'> {
	isSelected: boolean
	text: string
	count: number
}

export default function FilterButton({
	className,
	isSelected,
	text,
	count,
	...props
}: FilterButtonProps) {
	return (
		<Button
			variant={isSelected ? 'primary' : 'secondary'}
			className={twMerge("py-2 px-3 text-xs uppercase font-jet-brains h-fit", isSelected && 'bg-primary/70 hover:bg-primary-hover/70')}
			{...props}>
			{text}{' '}
			<span
				className={twMerge(
					'text-text-muted text-xs',
					isSelected && 'text-text-on-primary'
				)}>
				({count})
			</span>
		</Button>
	)
}