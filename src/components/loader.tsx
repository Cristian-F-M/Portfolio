import { twMerge } from 'tailwind-merge'

export default function Loader({
	className,
	...props
}: React.ComponentProps<'span'>) {
	return (
		<span
			role="status"
			className={twMerge(
				'loader text-text-primary size-6 inline-block rounded-full border-r-4 border-r-transparent border-t-[3px] border-t-current border-solid animate-spin absolute',
				className
			)}
			{...props}
		/>
	)
}