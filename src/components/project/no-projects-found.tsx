import { IconZoomQuestion } from '@tabler/icons-react'
import Button from '../button'
import { useTranslation } from 'react-i18next'

export default function NoProjectsFound({
	handleReset
}: {
	handleReset: () => void
}) {
	const { t } = useTranslation()

	return (
		<div className="w-full bg-surface p-8 rounded flex flex-col items-center gap-4">
			<IconZoomQuestion className="size-10 text-text-muted" />
			<h3 className="uppercase text-2xl font-bold">
				<span className="text-primary">
					{t('projects:no_projects_found.title.0')}
				</span>
				<span className="text-text-muted">{' // '}</span>
				{t('projects:no_projects_found.title.1', { count: 0 })}
			</h3>

			<p>{t('projects:no_projects_found.description')}</p>

			<Button
				onClick={handleReset}
				className="uppercase text-xs font-jet-brains">
				{t('projects:no_projects_found.reset_filters')}
			</Button>
		</div>
	)
}