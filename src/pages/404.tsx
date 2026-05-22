import Button from '@/components/button'
import { Link } from '@/components/link'
import { useTranslation, Trans } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export default function NotFound() {
	const { t } = useTranslation()

	const cards = t('404.cards', { returnObjects: true }) as {
		title: string
		badge: string
	}[]

	return (
		<section className="mt-10">
			<section className="space-y-4 flex flex-col items-center relative">
				<span className="uppercase bg-danger-bg text-danger-text text-xs px-4 py-2 self-end rounded">
					{t('404.system_offline')}
				</span>
				<h1 className="text-8xl md:text-[220px] font-bold bg-linear-to-b from-text-primary to-primary bg-clip-text text-transparent">
					404
				</h1>
				<h3 className="text-xl text-center uppercase font-jet-brains font-bold">
					{t('404.title')}
				</h3>

				<p className="text-center text-pretty text-sm">
					<Trans>
						{t('404.description.0')}{' '}
						<span className="text-primary font-semibold">
							{t('404.description.1')}
						</span>
						{t('404.description.2')}
					</Trans>
				</p>

				<div className="flex flex-col gap-4 w-full md:w-fit md:flex-row">
					<Button
						onClick={() => window.location.reload()}
						className="w-full uppercase text-sm">
						{t('404.re_establish_connection')}
					</Button>
					<Link
						to={'/'}
						router
						className="px-6 py-3 rounded cursor-pointer relative border border-border-strong bg-transparent hover:bg-surface-raised active:bg-surface-soft text-center uppercase">
						{t('404.go_to_main_page')}
					</Link>
				</div>
			</section>

			<hr className="my-14 text-text-muted/30" />

			<section className="flex flex-col gap-5 md:flex-row">
				{cards.map(({ badge, title }, index) => {
					return (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter
							key={index}
							className="p-6 border border-border rounded-xl w-full">
							<span className="text-[10px] text-text-muted uppercase">
								{badge}
							</span>
							<h4
								className={twMerge(
									'text-primary uppercase font-bold text-sm',
									index === 0 && 'text-text-primary',
									index === 1 && 'text-primary',
									index === 2 && 'text-text-secondary'
								)}>
								{title}
							</h4>
						</div>
					)
				})}
			</section>
		</section>
	)
}