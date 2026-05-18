import RawLogo from '@/assets/raw-log'
import { useSplashScreen } from '@/state/splash-screen'
import { useCallback, useEffect, useRef } from 'react'
import '@/styles/splash-screen.css'
import { twMerge } from 'tailwind-merge'

export default function SplashScreen() {
	const { isShowing, hide } = useSplashScreen()
	const svgContainerRef = useRef<HTMLDivElement>(null)

	const onAnimationEnd = useCallback(
		(event: AnimationEvent) => {
			if (event.target !== event.currentTarget) return
			hide()
		},
		[hide]
	)

	useEffect(() => {
		svgContainerRef.current?.addEventListener('animationend', onAnimationEnd)
	}, [onAnimationEnd])

	useEffect(() => {
		document.body.style.overflow = isShowing ? 'none' : 'auto'
	}, [isShowing])

	return (
		<div
			id="splash-screen-overlay"
			className={twMerge(
				'fixed z-500 bg-background inset-0 size-full flex items-center justify-center transition-all transition-discrete [.hide]:opacity-0 [.hide]:duration-700 duration-300 [.hide]:hidden',
				!isShowing && 'hide'
			)}>
			<div
				ref={svgContainerRef}
				className={twMerge('svg-container', isShowing && 'animate')}>
				<RawLogo className="size-50 md:size-70 text-text-primary" />
			</div>
		</div>
	)
}