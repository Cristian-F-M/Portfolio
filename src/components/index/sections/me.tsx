import Badge from '@/components/badge'
import Section from '@/components/index/sections/section'
import { useTranslation } from 'react-i18next'
import { ME } from '@/constants/me'
import Logo from '@/assets/logo'
import {
	IconBrandPowershell,
	IconCloud,
	IconDatabase,
	IconDeviceMobile,
	IconShieldCheckeredFilled,
	IconStack
} from '@tabler/icons-react'
import { CORE, FRONTEND, MOBILE } from '@/constants/skills'

export default function Me() {
	const { t } = useTranslation()

	return (
		<Section id="me">
			<section className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-28">
				<section className="space-y-6">
					<Badge className="uppercase text-xs" ping>
						<span className="text-primary">
							{t('index:sections.me.operational_status')}:
						</span>
						<strong>
							{t(`status.${ME.available_for_hire ? 'active' : 'inactive'}`)}
						</strong>
					</Badge>

					<h2 className="uppercase font-bold text-5xl md:text-7xl mt-2">
						<span className="text-white">{t('index:sections.me.title.0')}</span>{' '}
						<span className="text-white gradient-text">
							{t('index:sections.me.title.1')}
						</span>
					</h2>

					<p className="text-gray-400 text-sm mt-1 md:w-150">
					{t('index:sections.me.description')}
					</p>

					<div className="flex flex-col md:flex-row gap-2 items-center mt-5">
						{Object.values(
							t('index:sections.me.cards', { returnObjects: true })
						).map((card, index) => {
							return (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter, it will not change
									key={index}
									className="bg-surface rounded-md p-4 border border-border">
									<h4 className="uppercase text-text-primary">{card.title}</h4>
									<p className="text-xs w-10/12 mt-px">{card.description}</p>
								</div>
							)
						})}
					</div>
				</section>
				<aside className="w-full place-items-center">
					<div className="w-full h-auto md:size-84 drop-shadow-2xl drop-shadow-primary/40 p-5">
						<Logo className="size-full text-text-primary" />
					</div>
				</aside>
			</section>
			<section className="mt-20">
				<header className="flex flex-col md:flex-row justify-between items-center">
					<div>
						<h3 className="text-text-primary uppercase text-3xl md:text-4xl font-bold">
							{t('index:sections.me.technical_stack.title')}
						</h3>
						<p className="text-text-muted text-sm ">
							{t('index:sections.me.technical_stack.description')}
						</p>
					</div>
					<span className="self-end md:self-auto mt-8 md:mt-0 text-xs text-text-muted border-l border-primary pl-3">
						V_04 {'//'} DEPLOYED
					</span>
				</header>

				<main className="flex flex-col md:grid grid-cols-12 grid-rows-4 gap-4 mt-4">
					<div className="bento-card col-span-8 row-span-2">
						<header>
							<div>
								<IconStack width={25} height={25} />
							</div>
							<h3>{t('index:sections.me.technical_stack.frontend_layer')}</h3>
						</header>
						<main>
							{FRONTEND.map((t, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter, it does not will re-render
								<Badge key={index} variant="skill">
									{t}
								</Badge>
							))}
						</main>
					</div>
					<div className="bento-card col-span-4 row-span-2 col-start-9">
						<header>
							<div>
								<IconDatabase width={25} height={25} />
							</div>
							<h3>{t('index:sections.me.technical_stack.core_engine')}</h3>
						</header>
						<main>
							{CORE.map((t, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter, it does not will re-render
								<Badge key={index} variant="skill">
									{t}
								</Badge>
							))}
						</main>
					</div>
					<div className="bento-card col-span-4 row-span-2 row-start-3">
						<header>
							<div>
								<IconDeviceMobile width={25} height={25} />
							</div>
							<h3>{t('index:sections.me.technical_stack.mobile')}</h3>
						</header>
						<main>
							{MOBILE.map((t, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter, it does not will re-render
								<Badge key={index} variant="skill">
									{t}
								</Badge>
							))}
						</main>
					</div>
					<div className="bento-card col-span-8 row-span-2 col-start-5 row-start-3">
						<header>
							<div>
								<IconBrandPowershell width={25} height={25} />
							</div>
							<h3>
								{t('index:sections.me.technical_stack.infrastructure.title')}
							</h3>
						</header>
						<main className="flex flex-row justify-between">
							<div className="flex flex-row gap-2 flex-wrap items-center md:w-8/12 text-pretty">
								<p className="text-sm text-gray-400">
									{t(
										'index:sections.me.technical_stack.infrastructure.description'
									)}
								</p>
							</div>
							<div className="flex flex-row gap-2 items-center [&_div]:p-2 [&_div]:bg-surface-soft [&_div]:rounded [&_div]:border [&_div]:border-border text-primary">
								<div>
									<IconCloud width={24} height={24} />
								</div>
								<div>
									<IconShieldCheckeredFilled width={24} height={24} />
								</div>
								<div>
									<IconBrandPowershell width={24} height={24} />
								</div>
							</div>
						</main>
					</div>
				</main>
			</section>
			<section className="mt-16 md:mt-24">
				<header className="flex flex-col items-center justify-center text-5xl md:text-6xl uppercase font-bold text-center">
					<h2>
						<span>{t('index:sections.me.how_i_build.title.0')}</span>{' '}
						<span className="gradient-text">
							{t('index:sections.me.how_i_build.title.1')}
						</span>
					</h2>
					<span className="block h-1 w-24 bg-primary rounded-[100%] mt-2 shadow-[0_0_5px_var(--color-primary),0_0_10px_var(--color-primary),0_0_20px_var(--color-primary),0_0_40px_#0095ff]"></span>
				</header>

				<main className="flex flex-col gap-4 md:flex-row items-center mt-14 md:w-11/12 mx-auto">
					{Object.values(
						t('index:sections.me.how_i_build.cards', { returnObjects: true })
					).map((card, index) => {
						return (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: It does not matter, it will no change
								key={index}
								className="bg-surface-soft w-full px-6 py-8 pb-6 rounded-lg relative border border-primary/20">
								<span className="absolute -top-4 left-1/2 -translate-x-1/2 flex bg-surface border border-primary/20 rounded-full size-8 items-center justify-center text-[10px] text-text-primary backdrop-blur-2xl">
									{String(index + 1).padStart(2, '0')}
								</span>
								<header className="text-center text-lg text-text-primary font-jet-brains uppercase">
									{card.title}
								</header>
								<main className="text-center text-text-secondary text-xs mt-1">
									<p>{card.description}</p>
								</main>
							</div>
						)
					})}
				</main>
			</section>
		</Section>
	)
}