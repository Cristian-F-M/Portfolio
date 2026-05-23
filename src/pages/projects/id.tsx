import {
	IconArrowBadgeLeftFilled,
	IconArrowBadgeRightFilled,
	IconDeviceDesktop,
	IconDeviceMobile,
	IconRocket,
	IconTerminal,
	IconTerminal2
} from '@tabler/icons-react'
import { useParams, useNavigate } from 'react-router'
import { PROJECTS } from '@/constants/projects'
import { useEffect } from 'react'
import useNav from '@/state/nav'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'
import {
	Navigation,
	Pagination,
	Thumbs,
	Autoplay,
	Zoom,
	Virtual
} from 'swiper/modules'

import '@/styles/projects-id.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/zoom'
import 'swiper/css/autoplay'
import 'swiper/css/virtual'
import Badge from '@/components/badge'
import BrokenFile from '@/assets/broken-file'
import { Helmet } from 'react-helmet-async'

export default function ProjectIdPage() {
	const { id } = useParams()
	const { setActive } = useNav()
	const navigation = useNavigate()
	const project = PROJECTS.find((p) => p.id === id)
	const { t } = useTranslation()

	useEffect(() => {
		if (project) return
		navigation('/projects/404', {
			replace: true,
			state: { id }
		})
	}, [navigation, project, id])

	useEffect(() => {
		setActive('/#projects')
	}, [setActive])

	if (!project) return

	let openProjectText = t('projects:open_project.web')
	let OpenProjectIcon = IconRocket

	if (project.type === 'cli') {
		openProjectText = t('projects:open_project.cli')
		OpenProjectIcon = IconTerminal
	}
	if (project.type === 'desktop') {
		openProjectText = t('projects:open_project.desktop')
		OpenProjectIcon = IconDeviceDesktop
	}
	if (project.type === 'mobile') {
		openProjectText = t('projects:open_project.mobile')
		OpenProjectIcon = IconDeviceMobile
	}

	return (
		<>
			<Helmet>
				<title>
					{t('projects:page_id.title', {
						project_name: t(`projects:${project.name}.title`)
					})}
				</title>
				<meta
					name="description"
					content={t(`projects:${project.name}.description`)}
				/>
			</Helmet>
			<main className="mt-10">
				<section className="md:w-7/12 aspect-video relative">
					<Swiper
						loop
						zoom
						virtual
						modules={[Navigation, Pagination, Thumbs, Zoom, Autoplay, Virtual]}
						pagination={{
							type: 'bullets',
							clickable: true,
							clickableClass: 'cursor-pointer',
							el: '.swiper-pagination'
						}}
						navigation={{
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev'
						}}>
						{!project.images[0] && (
							<div className="size-9/12 flex items-center justify-center bg-surface-soft mx-auto p-8">
								<BrokenFile className="size-5/12 text-text-muted" />
							</div>
						)}
						{project.images.map((src, index) => {
							return (
								<SwiperSlide
									// biome-ignore lint/suspicious/noArrayIndexKey: ---
									key={index}
									zoom
									virtualIndex={index}
									className="h-full relative aspect-square md:aspect-video cursor-zoom-in">
									<img
										className="object-contain size-full"
										src={`/images/projects/${project.name}/${src}`}
										alt={t('index:projects.generic_image_alt')}
									/>
								</SwiperSlide>
							)
						})}
						<div className="swiper-buttons absolute bottom-0 right-0 flex flex-row items-center gap-2">
							<div className="swiper-button swiper-button-prev static!">
								<IconArrowBadgeLeftFilled />
							</div>
							<div className="swiper-button swiper-button-next static!">
								<IconArrowBadgeRightFilled />
							</div>
						</div>
						<div className="swiper-pagination static! mx-auto mt-4 [&_.swiper-pagination-bullet]:bg-text-muted! [&_.swiper-pagination-bullet]:cursor-pointer [&_.swiper-pagination-bullet.swiper-pagination-bullet-active]:bg-primary! text-left! md:text-center! cursor-default!"></div>
					</Swiper>
				</section>

				<section className="mt-20 space-y-3">
					<Badge ping className="uppercase text-xs text-text-muted">
						<span>{t('index:sections.projects.operational_system')}:</span>
						<span className="text-text-secondary">
							{t(`status.${project.active ? 'active' : 'inactive'}`)}
						</span>
					</Badge>

					<h1 className="text-6xl md:text-7xl text-text-primary font-semibold">
						{t(`projects:${project.name}.title`)}
					</h1>

					<p className="text-sm md:text-base text-text-secondary md:w-7/12 mt-1">
						{t(`projects:${project.name}.description`)}
					</p>

					<div className="flex flex-row gap-2 items-center mt-4">
						{project.skills.map((skill, index) => {
							return (
								<Badge
									variant="skill"
									// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter
									key={`${index}-skill`}>
									{skill}
								</Badge>
							)
						})}
					</div>

					<div className="flex flex-col md:flex-row gap-4 uppercase mt-10 [&_a]:w-full md:[&_a]:w-fit">
						{project.active && project.url && (
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row gap-1 items-center justify-center w-fit bg-surface-soft px-4 py-3 rounded text-text-primary text-xs button-glow cursor-pointer [&_svg]:size-4.5">
								<OpenProjectIcon />
								<span>{openProjectText}</span>
							</a>
						)}
						<a
							href={`https://github.com/Cristian-F-M/${project.github}`}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-row gap-1 items-center justify-center w-fit bg-surface-soft px-4 py-3 rounded text-text-primary text-xs cursor-pointer [&_svg]:size-4.5">
							<IconTerminal2 />
							<span>{t('projects:view_on_github')}</span>
						</a>
					</div>
				</section>
			</main>
		</>
	)
}