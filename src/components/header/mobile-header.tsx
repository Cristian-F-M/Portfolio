import { twMerge } from 'tailwind-merge'
import { Link } from '@/components/link'
import { links } from '@/constants/links'
import { useTranslation } from 'react-i18next'
import { IconMenu2 } from '@tabler/icons-react'
import useNav from '@/state/nav'

export default function MobileHeader({
	className,
	...props
}: React.ComponentProps<'header'>) {
	const { t } = useTranslation()
	const { active } = useNav()

	return (
		<header
			className={twMerge(
				'md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-surface px-4 py-3 rounded-full shadow shadow-surface-soft z-100 backdrop-blur-lg flex flex-row items-center gap-4',
				className
			)}
			{...props}>
			<nav className="flex flex-row items-center gap-4 ">
				{links.map(({ id, url, icon: Icon, path }) => {
					const isActive = active === url

					return (
						<Link
							title={t(`index:sections.header.links.${path}`)}
							key={id}
							to={url}
							className={twMerge(
								'p-2 rounded-full duration-300',
								isActive && 'bg-primary shadow-[0_0_30px_8px_var(--primary)]'
							)}>
							<Icon
								className={twMerge(
									'size-5.5',
									isActive &&
										'text-text-on-primary drop-shadow-[0_0_8px_var(--text-on-primary)]'
								)}
							/>
						</Link>
					)
				})}
			</nav>
			<button
				type="button"
				className="group cursor-pointer"
				data-open-side-menu
				data-side-menu-toggler>
				<IconMenu2 className="text-text-muted group-active:text-primary transition-all [--path-scale:50%] [--path-translate-x:calc(calc(100%-var(--path-scale))/2)] [&_path]:transition-all group-data-[side-menu-showed=true]:[&_path]:last:scale-x-(--path-scale) group-data-[side-menu-showed=true]:[&_path]:last:translate-x-(--path-translate-x) group-data-[side-menu-showed=true]:[&_path]:first:scale-x-(--path-scale) group-data-[side-menu-showed=true]:[&_path]:first:translate-x-(--path-translate-x)" />
			</button>
		</header>
	)
}