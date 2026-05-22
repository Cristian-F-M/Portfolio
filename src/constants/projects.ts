import type { Project, Type } from '@/types/project'

export const TypeObj = {
	web: 'web',
	mobile: 'mobile',
	desktop: 'desktop',
	cli: 'cli'
} satisfies Record<Type, Type>

export const PROJECTS = [
	{
		id: 'todo-cm',
		title: 'projects:todo-cm.title',
		description: 'projects:todo-cm.description',
		images: [
			{
				src: '/images/projects/todo-cm/todo-cm-1.avif'
			},
			{
				src: '/images/projects/todo-cm/todo-cm-2.avif'
			},
			{
				src: '/images/projects/todo-cm/todo-cm-3.avif'
			},
			{
				src: '/images/projects/todo-cm/todo-cm-4.avif'
			},
			{
				src: '/images/projects/todo-cm/todo-cm-5.avif'
			},
			{
				src: '/images/projects/todo-cm/todo-cm-6.avif'
			}
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
		title: 'projects:touch.title',
		description: 'projects:touch.description',
		images: [
			{
				src: '/images/projects/touch/touch.avif'
			}
		],
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
		title: 'projects:fast-emoji.title',
		description: 'projects:fast-emoji.description',
		images: [
			{
				src: '/images/projects/fast-emoji/fast-emoji-1.png'
			},
			{
				src: '/images/projects/fast-emoji/fast-emoji-2.png'
			},
			{
				src: '/images/projects/fast-emoji/fast-emoji-3.png'
			},
			{
				src: '/images/projects/fast-emoji/fast-emoji-4.png'
			}
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
		title: 'projects:solitario.title',
		description: 'projects:solitario.description',
		images: [
			{
				src: '/images/projects/solitario/solitario-1.avif'
			},
			{
				src: '/images/projects/solitario/solitario-2.avif'
			},
			{
				src: '/images/projects/solitario/solitario-3.avif'
			},
			{
				src: '/images/projects/solitario/solitario-4.avif'
			}
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