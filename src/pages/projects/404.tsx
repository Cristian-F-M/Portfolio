import Logo from '@/assets/logo'
import { IconWorldExclamation } from '@tabler/icons-react'
import { Fragment, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router'

export default function ProjectNotFound() {
	const location = useLocation()
	const navigation = useNavigate()
	const id = location.state?.id
	const { t } = useTranslation()

	const handleReload = useCallback(() => {
		navigation(`/projects/${id}`)
	}, [navigation, id])

	return (
		<Fragment>
			<header className="bg-surface/60 mx-auto mt-5 flex w-full flex-row items-center justify-between rounded px-4 py-3 text-text-primary shadow shadow-surface-soft sticky top-2 z-100 backdrop-blur-lg">
				<a
					href="/#home"
					className="flex flex-row items-center gap-2 text-text-primary">
					<Logo className="text-text-primary" />
					<h4 className="font-jet-brains text-lg">cmorales</h4>
				</a>

				<button
					className="p-2 bg-surface-soft border border-border rounded text-xs font-jet-brains cursor-pointer hover:bg-surface"
					type="button"
					onClick={handleReload}>
					{t('projects:404.reboot')}
				</button>
			</header>
			<main className="flex flex-1 justify-between mt-8">
				<section>
					<div className="bg-surface-soft p-6 rounded-lg size-fit max-w-87.5">
						<header className="flex flex-row items-center gap-3">
							<div className="bg-primary text-text-primary p-1 rounded">
								<IconWorldExclamation className="stroke-1.5" />
							</div>
							<div className="uppercase text-text-primary text-sm">
								<span className="text-primary text-[10px]">
									{t('projects:404.error_code')}
								</span>
								<h5>{t('projects:404.errors.404.code')}</h5>
							</div>
						</header>

						<main className="mt-4">
							<h4 className="uppercase text-text-muted">
								{t('projects:404.errors.404.title')}:
							</h4>

							<p className="text-sm">
								{t('projects:404.errors.404.description.0')}
							</p>
							<p className="text-sm">
								{t('projects:404.errors.404.description.1')}{' '}
								<span className="font-semibold font-jet-brains text-text-primary">
									{t('projects:404.errors.404.description.2', {
										id: id ?? 'unknown'
									})}
								</span>{' '}
								{t('projects:404.errors.404.description.3')}
							</p>
						</main>

						<footer className="uppercase mt-4 flex flex-col items-center gap-2">
							<button
								onClick={handleReload}
								className="bg-surface border border-border rounded px-5 py-3 uppercase text-text-secondary text-sm cursor-pointer w-full bg-linear-120 from-primary-pressed to-primary hover:to-primary-pressed"
								type="button">
								{t('projects:404.re_establish_connection')}
							</button>
							<a
								href="https://github.com/Cristian-F-M/portfolio/issues/new"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-surface border border-border rounded px-5 py-3 uppercase text-text-secondary text-sm cursor-pointer w-full hover:bg-surface text-center">
								{t('projects:404.report_glitch')}
							</a>
						</footer>
					</div>

					<div className="mt-6 flex flex-row gap-4">
						{['Sector_09', 'Ping_infinite', 'Protocol_v4.0.4'].map(
							(b, index) => {
								return (
									<span
										// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter, It will not change
										key={index}
										className="block w-fit px-2 py-1 bg-surface rounded-full text-[8px] font-jet-brains text-text-muted uppercase">
										{b}
									</span>
								)
							}
						)}
					</div>
				</section>
				<section className="flex items-center justify-center size-fit">
					<h1 className="text-[300px] font-jet-brains text-text-muted leading-none">
						404
					</h1>
				</section>
			</main>

			{/* <Footer className="bottom-0" /> */}
		</Fragment>
	)
}