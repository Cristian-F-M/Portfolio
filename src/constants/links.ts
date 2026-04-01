export interface Link {
	url: string
	text: string
}

export const links = [
	{
		text: 'Home',
		url: '#home'
	},
	{
		text: 'projects',
		url: '#projects'
	},
	{
		text: 'me',
		url: '#me'
	},
	{
		text: 'contact',
		url: '#contact'
	}
] satisfies Link[]