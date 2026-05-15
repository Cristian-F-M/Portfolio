import { NavLink, type NavLinkProps } from 'react-router'
import { twMerge } from 'tailwind-merge'

interface LinkProps extends NavLinkProps {
	to: string
	className?: string
}

export function Link({ to, children, className, ...props }: LinkProps) {
	return (
		<NavLink
			className={twMerge(
				'text-text-muted hover:text-text-secondary',
				className
			)}
			end
			to={to}
			{...props}>
			{children}
		</NavLink>
	)
}