import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
	.use(LanguageDetector)
	.use(Backend)
	.use(initReactI18next)
	.init({
		ns: ['common', 'index', 'projects', 'side_menu'],
		defaultNS: 'common',
		backend: {
			loadPath: '/i18n/locales/{{lng}}/{{ns}}.json'
		},
		fallbackLng: 'en'
	})

export default i18n