import Logo from '@/assets/logo'
import { ME } from '@/constants/me'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

interface FooterProps extends React.ComponentProps<'footer'> {}

export default function Footer({ className, ...props }: FooterProps) {
	const { t } = useTranslation()

	return (
		<footer
			className={twMerge(
				'flex flex-col md:flex-row justify-center md:justify-between items-center mt-10 px-6 py-8 bg-tertiary/5 w-full absolute left-0 backdrop-blur-2xl border-t border-border pb-25 md:pb-8 space-y-2 md:space-y-0',
				className
			)}
			{...props}>
			<Logo className="text-text-primary size-10" />

			<p className="text-xs text-gray-400 font-jet-brains tracking-widest uppercase text-center">
				<span>&copy;{new Date().getFullYear()}</span> <span>CMORALES</span>{' '}
				<span className="tracking-tighter">{'//'}</span>{' '}
				<span>{t('index:sections.footer.architected_by')}</span>
			</p>

			<div className="flex flex-row items-center gap-6 text-gray-400 uppercase text-xs font-jet-brains tracking-widest [&_a]:hover:underline">
				{ME.networks.map(({ id, text, url }) => {
					return (
						<a
							key={id}
							className="underline md:no-underline"
							target="_blank"
							rel="noopener noreferrer"
							href={url}>
							{text}
						</a>
					)
				})}
			</div>
		</footer>
	)
}