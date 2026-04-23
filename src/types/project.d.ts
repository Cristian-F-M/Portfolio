import type { Path } from '@/types/i18n'

export type Type = 'web' | 'mobile' | 'desktop' | 'cli'

export interface Skill {
	id: string
	name: string
}

export interface Image {
	src: string
	alt: Path
}

export interface Project {
	id: string
	title: Path
	description: Path
	images: Image[]
	latest_version: string
	release_year: string
	featured?: boolean
	skills: string[]
	github: string
	type: Type
	url: string
	active: boolean
}