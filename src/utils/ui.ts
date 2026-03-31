import { twMerge } from 'tailwind-merge'

interface T {
	text: string
	breakAfter?: boolean
	gradient?: boolean
	class?: string
	separation?: boolean
}

export function getHTMLTitle(...texts: T[]) {
	const html = texts.map((t) => {
		const c = twMerge('text-white', t.class, t.gradient && 'gradient-text')
		let base = `<span class="${c}">${t.text}</span>`
		if (!t.breakAfter && t.separation) base += '\n'
		if (!t.separation && t.breakAfter) base += `\n<br/>\n`

		return base
	})

	return html.join('')
}