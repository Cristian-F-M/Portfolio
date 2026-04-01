import { create } from 'zustand'

interface ThemeState {
	theme: string
	setTheme: (theme: string) => void
	load: () => void
}

export const useTheme = create<ThemeState>()((set) => ({
	theme: '',
	setTheme: (theme) => {
		localStorage.setItem('theme', theme)
		set({ theme })
	},
	load: () => {
		const theme = localStorage.getItem('theme')
		if (!theme) return
		document.documentElement.setAttribute('data-theme', theme)
		set({ theme })
	}
}))