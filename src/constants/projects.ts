import type { Project } from '@/types/project'

export const PROJECTS = [
	{
		id: 'todo-cm',
		title: 'index.projects.projects.todo-cm.title',
		description: 'index.projects.projects.todo-cm.description',
		images: [
			{
				alt: 'index.description',
				src: '/images/projects/todo-cm/todo-cm-1.avif'
			},
			{
				alt: 'index.description',
				src: '/images/projects/todo-cm/todo-cm-2.avif'
			},
			{
				alt: 'index.description',
				src: '/images/projects/todo-cm/todo-cm-3.avif'
			},
			{
				alt: 'index.description',
				src: '/images/projects/todo-cm/todo-cm-4.avif'
			},
			{
				alt: 'index.description',
				src: '/images/projects/todo-cm/todo-cm-5.avif'
			},
			{
				alt: 'index.description',
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
		title: 'index.projects.projects.touch.title',
		description: 'index.projects.projects.touch.description',
		images: [
			{
				alt: 'index.description',
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
		title: 'index.projects.projects.fast-emoji.title',
		description: 'index.projects.projects.fast-emoji.description',
		images: [
			{
				alt: 'index.description',
				src: '/images/projects/fast-emoji/fast-emoji-1.png'
			},
			{
				alt: 'index.description',
				src: '/images/projects/fast-emoji/fast-emoji-2.png'
			},
			{
				alt: 'index.description',
				src: '/images/projects/fast-emoji/fast-emoji-3.png'
			},
			{
				alt: 'index.description',
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
		title: 'index.projects.projects.solitario.title',
		description: 'index.projects.projects.solitario.description',
		images: [
			{
				alt: 'index.description',
				src: '/images/projects/solitario/solitario-1.avif'
			},
			{
				alt: 'index.description',
				src: '/images/projects/solitario/solitario-2.avif'
			},
			{
				alt: 'index.description',
				src: '/images/projects/solitario/solitario-3.avif'
			},
			{
				alt: 'index.description',
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