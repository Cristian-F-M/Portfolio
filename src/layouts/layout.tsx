import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import useNav from '@/state/nav'
import { useTheme } from '@/state/theme'
import * as THEMES from '@/constants/themes'

export default function Layout() {
	const location = useLocation()
	const [showSplash, setShowSplash] = useState(false)
	const { setActive } = useNav()
	const { theme, load: loadTheme } = useTheme()

	const lastPath = useRef(location.pathname)

	useEffect(() => {
		if (lastPath.current === location.pathname) return
		lastPath.current = location.pathname

		setShowSplash(true)

		const timer = setTimeout(() => {
			setShowSplash(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [location.pathname])

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

	if (showSplash) return '<SplashScreen />'

	return (
		<div>
			<style>{themes}</style>
			<Outlet />
		</div>
	)
}