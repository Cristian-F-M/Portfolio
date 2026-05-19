import type { defaultLangKeys } from '@/types/i18n'
import {
	IconCode,
	IconHome,
	IconMail,
	IconUserCircle,
	type IconProps
} from '@tabler/icons-react'

export interface Link {
	id: string
	url: string
	path: keyof defaultLangKeys['index']['nav']['links']
	icon: React.ComponentType<IconProps>
}

export const links = [
	{
		id: 'home',
		path: 'home',
		url: '/#home',
		icon: IconHome
	},
	{
		id: 'projects',
		path: 'projects',
		url: '/#projects',
		icon: IconCode
	},
	{
		id: 'me',
		path: 'me',
		url: '/#me',
		icon: IconUserCircle
	},
	{
		id: 'contact',
		path: 'contact',
		url: '/#contact',
		icon: IconMail
	}
] satisfies Link[]