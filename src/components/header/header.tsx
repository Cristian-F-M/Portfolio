import MobileHeader from '@/components/header/mobile-header'
import DesktopHeader from './desktop-header'

export function Header(props: React.ComponentProps<'header'>) {
	return (
		<>
			<DesktopHeader {...props} />
			<MobileHeader {...props} />
		</>
	)
}