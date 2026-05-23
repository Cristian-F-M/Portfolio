import Card from '@/components/project/card-2'
import FilterButton from '@/components/project/filter-button'
import NoProjectsFound from '@/components/project/no-projects-found'
import { PROJECTS } from '@/constants/projects'
import { TypeObj } from '@/constants/projects'
import useNav from '@/state/nav'
import { deepSearch } from '@/utils/global'
import { IconSearch } from '@tabler/icons-react'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { useQueryState } from 'nuqs'

export default function ProjectsPage() {
	const [filterBy, setFilterBy] = useQueryState('filterBy', {
		defaultValue: 'all'
	})
	const [query, setQuery] = useQueryState('query', { defaultValue: '' })
	const { t } = useTranslation()
	const { setActive } = useNav()

	const filteredProjects = useMemo(() => {
		if (!query && filterBy === 'all') return PROJECTS
		if (filterBy === 'all') return PROJECTS.filter((p) => deepSearch(p, query))

		return PROJECTS.filter((p) => p.type === filterBy && deepSearch(p, query))
	}, [filterBy, query])

	const sortedProjects = useMemo(() => {
		return filteredProjects.sort((a, b) => {
			if (a.featured !== b.featured) {
				return Number(b.featured) - Number(a.featured)
			}

			return Number(b.active) - Number(a.active)
		})
	}, [filteredProjects])

	useEffect(() => {
		setActive('/#projects')
	}, [setActive])

	return (
		<section className="mt-10">
			<header className="space-y-1">
				<h1 className="text-4xl md:text-6xl uppercase font-bold">
					<span className="gradient-text">{t('projects:title.0')}</span>
					<br />
					<span>{t('projects:title.1')}</span>
				</h1>
				<p className="text-sm md:w-150">{t('projects:description')}</p>
			</header>
			<main className="mt-10">
				<header className="flex flex-col md:flex-row gap-4">
					<div className="search place-content-center relative">
						<div className="absolute top-1/2 -translate-y-1/2 left-2.5 pt-0.5">
							<IconSearch className="text-text-muted size-4" />
						</div>
						<input
							onChange={(event) => setQuery(event.target.value)}
							className="bg-surface-soft h-12 w-full md:w-auto md:h-full outline-none rounded-lg px-4 pl-8 placeholder:text-xs placeholder:text-text-muted placeholder:uppercase text-text-secondary text-sm focus:ring-focus-ring focus:ring-2"
							placeholder={t('projects:input.placeholder')}
							type="text"
							value={query}
						/>
					</div>
					<div className="filters flex flex-row gap-3 flex-wrap bg-surface px-3 py-2 rounded w-full items-center">
						<FilterButton
							isSelected={filterBy === 'all'}
							onClick={() => setFilterBy('all')}
							text="All"
							count={PROJECTS.length}
						/>

						{Object.values(TypeObj).map((type, index) => {
							return (
								<FilterButton
									// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter
									key={`${index}-${type}`}
									onClick={() => {
										console.log('type', type)
										setFilterBy(type)
									}}
									isSelected={filterBy === type}
									text={type}
									count={PROJECTS.filter((p) => p.type === type).length}
								/>
							)
						})}
					</div>
				</header>

				<main className="space-y-10">
					<div
						className={twMerge(
							'w-fit mx-auto md:mx-0 opacity-0 h-0 transition-discrete [interpolate-size:allow-keywords] starting:opacity-0 starting:h-0',
							query && 'h-auto opacity-100 mt-5'
						)}>
						<h5 className="uppercase text-text-muted text-xs font-jet-brains tracking-widest border-l-2 border-primary pl-4 py-2">
							<span>
								{t('projects:search_result.0')}
								<span className="font-bold text-primary">
									{t('projects:search_result.1', {
										count: filteredProjects.length
									})}
								</span>
								{t('projects:search_result.2')}
							</span>
						</h5>
					</div>

					<section className="flex flex-col md:flex-row gap-6 flex-wrap items-center md:items-baseline">
						{!sortedProjects.length && (
							<NoProjectsFound
								handleReset={() => {
									setQuery('')
									setFilterBy('all')
								}}
							/>
						)}
						{sortedProjects.map((p) => {
							return (
								<div
									key={p.id}
									className={twMerge('flex-1 basis-66 min-w-48 max-w-72.5')}>
									<Card project={p} />
								</div>
							)
						})}
					</section>
				</main>
			</main>
		</section>
	)
}