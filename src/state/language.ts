import { create } from 'zustand'
import { defaultLanguage } from '@/constants/i18n'

interface LanguageState {
	language: string
	setLanguage: (language: string) => void
}

export const useLanguage = create<LanguageState>()((set) => ({
	language: defaultLanguage,
	setLanguage: (language) => {
		localStorage.setItem('language', language)
		set({ language })
	}
}))