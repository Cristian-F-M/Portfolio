import { IconCheck, IconX } from '@tabler/icons-react'
import { links } from '@/constants/links'
import { Link } from './link'
import { useTranslation } from 'react-i18next'
import useNav from '@/state/nav'
import { twMerge } from 'tailwind-merge'
import { useCallback, useEffect, useState } from 'react'
import * as THEMES from '@/constants/themes'
import { SelectItem } from './select-item'
import { useTheme } from '@/state/theme'
import { languages } from '@/constants/i18n'
import { useLanguage } from '@/state/language'
import List from './list'
import { useSplashScreen } from '@/state/splash-screen'

export default function SideMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const [areThemesShowed, setAreThemesShowed] = useState(false)
	const { t, i18n } = useTranslation()
	const { active } = useNav()
	const { theme, setTheme } = useTheme()
	const { language, setLanguage } = useLanguage()
	const { show } = useSplashScreen()
	// biome-ignore lint/performance/noDynamicNamespaceImportAccess: ---
	const selectedThemeData = THEMES[theme as keyof typeof THEMES]

	const handleClickAnyWhere = useCallback(
		(event: MouseEvent) => {
			const $target = event.target as HTMLElement
			const $openElement = $target.closest('[data-open-side-menu]')
			const $closeElement = $target.closest('[data-close-side-menu]')

			console.log($target)
			if (!$openElement && !$closeElement) return

			event.preventDefault()

			let newIsOpen = isOpen

			if ($openElement) {
				const mustToggle = $openElement.hasAttribute('data-side-menu-toggler')
				newIsOpen = mustToggle ? !isOpen : true
			}

			if ($closeElement) newIsOpen = false

			setIsOpen(newIsOpen)
		},
		[isOpen]
	)

	const handleChangeTheme = useCallback(
		(t: string) => {
			if (t === theme) return

			show()
			setTimeout(() => {
				setTheme(t)
			}, 0)
		},
		[setTheme, theme, show]
	)

	const handleChangeLanguage = useCallback(
		(language: string) => {
			show()
			setTimeout(() => {
				setLanguage(language)
				i18n.changeLanguage(language)
			}, 0)
		},
		[i18n, setLanguage, show]
	)

	const handleOverlayClick = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			const $overlay = event.currentTarget
			const $target = event.target

			if ($overlay === $target) setIsOpen(false)
		},
		[]
	)

	useEffect(() => {
		document.addEventListener('click', handleClickAnyWhere)
		return () => document.removeEventListener('click', handleClickAnyWhere)
	}, [handleClickAnyWhere])

	return (
		<div
			onClick={handleOverlayClick}
			className={twMerge(
				'fixed inset-0 size-full bg-overlay/60 z-200 pointer-events-none opacity-0 duration-200',
				isOpen && 'pointer-events-auto opacity-100'
			)}>
			<aside
				className={twMerge(
					`absolute top-0 right-0 w-full h-full bg-surface/80 backdrop-blur-xl z-250 max-w-11/12 md:max-w-110 py-5 px-8 hidden translate-x-full transition-all transition-discrete overflow-auto custom-scroll vertical-scroll overscroll-contain duration-200
			
					[.open]:block
					[.open]:starting:opacity-0 
					[.open]:starting:translate-x-full 

					[.open]:translate-x-0
					[.open]:opacity-100`,
					isOpen && 'open'
				)}>
				<header className="sticky top-0">
					<button
						className="block w-fit ml-auto bg-surface-soft/60 p-1 rounded backdrop-blur-lg"
						type="button"
						data-close-side-menu>
						<IconX className="size-6 md:size-5 text-text-muted cursor-pointer hover:text-text-secondary active:text-text-secondary" />
					</button>
				</header>

				<main className="mt-4 space-y-24">
					<nav className="space-y-4">
						{links.map((l, index) => {
							return (
								<Link
									href={l.url}
									key={l.id}
									onClick={() => {
										if (active === l.url) return
										setIsOpen(false)
									}}
									className={twMerge(
										'text-text-muted hover:text-text-secondary text-sm cursor-pointer flex flex-row items-center gap-2 group h-fit w-fit',
										active === l.url && 'active'
									)}>
									<span className="block text-primary/40 text-[10px] self-end font-jet-brains tracking-widest group-[.active]:text-primary group-[.active]:font-bold group-hover:text-primary/80">
										{String(index + 1).padStart(2, '0')}
									</span>

									<span className="uppercase text-3xl group-[.active]:text-primary leading-7 group-hover:text-text-muted group-[.active]:font-semibold">
										{t(`index:sections.header.links.${l.path}`)}
									</span>
								</Link>
							)
						})}
					</nav>

					<section>
						<header className="flex flex-row gap-2 items-center text-text-muted text-sm uppercase">
							<span className="block size-1 bg-text-muted rounded-full"></span>
							<h4>{t('side_menu:language_select')}</h4>
						</header>

						<main className="flex flex-col justify-center gap-1 mt-2">
							<List
								items={Object.values(languages)}
								renderItem={(item) => {
									const isThisSelected = language === item.code
									return (
										<SelectItem
											onClick={() => handleChangeLanguage(item.code)}
											key={item.code}
											className={twMerge(
												'w-full border-transparent bg-transparent hover:bg-surface-soft/60 hover:border-border flex flex-row items-center justify-between',
												isThisSelected &&
													'border border-border bg-primary/20 hover:bg-primary/20'
											)}>
											<h5 className="flex flex-row items-center gap-1 text-text-secondary">
												<span>{item.name}</span>
												<span className="uppercase font-jet-brains text-sm text-text-muted">
													({item.code})
												</span>
											</h5>
											{isThisSelected && (
												<span>
													<IconCheck
														className="text-primary"
														size={16}
														stroke={3}
													/>
												</span>
											)}
										</SelectItem>
									)
								}}
								keyStractor={(item) => item.code}
							/>
						</main>
					</section>

					<section>
						<header className="flex flex-row gap-2 items-center text-text-muted text-sm uppercase">
							<span className="block size-1 bg-text-muted rounded-full"></span>
							<h4>{t('side_menu:appearance_engine')}</h4>
						</header>

						<main className=" mt-3 w-full">
							<div
								id="themes-container"
								className={twMerge(
									'h-75 overflow-hidden space-y-3',
									areThemesShowed && 'h-auto'
								)}
								style={{ interpolateSize: 'allow-keywords' }}>
								<div className="space-y-2">
									<h5 className="text-sm text-text-muted leading-none">
										Selected
									</h5>
									<SelectItem
										className={twMerge(
											'text-left flex flex-row items-center justify-between overflow-hidden w-full outline-none bg-primary/20 text-text-primary hover:bg-primary/30'
										)}>
										<h5 className="w-8/12">{theme}</h5>
										<div className="flex flex-row gap-1 items-center w-4/12 overflow-x-auto custom-scroll horizontal-scroll [&::-webkit-scrollbar-track]:bg-surface-soft/60! pb-1">
											{Object.entries(selectedThemeData).map(
												([name, color]) => {
													return (
														<div
															key={`selected-${theme}-${name}`}
															className="size-5 rounded shrink-0"
															style={{ backgroundColor: color }}></div>
													)
												}
											)}
										</div>
									</SelectItem>
								</div>
								<hr className="my-4 text-text-muted" />
								<List
									items={Object.entries(THEMES)}
									renderItem={([k, value]) => {
										const isThisSelected = k === theme
										return (
											<SelectItem
												onClick={() => {
													handleChangeTheme(k)
												}}
												className={twMerge(
													'text-left flex flex-row items-center justify-between overflow-hidden w-full outline-none',
													isThisSelected &&
														'ring-2 ring-primary bg-primary/20 text-text-primary hover:bg-primary/30'
												)}
												key={k}>
												<h5 className="w-8/12">{k}</h5>
												<div className="flex flex-row gap-1 items-center w-4/12 overflow-x-auto custom-scroll horizontal-scroll [&::-webkit-scrollbar-track]:bg-surface-soft/60! pb-1">
													{Object.entries(value).map(([name, color]) => {
														return (
															<div
																key={`${k}-${name}`}
																className="size-5 rounded shrink-0"
																style={{ backgroundColor: color }}></div>
														)
													})}
												</div>
											</SelectItem>
										)
									}}
								/>
							</div>
							<button
								onClick={() => {
									setAreThemesShowed((prev) => !prev)
								}}
								className="text-text-muted text-xs float-end w-fit px-2 py-1 my-1 cursor-pointer hover:text-text-secondary"
								type="button">
								{t(`side_menu:${areThemesShowed ? 'show_less' : 'show_more'}`)}
							</button>
						</main>
					</section>
				</main>

				<footer className="mt-10">
					<div className="flex flex-row items-center justify-between">
						<span className="flex flex-row items-center gap-1 text-text-secondary">
							<span className="size-2 bg-primary rounded-full"></span>
							<span>Core: Online</span>
						</span>
						<span className="text-xs text-text-muted">Network: Optimized</span>
					</div>

					<div className="terminal bg-black w-full rounded text-text-muted p-4 mt-2 [&_span.shell-input-icon]:text-primary text-sm">
						<div className="flex flex-row items-center gap-2 mb-3">
							<span className="size-3 rounded-full bg-red-500/40"></span>
							<span className="size-3 rounded-full bg-yellow-500/40"></span>
							<span className="size-3 rounded-full bg-green-500/40"></span>
						</div>
						<div className="space-y-1">
							<span className="flex flex-row items-center gap-1 text-text-secondary">
								<span className="shell-input-icon">$</span>
								<span>deploy --env prod</span>
							</span>
							<span className="flex flex-row items-center gap-1">
								<span className="">{'>'}</span>
								build assets [4.25s]
							</span>
							<span className="flex flex-row items-center gap-1 text-green-400/80">
								<span className="">{'>'}</span>
								Done, Server active.
							</span>
						</div>
					</div>

					<div className="text-center text-text-muted mt-6 text-xs">
						&copy;{new Date().getFullYear()}{' '}
						<span className="uppercase font-jet-brains tracking-widest">
							cmorales
						</span>
					</div>
				</footer>
			</aside>
		</div>
	)
}