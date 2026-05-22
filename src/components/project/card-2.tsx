import type { Project } from '@/types/project'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import Badge from '../badge'
import { Link } from '../link'
import BrokenFile from '@/assets/broken-file'

interface CardProps extends React.ComponentProps<'div'> {
	project: Project
}

export default function Card2({ className, project, ...props }: CardProps) {
	const { t } = useTranslation()

	return (
		<article
			className={twMerge(
				'border border-border rounded-lg overflow-hidden relative',
				className
			)}
			{...props}>
			<div className="w-full h-auto aspect-video max-h-6/12">
				{!project.images[0] && (
					<div className="size-full flex items-center justify-center bg-surface-soft">
						<BrokenFile className="size-8/12 text-text-muted" />
					</div>
				)}
				{project.images[0] && (
					<img
						src={project.images[0].src}
						alt={t('index:sections.projects.generic_image_alt')}
						className="size-full object-cover object-top"
						width={100}
						height={100}
					/>
				)}
			</div>

			<Badge
				className="absolute top-2 right-2 border border-border-subtle text-[10px] font-jet-brains"
				variant="skill">
				{project.latest_version}
			</Badge>

			<main className="p-5 space-y-2">
				<h2 className="uppercase font-jet-brains text-2xl">
					{t(`projects:${project.name}.title`)}
				</h2>

				<div className="flex flex-row gap-2">
					{project.skills.map((skill, index) => {
						return (
							<Badge
								// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter
								key={`${skill}-${index}`}
								variant="skill">
								{skill}
							</Badge>
						)
					})}
				</div>

				<p className="mt-2 text-sm line-clamp-3 text-pretty text-text-muted">
					{t(`projects:${project.name}.description`)}
				</p>

				<Link
					router
					to={`/projects/${project.id}`}
					className="bg-primary text-text-on-primary text-xs uppercase font-jet-brains w-full mt-4 px-4 py-2 block text-center rounded">
					{t('view_detail')}
				</Link>
			</main>
		</article>
	)
}