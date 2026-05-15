import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import useNav from '@/state/nav'

export default function Layout() {
	const location = useLocation()
	const [showSplash, setShowSplash] = useState(false)
	const { setActive } = useNav()

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

	if (showSplash) return '<SplashScreen />'

	return (
		<div>
			<Outlet />
		</div>
	)
}