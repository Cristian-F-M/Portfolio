import { twMerge } from 'tailwind-merge'

interface TextAreaProps extends React.ComponentProps<'textarea'> {
	label: string
	error?: string | null
}

export default function Textarea({
	id,
	label,
	name,
	error,
	...props
}: TextAreaProps) {
	return (
		<label
			htmlFor={id}
			className="flex flex-col gap-1 has-[textarea:focus]:[&_span.label]:text-text-primary">
			<span className="label uppercase text-text-muted text-xs md:text-xs duration-300">
				{label}
			</span>
			<textarea
				className="outline-none border-b-2 border-border focus:border-primary duration-300 text-sm text-text-secondary caret-primary placeholder:text-xs placeholder:text-text-muted  transition-colors resize-none field-sizing-content min-h-24 max-h-36"
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