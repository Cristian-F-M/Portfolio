import { NavLink, type NavLinkProps } from 'react-router'
import { twMerge } from 'tailwind-merge'

type RouterLinkProps = {
	router: true
} & NavLinkProps

type HTMLLinkProps = {
	router?: false
} & React.ComponentProps<'a'>

type LinkProps = RouterLinkProps | HTMLLinkProps

export function Link({ className, ...props }: LinkProps) {
	const commonClassNames =
		'text-text-muted hover:text-text-secondary text-sm cursor-pointer'
	const cn = typeof className === 'string' ? className : ''

	if (!props.router)
		return (
			<a
				className={twMerge(commonClassNames, cn)}
				rel="noopener noreferrer"
				href={props.href}
				{...props}>
				{props.children}
			</a>
		)

	return (
		<NavLink
			className={(props) => {
				const cn =
					typeof className === 'function' ? className(props) : className
				return twMerge(commonClassNames, cn)
			}}
			end
			{...props}>
			{props.children}
		</NavLink>
	)
}