import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { supportedLanguages } from '@/constants/i18n'

i18n
	.use(LanguageDetector)
	.use(Backend)
	.use(initReactI18next)
	.init({
		supportedLngs: supportedLanguages,
		detection: {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
			lookupLocalStorage: 'lang'
		},
		ns: ['common', 'index', 'projects', 'side_menu'],
		defaultNS: 'common',
		backend: {
			loadPath: '/i18n/locales/{{lng}}/{{ns}}.json'
		},
		fallbackLng: 'en'
	})

export default i18n