import Section from '@/components/index/sections/section'
import Badge from '@/components/badge'
import { useTranslation } from 'react-i18next'
import { ACHIEVEMENTS } from '@/constants/achievements'
import Logo from '@/assets/logo'
import { IconBrain, IconChevronCompactDown } from '@tabler/icons-react'

export default function Home() {
	const { t } = useTranslation()

	return (
		<Section
			id="home"
			className="flex flex-col md:flex-row items-center justify-between mt-3 md:mt-10">
			<section className="flex flex-col gap-8">
				<div>
					<Badge className="uppercase" ping>
						{t('index:sections.home.available_for_hire')}
					</Badge>
				</div>

				<div>
					<div>
						<h1 className="text-6xl md:text-8xl font-space-grotesk text-text-primary font-bold">
							<span>Cristian</span>
							<br />
							<span className="gradient-text">Morales</span>
						</h1>
						<p className="mt-1 md:mt-0 text-sm md:text-sm text-text-muted md:w-2/3">
							{t('index:sections.home.description')}
						</p>
					</div>

					<div className="mt-5 flex flex-row gap-5">
						<a
							href="#projects"
							className="button-glow  text-text-on-primary px-4 py-2 rounded font-jet-brains">
							{t('index:sections.home.view_projects')}
						</a>
						<a
							href="#contact"
							className="block px-4 py-2 rounded font-jet-brains bg-surface hover:bg-surface-soft text-text-primary">
							{t('index:sections.home.contact_me')}
						</a>
					</div>
				</div>
				<div className="flex flex-row justify-around md:justify-between md:w-7/12">
					{ACHIEVEMENTS.map(({ path, value, id }) => {
						return (
							<div
								className="flex flex-col gap-0 w-fit"
								key={id}
								id={`achievement-${id}`}>
								<span className="gradient-text font-jet-brains font-bold text-lg">
									{value}
								</span>
								<span className="text-xs text-text-secondary">
									{t(`index:sections.home.achievements.${path}`)}
								</span>
							</div>
						)
					})}
				</div>
			</section>
			<section className="relative mt-10 md:mt-0">
				<Badge className="absolute top-0 right-0 bg-surface p-2 animate-float animate-iteration-count-infinite animate-duration-3500 animate-delay-900 border-border">
					<Logo width={16} height={16} className="text-primary" />
				</Badge>
				<div className="w-full md:w-96 max-w-90 rounded-full">
					<div className="border border-border rounded-full size-full p-3">
						<div className="border border-border rounded-full size-full p-8">
							<img
								src={'/images/me.avif'}
								alt={t('index:sections.home.me_alt')}
								className="rounded-full animate-float animate-iteration-count-infinite animate-duration-3500"
							/>
						</div>
					</div>
				</div>
				<Badge className="absolute bottom-0 left-0 bg-surface-soft p-2 animate-float animate-iteration-count-infinite animate-duration-3500 animate-delay-1200 border-border">
					<IconBrain width={16} height={16} className="text-text-muted" />
				</Badge>
			</section>

			<div className="absolute hidden md:block bottom-0 left-1/2 -translate-x-1/2 animate-hang animate-duration-2500 animate-iteration-count-infinite">
				<IconChevronCompactDown
					width={30}
					height={30}
					className="text-primary"
				/>
			</div>
		</Section>
	)
}