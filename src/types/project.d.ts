export type Type =
	| 'web'
	| 'mobile'
	| 'desktop'
	| 'cli'
	| 'other'
	| 'api'

export interface Skill {
	id: string
	name: string
}

export type Image = string

export interface Project {
	id: string
	name: string
	images: Image[]
	latest_version?: string
	release_year?: string
	featured?: boolean
	skills: string[]
	github: string
	type: Type
	url?: string
	active: boolean
}

export type Primitive = string | number | boolean | null | undefined

export type RecursiveValue =
	| Primitive
	| RecursiveValue[]
	| {
			[key: string]: RecursiveValue
	  }