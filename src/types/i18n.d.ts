import type { ui, languages, defaultLanguage } from '@/i18n/ui'

export type Languages = keyof typeof languages
export type defaultLangKeys = (typeof ui)[typeof defaultLanguage]
// biome-ignore lint/suspicious/noExplicitAny: -
export type Lang = Record<string, any>

type PathToString<T, P extends string = ''> = {
	[K in keyof T]: T[K] extends object
		? PathToString<T[K], `${P}${P extends '' ? '' : '.'}${Extract<K, string>}`>
		: `${P}${P extends '' ? '' : '.'}${Extract<K, string>}`
}[keyof T]

export type Path = PathToString<(typeof ui)[typeof defaultLanguage]>