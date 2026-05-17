import { twMerge } from 'tailwind-merge'

interface InputProps extends React.ComponentProps<'input'> {
	label: string
	error?: string | null
}

export default function Input({
	id,
	name,
	label,
	error,
	...props
}: InputProps) {
	return (
		<label
			htmlFor={id}
			className="flex flex-col gap-1 has-[input:focus]:[&_span.label]:text-text-primary w-full">
			<span className="label uppercase text-text-muted text-xs md:text-xs duration-300">
				{label}
			</span>
			<input
				className="outline-none border-b-2 border-border focus:border-primary duration-300 text-sm text-text-secondary caret-primary placeholder:text-xs placeholder:text-text-muted h-8"
				id={id}
				name={name}
				{...props}
			/>

			<span
				className={twMerge(
					'text-xs mt-1 text-danger-text opacity-0 duration-150',
					error && 'opacity-100'
				)}>
				{error}
			</span>
		</label>
	)
}