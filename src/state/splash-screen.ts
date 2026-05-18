import { create } from 'zustand'

interface SplashScreenState {
	isShowing: boolean
	setIsShowing: (
		value:
			| SplashScreenState['isShowing']
			| ((
					prevValue: SplashScreenState['isShowing']
			  ) => SplashScreenState['isShowing'])
	) => void
	show: () => void
	hide: () => void
}

export const useSplashScreen = create<SplashScreenState>()((set, get) => ({
	isShowing: true,
	setIsShowing: (fnValue) => {
		if (typeof fnValue === 'function') {
			const newValue = fnValue(get().isShowing)
			set({ isShowing: newValue })
			return
		}
		set({ isShowing: fnValue })
	},
	show: () => {
		set({ isShowing: true })
	},
	hide: () => {
		set({ isShowing: false })
	}
}))