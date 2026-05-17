import { create } from 'zustand'
import * as THEMES from '@/constants/themes'

interface ThemeState {
	theme: string
	setTheme: (theme: string) => void
	load: () => void
}

export const useTheme = create<ThemeState>()((set) => ({
	theme: 'DARK',
	setTheme: (theme) => {
		localStorage.setItem('theme', theme)
		if (!theme || !(theme in THEMES)) return
		set({ theme })
	},
	load: () => {
		const theme = localStorage.getItem('theme')
		if (!theme) return
		document.documentElement.setAttribute('data-theme', theme)
		set({ theme })
	}
}))