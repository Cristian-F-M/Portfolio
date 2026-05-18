import { useTranslation } from 'react-i18next'
import Section from './section'
import { twMerge } from 'tailwind-merge'
import { PROJECTS } from '@/constants/projects'
import Card from '@/components/project/card'
import { Link } from '@/components/link'
import { IconPlus } from '@tabler/icons-react'

export default function Projects() {
	const { t } = useTranslation()

	const bentoClasses = [
		'col-span-2 row-span-1 md:[&_p]:max-w-8/12',
		'row-span-1 col-start-3',
		'row-span-2 row-start-2 md:[&_p]:max-w-10/12 ',
		'col-span-2 row-span-2 row-start-2'
	]

	return (
		<Section id="projects">
			<div className="flex flex-row gap-2 items-center mb-5">
				<span className="block h-0.5 bg-primary w-16"></span>
				<h5 className="uppercase text-xs font-jet-brains text-primary tracking-widest">
					{t('index:sections.projects.deployment_logs')}
				</h5>
			</div>
			<header className="space-y-2">
				<h2 className="uppercase font-bold text-5xl md:text-7xl">
					<span>{t('index:sections.projects.featured_projects.0')}</span>{' '}
					<span className="gradient-text">
						{t('index:sections.projects.featured_projects.1')}
					</span>
				</h2>

				<p className="text-text-muted md:max-w-150 text-sm mt-1">
					{t('index:sections.projects.description')}
				</p>
			</header>

			<main className="mt-8 md:w-10/12">
				<div className="md:grid grid-cols-3 grid-rows-2 gap-4 space-y-5 md:space-y-0">
					{PROJECTS.filter((p) => p.featured)
						.slice(0, 4)
						.map((p, i) => {
							return (
								<div
									key={p.id}
									className={twMerge('md:max-h-130', bentoClasses[i])}>
									<Card project={p} />
								</div>
							)
						})}
				</div>

				{/* <Link
					router
					to={'/projects'}
					className="flex flex-row gap-1 items-center uppercase text-text-primary text-xs mx-auto border border-border bg-surface px-4 py-3 rounded-lg hover:bg-surface-soft mt-4 font-jet-brains cursor-pointer w-fit">
					<IconPlus size={16} className="text-primary" />
					<span>{t('index:see_more_artifacts')}</span>
				</Link> */}
			</main>
		</Section>
	)
}