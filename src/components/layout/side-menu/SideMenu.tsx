import { links } from '@/constants/links'
import { defaultLanguage, languages, ui } from '@/i18n/ui'
import { IconCheck, IconX } from '@tabler/icons-react'
import { useCallback, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { SelectItem } from './SelectItem'
import * as THEMES from '@/constants/themes'
import { useTheme } from '@/state/theme'
import { useLanguage } from '@/state/language'
import type { defaultLangKeys, Lang, Languages, Path } from '@/types/i18n'

export function getValueByPath(obj: defaultLangKeys, path: Path) {
	const split = path.split('.')
	const getValue = (obj: Lang, path: Path) =>
		path.split('.').reduce((acc, key) => acc?.[key], obj) as Lang | string

	const value = getValue(obj, path) ?? getValue(ui[defaultLanguage], path)
	if (typeof value === 'string') return value

	return split.at(-1) ?? ''
}

export function SideMenu({
	langs
}: {
	langs: Record<Languages, defaultLangKeys>
}) {
	const [isOpen, setIsOpen] = useState(false)
	const [hash, setHash] = useState('#home')
	const [areThemesShowed, setAreThemesShowed] = useState(false)
	const { theme, setTheme } = useTheme()
	const { language, setLanguage } = useLanguage()

	// const link = (path: string) => getLocaleUrl(lang, path);

	const handleClickAnyWhere = useCallback(
		(event: MouseEvent) => {
			const $target = event.target as HTMLElement
			const $openElement = $target.closest('[data-open-side-menu]')
			const $closeElement = $target.closest('[data-close-side-menu]')

			if (!$openElement && !$closeElement) return

			event.preventDefault()

			let newIsOpen = isOpen

			if ($openElement) {
				const mustToggle = $openElement.hasAttribute('data-side-menu-toggler')
				newIsOpen = mustToggle ? !isOpen : true
			}

			if ($closeElement) {
				newIsOpen = false
			}

			setIsOpen(newIsOpen)
		},
		[isOpen]
	)

	const handleOverlayClick = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			const $overlay = event.currentTarget
			const $target = event.target

			if ($overlay === $target) setIsOpen(false)
		},
		[]
	)

	const handleHashChange = useCallback(() => {
		const hash = window.location.hash
		if (!hash) return
		setHash(hash)
		setIsOpen(false)
	}, [])

	const handleChangeTheme = useCallback(
		(t: string) => {
			if (theme === t) return
			const root = document.documentElement
			root.setAttribute('data-theme', t)
			setTheme(t)
		},
		[setTheme, theme]
	)

	const handleChangeLanguage = useCallback(
		(lang: Languages) => {
			if (language === lang) return

			const l = langs[lang]

			const pathname = window.location.pathname.replace(language, lang)
			window.history.replaceState(null, '', pathname)
			setLanguage(lang as Languages)

			const textElements = document.querySelectorAll(
				'[data-i18n-key]'
			) as NodeListOf<HTMLElement>

			textElements.forEach((el) => {
				const path = el.dataset.i18nKey as Path | undefined
				if (!path) return

				const newText = getValueByPath(l, path)
				if (newText) el.textContent = newText
			})
		},
		[setLanguage, language, langs]
	)

	const t = useCallback(
		(path: Path) => {
			const lang = langs[language]
			return getValueByPath(lang, path)
		},
		[langs, language]
	)

	useEffect(() => {
		const $openElements = document.querySelectorAll('[data-open-side-menu]')
		$openElements.forEach((el) => {
			el.setAttribute('data-side-menu-showed', String(isOpen))
		})
	}, [isOpen])

	useEffect(() => {
		document.addEventListener('click', handleClickAnyWhere)
		return () => document.removeEventListener('click', handleClickAnyWhere)
	}, [handleClickAnyWhere])

	useEffect(() => {
		window.addEventListener('hashchange', handleHashChange)

		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [handleHashChange])

	useEffect(() => {
		const hash = window.location.hash
		if (!hash) return
		setHash(hash)
	}, [])

	useEffect(() => {
		window.setHash = (hash: string) => {
			setHash(hash)
		}
	}, [])

	return (
		<div
			onClick={handleOverlayClick}
			className={twMerge(
				'fixed inset-0 size-full bg-overlay/60 z-200 pointer-events-none opacity-0',
				isOpen && 'pointer-events-auto opacity-100'
			)}>
			<section
				className={twMerge(
					`absolute top-0 right-0 w-full h-full bg-surface-soft/80 backdrop-blur-xl z-250 md:max-w-110 py-5 px-8 hidden translate-x-full transition-all transition-discrete overflow-auto custom-scroll vertical-scroll overscroll-contain
			
					[.open]:block
					[.open]:starting:opacity-0 
					[.open]:starting:translate-x-full 

					[.open]:translate-x-0
					[.open]:opacity-100`,
					isOpen && 'open'
				)}>
				<header className="flex flex-row items-center justify-between sticky top-0">
					<button
						type="button"
						className="ml-auto cursor-pointer p-1.5 border border-border rounded-full bg-surface hover:bg-surface-soft"
						data-close-side-menu>
						<IconX
							className="text-text-primary"
							size={18}
						/>
					</button>
				</header>

				<main className="space-y-24">
					<nav className="">
						<ol className="space-y-4">
							{links.map((l, index) => {
								return (
									<li
										className={twMerge(
											'flex flex-row gap-2 items-center group h-fit text-text-muted/60',
											hash === l.url && 'active'
										)}
										// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter
										key={index}>
										<span className="block text-primary/40 text-[10px] self-end font-jet-brains tracking-widest group-[.active]:text-primary group-[.active]:font-bold group-hover:text-primary/80">
											{String(index + 1).padStart(2, '0')}
										</span>
										<a
											className="uppercase text-3xl group-[.active]:text-primary leading-7 group-hover:text-text-muted group-[.active]:font-semibold"
											href={l.url}>
											{t(`index.nav.links.${l.path}`)}
										</a>
									</li>
								)
							})}
						</ol>
					</nav>

					<section>
						<header className="flex flex-row gap-2 items-center text-text-muted text-sm uppercase">
							<span className="block size-1 bg-text-muted rounded-full"></span>
							<h4>{t('index.side_menu.language_select')}</h4>
						</header>

						<main className="flex flex-col justify-center gap-1 mt-2">
							{Object.entries(languages).map(([k, v]) => {
								return (
									<SelectItem
										onClick={() => handleChangeLanguage(k as Languages)}
										key={k}
										className={twMerge(
											'border-transparent bg-transparent hover:bg-surface-soft/60 hover:border-border flex flex-row items-center justify-between',
											language === k &&
												'border border-border bg-primary/20 hover:bg-primary/20'
										)}>
										<h5 className="flex flex-row items-center gap-1 text-text-secondary">
											<span>{v.language}</span>
											<span className="uppercase font-jet-brains text-sm text-text-muted">
												({k})
											</span>
										</h5>
										{language === k && (
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
							})}
						</main>
					</section>

					<section>
						<header className="flex flex-row gap-2 items-center text-text-muted text-sm uppercase">
							<span className="block size-1 bg-text-muted rounded-full"></span>
							<h4>{t('index.side_menu.appearance_engine')}</h4>
						</header>

						<main className=" mt-3 w-full">
							<div
								id="themes-container"
								className={twMerge(
									'h-75 overflow-hidden space-y-3',
									areThemesShowed && 'h-auto'
								)}
								style={{ interpolateSize: 'allow-keywords' }}>
								{Object.entries(THEMES).map(([k, value]) => {
									return (
										<SelectItem
											onClick={() => {
												const t = k.toLocaleLowerCase().split('_').join('-')
												handleChangeTheme(t)
											}}
											className="text-left flex flex-row items-center justify-between overflow-hidden w-full"
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
								})}
							</div>
							<button
								onClick={() => {
									setAreThemesShowed((prev) => !prev)
								}}
								className="text-text-muted text-xs float-end w-fit px-2 py-1 my-1 cursor-pointer hover:text-text-secondary"
								type="button">
								{t(
									`index.side_menu.${areThemesShowed ? 'show_less' : 'show_more'}`
								)}
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
			</section>
		</div>
	)
}