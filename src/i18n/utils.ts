import type { Lang, Languages, Path } from '@/types/i18n'
import { ui, defaultLanguage } from './ui'
import { getRelativeLocaleUrl } from 'astro:i18n'

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (lang in ui) return lang as keyof typeof ui
	return defaultLanguage
}

// export function translations(lang: keyof typeof ui) {
// 	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
// 		return ui[lang][key] || ui[defaultLang][key]
// 	}
// }

export function translations(url: URL) {
	const langKey = getLangFromUrl(url)

	const lang = langKey in ui ? ui[langKey] : ui[defaultLanguage]

	const fn = (path: Path) => {
		return getValueByPath(lang, path)
	}

	return { t: fn, lang: langKey }
}

export function getValueByPath(obj: Lang, path: Path) {
	const split = path.split('.')
	const getValue = (obj: Lang, path: Path) =>
		path.split('.').reduce((acc, key) => acc?.[key], obj) as Lang | string

	const value = getValue(obj, path) ?? getValue(ui[defaultLanguage], path)
	if (typeof value === 'string') return value

	return split.at(-1) ?? ''
}

export function getLocaleUrl(lang: Languages, path: string) {
	return getRelativeLocaleUrl(lang, path).slice(0, -1)
}