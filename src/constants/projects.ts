import type { Project, Type } from '@/types/project'

export const TypeObj = {
	web: 'web',
	mobile: 'mobile',
	desktop: 'desktop',
	cli: 'cli',
	plugin: 'plugin',
	extension: 'extension',
	api: 'api'
} satisfies Record<Type, Type>

export const PROJECTS = [
	{
		id: 'todo-cm',
		name: 'todo-cm',
		images: [
			'todo-cm-1.avif',
			'todo-cm-2.avif',
			'todo-cm-3.avif',
			'todo-cm-4.avif',
			'todo-cm-5.avif',
			'todo-cm-6.avif'
		],
		latest_version: '1.21.2',
		release_year: '2026',
		featured: true,
		skills: ['React', 'React_native'],
		github: 'todo-cm',
		type: 'mobile',
		url: 'https://github.com/Cristian-F-M/todo-cm/releases/latest',
		active: true
	},
	{
		id: 'touch',
		name: 'touch',
		images: ['touch.avif'],
		latest_version: '1.2.5',
		release_year: '2026',
		featured: true,
		skills: ['Node.js', 'npm'],
		github: 'touch-npm',
		type: 'cli',
		url: 'https://www.npmjs.com/package/@cmorales_/touch',
		active: true
	},
	{
		id: 'fast-emoji',
		name: 'fast-emoji',
		images: [
			'fast-emoji-1.png',
			'fast-emoji-2.png',
			'fast-emoji-3.png',
			'fast-emoji-4.png'
		],
		latest_version: '1.0.1',
		release_year: '2026',
		featured: true,
		skills: ['Python', 'React', 'webview'],
		github: 'fast-emoji',
		type: 'desktop',
		url: 'https://github.com/Cristian-F-M/fast-emoji/releases/latest',
		active: true
	},
	{
		id: 'solitario',
		name: 'solitario',
		images: [
			'solitario-1.avif',
			'solitario-2.avif',
			'solitario-3.avif',
			'solitario-4.avif'
		],
		latest_version: '1.0.0',
		release_year: '2026',
		featured: true,
		skills: ['HTML', 'CSS', 'JS', 'TAILWINDCSS'],
		github: 'solitario',
		type: 'web',
		url: 'https://solitario-chi.vercel.app/',
		active: true
	}
] satisfies Project[]