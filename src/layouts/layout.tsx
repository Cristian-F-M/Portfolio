import { useEffect, useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import useNav from '@/state/nav'
import { useTheme } from '@/state/theme'
import * as THEMES from '@/constants/themes'
import SideMenu from '@/components/side-menu'
import SplashScreen from '@/components/splash-screen'
import { useSplashScreen } from '@/state/splash-screen'
import { twMerge } from 'tailwind-merge'
import Footer from '@/components/footer'
import { Header } from '@/components/header/header'

export default function Layout() {
	const location = useLocation()
	const { isShowing, show } = useSplashScreen()
	const { setActive } = useNav()
	const { theme, load: loadTheme } = useTheme()

	const lastPath = useRef(location.pathname)

	useEffect(() => {
		if (lastPath.current === location.pathname) return
		lastPath.current = location.pathname

		show()
	}, [location.pathname, show])

	useEffect(() => {
		if (location.pathname !== '/') return
		if (location.hash === '') document.location.hash = 'home'
		setActive(document.location.hash)
	}, [location, setActive])

	useLayoutEffect(() => {
		loadTheme()
	}, [loadTheme])

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	const themes = Object.entries(THEMES).map(([key, value]) => {
		const colors = Object.entries(value).map(([k, c]) => {
			return `--${k}: ${c}`
		})

		const style = `:root[data-theme='${key}'] {
		  \r${colors.join(';\n')}
		  \r}`
		return style
	})

	return (
		<div className={twMerge(isShowing && 'pointer-events-none')}>
			<style>{themes}</style>
			<SplashScreen />
			<SideMenu />
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}