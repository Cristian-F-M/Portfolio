import { useTranslation } from 'react-i18next'
import Section from './section'
import Input from '@/components/input'
import {
	IconArrowUpRight,
	IconBrandTelegram,
	IconMail,
	IconMapPin
} from '@tabler/icons-react'
import Textarea from '@/components/textarea'
import Button from '@/components/button'
import { useEffect, useState } from 'react'
import { ME } from '@/constants/me'
import MapGL, { Marker } from '@vis.gl/react-maplibre'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useMapStyle } from '@/constants/map'
import { Link } from '@/components/link'

export default function Contact() {
	const { t } = useTranslation()
	const [l, setL] = useState(false)
	const { mapStyle } = useMapStyle()

	useEffect(() => {}, [])

	return (
		<Section id="contact">
			<header className="text-5xl md:text-7xl">
				<h2 className="text-text-primary font-bold uppercase">
					<span>{t('index:sections.lets_build.title.0')}</span>
					<br />
					<span className="gradient-text">
						{t('index:sections.lets_build.title.1')}
					</span>
				</h2>

				<p className="text-sm md:text-base md:w-120 mt-8 pl-6 border-l border-primary">
					{t('index:sections.lets_build.description')}
				</p>
			</header>

			<main className="flex flex-col md:flex-row gap-10 mt-10 w-full">
				<section className="bg-surface rounded-lg border border-border relative p-8 w-full h-fit">
					<div className="absolute top-1 right-1 pointer-events-none z-50">
						<IconMail className="size-14 md:size-18 text-text-muted" />
					</div>
					<form id="send-email-form" className="w-full space-y-10">
						<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
							<Input
								label={t('index:sections.lets_build.form.name.name')}
								placeholder={t(
									'index:sections.lets_build.form.name.placeholder'
								)}
							/>
							<Input
								label={t('index:sections.lets_build.form.email.name')}
								placeholder={t(
									'index:sections.lets_build.form.email.placeholder'
								)}
							/>
						</div>
						<Textarea
							id="message"
							label={t('index:sections.lets_build.form.message.name')}
							placeholder={t(
								'index:sections.lets_build.form.message.placeholder'
							)}
						/>

						<Button
							variant="glow"
							className="flex flex-row gap-2 items-center"
							onClick={() => setL((prev) => !prev)}
							loading={l}>
							{t('index:sections.lets_build.form.initiate_contact')}
							<IconBrandTelegram className="size-6" />
						</Button>
					</form>
				</section>
				<aside className="w-full">
					<header>
						<h4 className="text-text-primary font-jet-brains tracking-widest uppercase">
							{t('index:sections.lets_build.virtual_presence.title')}
						</h4>
					</header>

					<main>
						<section className="space-y-4 mt-4">
							{Object.values(ME.networks).map(
								({ icon: Icon, id, text, url, user }) => {
									return (
										<a
											key={id}
											href={url}
											className="w-full bg-surface p-6 flex flex-row gap-4 rounded items-center transition-colors hover:bg-surface-soft active:bg-surface-raised"
											target="_blank"
											rel="noopener noreferrer">
											<Icon className="size-7 text-primary" />
											<header className="font-jet-brains tracking-widest">
												<h6 className="text-sm text-text-secondary uppercase">
													{text}
												</h6>
												<span className="text-xs text-text-muted">{user}</span>
											</header>
											<div className="ml-auto text-text-muted">
												<IconArrowUpRight className="size-7" />
											</div>
										</a>
									)
								}
							)}
						</section>
						<section>
							<div className="block mt-5 p-6 border-2 border-border rounded bg-surface">
								<header className="flex flex-row items-center gap-2">
									<IconMapPin className="text-primary self-start size-7" />
									<div className="flex flex-col text-text-primary">
										<h5 className="font-jet-brains tracking-widest uppercase">
											{t(
												'index:sections.lets_build.virtual_presence.coordinates'
											)}
										</h5>
										<span className="text-gray-400 text-xs">
											Remote / CMORALES
										</span>
										<span className="text-gray-400 text-xs">
											Base:{' '}
											<Link
												className="text-xs text-text-link underline md:no-underline hover:underline hover:text-text-link"
												target="_blank"
												rel="noopener noreferrer"
												href="https://maps.app.goo.gl/MhNHSXA28ABCf5zx7">
												Bucaramanga, Colombia
											</Link>{' '}
											🇨🇴
										</span>
									</div>
								</header>
								<div className="w-full md:h-44 overflow-hidden rounded mt-6 aspect-square">
									<MapGL
										initialViewState={{
											longitude: -73.11895,
											latitude: 7.115,
											zoom: 10
										}}
										style={{ width: '100%', height: '100%' }}
										mapStyle={mapStyle}
										attributionControl={false}>
										<Marker
											longitude={-73.11895}
											latitude={7.115}
											anchor="center">
											<div className="size-4 bg-primary shadow-[0_0_20px_var(--text-secondary),0_0_40px_var(--text-muted)] rounded-full border-3 border-text-text-primary" />
										</Marker>
									</MapGL>
								</div>
							</div>
						</section>
					</main>
				</aside>
			</main>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</Section>
	)
}