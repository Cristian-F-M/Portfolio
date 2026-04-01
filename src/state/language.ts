import { create } from 'zustand'
import { defaultLanguage } from '@/i18n/ui'
import type { Languages } from '@/types/i18n'

interface LanguageState {
	language: Languages
	setLanguage: (language: Languages) => void
	load: () => void
}

export const useLanguage = create<LanguageState>()((set, get) => ({
	language: defaultLanguage,
	setLanguage: (language) => {
		localStorage.setItem('language', language)
		set({ language })
	},
	load: () => {
		let lang = defaultLanguage
		const url = window.location.pathname
		const l = url.split('/')[1]

		if (l) lang = l
		else lang = localStorage.getItem('lang') ?? defaultLanguage

		get().setLanguage(lang as Languages)
	}
}))