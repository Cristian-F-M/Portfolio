import { useCallback } from 'react'
import { NavLink, type NavLinkProps } from 'react-router'
import { twMerge } from 'tailwind-merge'

type RouterLinkProps = {
	router: true
} & NavLinkProps

type HTMLLinkProps = {
	router?: false
} & React.ComponentProps<'a'>

type LinkProps = RouterLinkProps | HTMLLinkProps

export function Link({ className, onClick, ...props }: LinkProps) {
	const commonClassNames =
		'text-text-muted hover:text-text-secondary text-sm cursor-pointer'
	const cn = typeof className === 'string' ? className : ''

	const handleClick = useCallback(
		(event: React.MouseEvent<HTMLAnchorElement>) => {
			onClick?.(event)

			const target = event.currentTarget as HTMLAnchorElement
			const href = target.getAttribute('href') ?? ''
			const [_, hash] = href.split('#')

			if (!hash) {
				window.scrollTo({
					top: 0
				})
				return
			}

			const el = document.getElementById(hash)

			if (!el) return

			el.scrollIntoView({
				behavior: 'smooth'
			})
		},
		[onClick]
	)

	if (!props.router)
		return (
			<a
				onClick={onClick}
				className={twMerge(commonClassNames, cn)}
				rel="noopener noreferrer"
				href={props.href}
				{...props}>
				{props.children}
			</a>
		)

	return (
		<NavLink
			onClick={handleClick}
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