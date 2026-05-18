export const supportedLanguages = ['es', 'en', 'pr', 'cn', 'fr'] as const
export const defaultLanguage = 'en'
export const languages = {
	es: {
		code: 'es',
		name: 'Español'
	},
	en: {
		code: 'en',
		name: 'English'
	},
	cn: {
		code: 'cn',
		name: '中文'
	},
	fr: {
		code: 'fr',
		name: 'Français'
	},
	pr: {
		code: 'pr',
		name: 'Português'
	}
} satisfies Record<
	(typeof supportedLanguages)[number],
	{ code: string; name: string }
>