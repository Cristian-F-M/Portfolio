import type { defaultLangKeys } from '@/types/i18n'

export interface Link {
	id: string
	url: string
	path: keyof defaultLangKeys['index']['nav']['links']
}

export const links = [
	{
		id: 'home',
		path: 'home',
		url: '#home'
	},
	{
		id: 'projects',
		path: 'projects',
		url: '#projects'
	},
	{
		id: 'me',
		path: 'me',
		url: '#me'
	},
	{
		id: 'contact',
		path: 'contact',
		url: '#contact'
	}
] satisfies Link[]