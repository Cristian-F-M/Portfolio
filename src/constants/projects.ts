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
			'/images/projects/todo-cm/todo-cm-1.avif',
			'/images/projects/todo-cm/todo-cm-2.avif',
			'/images/projects/todo-cm/todo-cm-3.avif',
			'/images/projects/todo-cm/todo-cm-4.avif',
			'/images/projects/todo-cm/todo-cm-5.avif',
			'/images/projects/todo-cm/todo-cm-6.avif'
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
		images: ['/images/projects/touch/touch.avif'],
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
			'/images/projects/fast-emoji/fast-emoji-1.png',
			'/images/projects/fast-emoji/fast-emoji-2.png',
			'/images/projects/fast-emoji/fast-emoji-3.png',
			'/images/projects/fast-emoji/fast-emoji-4.png'
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
			'/images/projects/solitario/solitario-1.avif',
			'/images/projects/solitario/solitario-2.avif',
			'/images/projects/solitario/solitario-3.avif',
			'/images/projects/solitario/solitario-4.avif'
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