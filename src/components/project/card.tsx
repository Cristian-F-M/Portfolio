import type { Project } from '@/types/project'
import { useTranslation } from 'react-i18next'
import Badge from '../badge'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { Link } from '../link'
import BrokenFile from '@/assets/broken-file'

interface CardProps extends React.ComponentProps<'div'> {
	project: Project
}

export default function Card({ project, className, ...props }: CardProps) {
	const { t } = useTranslation()

	return (
		<div
			className="border border-border rounded-lg overflow-hidden size-full"
			id={`project-card-${project.id}`}
			{...props}>
			<div className="w-full h-auto aspect-square max-h-6/12">
				{!project.images[0] && (
					<div className="size-full flex items-center justify-center bg-surface-soft">
						<BrokenFile className="size-8/12 text-text-muted" />
					</div>
				)}
				{project.images[0] && (
					<img
						src={project.images[0].src}
						alt={t('index:sections.projects.generic_image_alt')}
						className="size-full object-cover"
						width={100}
						height={100}
					/>
				)}
			</div>

			<main className="flex flex-col justify-between p-6 h-6/12">
				<section className="">
					<header className="space-y-5">
						<div className="space-x-3 flex flex-row">
							{project.skills.map((skill, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter it will not change
								<Badge key={index} variant="skill">
									{skill}
								</Badge>
							))}
						</div>
						<h3 className="text-text-secondary text-4xl font-bold font-space-grotesk uppercase">
							{t(`projects:${project.name}.title`)}
						</h3>
					</header>

					<p className="mt-2 text-sm line-clamp-3 text-pretty text-text-muted">
						{t(`projects:${project.name}.description`)}
					</p>
				</section>

				<footer className="flex flex-row items-center justify-between w-full text-sm min-h-6/12 mt-2">
					<Link
						viewTransition
						router
						to={`/projects/${project.id}`}
						className="flex flex-row items-center gap-1 uppercase text-primary cursor-pointer hover:underline">
						<span>{t('projects:view_artifact')}</span>
						<IconArrowNarrowRight
							size={20}
							className="[&_path]:first:scale-x-70 [&_path]:first:origin-center -ml-1.5"
							stroke={1.5}
						/>
					</Link>
					<span className="text-[10px] text-text-muted font-jet-brains">
						V{project.latest_version} {'//'} {project.release_year}
					</span>
				</footer>
			</main>
		</div>
	)
}