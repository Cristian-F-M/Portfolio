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
	},
	{
		id: 'vite-plugin-html-template',
		name: 'vite-plugin-html-template',
		images: ['1.avif'],
		skills: [],
		latest_version: '2.0.0',
		release_year: '2026',
		github: 'vite-plugin-html-template',
		type: 'plugin',
		url: 'https://www.npmjs.com/package/@cmorales_/vite-plugin-html-template',
		active: true
	},
	{
		id: 'web-votaciones-v2',
		name: 'web-votaciones-v2',
		images: ['1.png'],
		skills: [],
		github: 'web-votaciones-v2',
		type: 'web',
		active: false
	},
	{
		id: 'fast-scroll-chrome-extension',
		name: 'fast-scroll-chrome-extension',
		images: ['1.png', '2.avif'],
		skills: [],
		github: 'fast-scroll-chrome-extension',
		type: 'extension',
		latest_version: '1.0.0',
		release_year: '2026',
		active: true
	},
	{
		id: 'api-votaciones-v2',
		name: 'api-votaciones-v2',
		images: ['1.png', '2.png', '3.png', '4.png'],
		skills: [],
		github: 'api-votaciones-v2',
		type: 'api',
		active: false
	},
	{
		id: 'python-games-web',
		name: 'python-games-web',
		images: ['1.png', '2.png', '3.png'],
		skills: [],
		github: 'python-games-web',
		type: 'web',
		active: true,
		latest_version: '1.0.1',
		release_year: '2025',
		url: 'https://python-games-web.vercel.app'
	},
	{
		id: 'wordle',
		name: 'wordle',
		images: ['1.png', '2.png', '3.png'],
		skills: [],
		github: 'wordle',
		type: 'web',
		active: true,
		latest_version: '1.0.0',
		release_year: '2025',
		url: 'https://wordle-alpha-indol.vercel.app/'
	},
	{
		id: 'buscaminas',
		name: 'buscaminas',
		images: ['1.png', '2.png', '3.png'],
		skills: [],
		type: 'web',
		github: 'buscaminas',
		active: true,
		latest_version: '1.0.0',
		release_year: '2025',
		url: 'https://buscaminas-rho.vercel.app/'
	},
	{
		id: 'video-player',
		name: 'video-player',
		images: ['1.avif'],
		skills: [],
		type: 'web',
		github: 'video-player',
		active: true,
		latest_version: '1.0.0',
		release_year: '2025',
		url: 'https://video-player-lemon-six.vercel.app/'
	},
	{
		id: 'astronomy-picture-day',
		name: 'astronomy-picture-day',
		images: ['1.png'],
		skills: [],
		type: 'web',
		github: 'astronomy-picture-day',
		active: true,
		latest_version: '1.0.0',
		release_year: '2025',
		url: 'https://astronomy-picture-day.netlify.app/'
	}
] satisfies Project[]