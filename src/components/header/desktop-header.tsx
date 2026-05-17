import Logo from '@/assets/logo'
import { links } from '@/constants/links'
import { twMerge } from 'tailwind-merge'
import { Link } from '@/components/link'
import { IconMenu2 } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import { useCallback, useEffect, useRef } from 'react'
import useNav from '@/state/nav'

export default function DesktopHeader({
	className,
	...props
}: React.ComponentProps<'header'>) {
	const { t } = useTranslation()
	const { active } = useNav()
	const navRef = useRef<HTMLElement>(null)
	const navIndicatorRef = useRef<HTMLSpanElement>(null)
	let activeLinkTimeout: number | undefined

	const moveAnchorIndicator = useCallback(
		(id?: string) => {
			const link = links.find((l) => (id ? l.id === id : l.url === active))

			if (!link || !navRef.current || !navIndicatorRef.current) return

			const navRect = navRef.current.getBoundingClientRect()

			const anchor = navRef.current.querySelector(
				`a#desktop-header-${link.id}`
			) as HTMLAnchorElement | null

			if (!anchor) return

			const { width, left } = anchor.getBoundingClientRect()

			navIndicatorRef.current.style.setProperty('--indicator-w', `${width}px`)
			navIndicatorRef.current.style.setProperty(
				'--indicator-translate-x',
				`${left - navRect.left}px`
			)
			navIndicatorRef.current.setAttribute(
				'data-active',
				String(active === link.url)
			)
		},
		[active]
	)

	const onAnchorMouseEnter = useCallback(
		(event: MouseEvent) => {
			const target = event.currentTarget as HTMLAnchorElement

			clearTimeout(activeLinkTimeout)
			activeLinkTimeout = undefined
			moveAnchorIndicator(target.id)
		},
		[activeLinkTimeout, moveAnchorIndicator]
	)

	const onAnchorMouseLeave = useCallback(() => {
		activeLinkTimeout = setTimeout(() => {
			moveAnchorIndicator()
		}, 800)
	}, [moveAnchorIndicator])

	useEffect(() => {
		if (!navRef.current) return
		const anchors = navRef.current.querySelectorAll('a')

		anchors.forEach((a) => {
			a.addEventListener('mouseenter', onAnchorMouseEnter)
			a.addEventListener('mouseleave', onAnchorMouseLeave)
		})

		return () => {
			anchors.forEach((a) => {
				a.removeEventListener('mouseenter', onAnchorMouseEnter)
				a.removeEventListener('mouseleave', onAnchorMouseLeave)
			})
		}
	}, [onAnchorMouseEnter, onAnchorMouseLeave])

	// biome-ignore lint/correctness/useExhaustiveDependencies: It is necessary to move indicator every time active changes
	useEffect(() => {
		moveAnchorIndicator()
	}, [active, moveAnchorIndicator])

	return (
		<header
			className={twMerge(
				'hidden md:flex w-full mt-1 md:mt-4 bg-surface/60 p-3 rounded flex-row items-center justify-between shadow shadow-surface-soft sticky top-2 z-100 backdrop-blur-lg',
				className
			)}
			{...props}>
			<div className="uppercase font-jet-brains flex flex-row items-center gap-2">
				<Logo className="text-text-primary size-7" />
				<h4>cmorales</h4>
			</div>
			<div className="relative hidden md:block">
				<nav ref={navRef} className="flex flex-row items-center gap-4">
					{links.map(({ id, url, path }) => {
						const isActive = active === url

						return (
							<Link
								router={false}
								id={`desktop-header-${id}`}
								key={`desktop-header-${id}`}
								href={url}
								className={twMerge(
									isActive && 'text-primary hover:text-text-link'
								)}>
								{t(`index:sections.header.links.${path}`)}
							</Link>
						)
					})}
				</nav>
				<span
					ref={navIndicatorRef}
					className="bg-text-muted absolute data-[active=true]:bg-primary pointer-events-none block h-0.5 w-(--indicator-w,0px) translate-x-(--indicator-translate-x,0) scale-100"></span>
			</div>
			<button
				type="button"
				className="group cursor-pointer"
				data-open-side-menu
				data-side-menu-toggler>
				<IconMenu2 className="text-text-secondary group-hover:text-primary transition-all [--path-scale:50%] [--path-translate-x:calc(calc(100%-var(--path-scale))/2)] [&_path]:transition-all group-data-[side-menu-showed=true]:[&_path]:last:scale-x-(--path-scale) group-data-[side-menu-showed=true]:[&_path]:last:translate-x-(--path-translate-x) group-data-[side-menu-showed=true]:[&_path]:first:scale-x-(--path-scale) group-data-[side-menu-showed=true]:[&_path]:first:translate-x-(--path-translate-x)" />
			</button>
		</header>
	)
}