import type { RecursiveValue } from '@/types/project'

export function normalize(str: string) {
	return str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace('_', ' ')
}

export function includes(b: string, s: string) {
	const regex = new RegExp(normalize(s), 'i')
	return regex.test(normalize(b))
}

export function deepSearch(item: RecursiveValue, query: string): boolean {
	const lowerQuery = query.toLowerCase().trim()
	const lowerItem = typeof item === 'string' ? item.toLowerCase() : item
	const booleanOptions = [
		['false', 'Falso'],
		['true', 'Verdadero']
	]

	if (item == null) return false
	if (typeof item === 'boolean')
		return booleanOptions[item ? 1 : 0].some((o) => includes(o, query))
	if (typeof lowerItem === 'string') return includes(lowerItem, lowerQuery)

	const isArray = Array.isArray(item)
	const isObject = !isArray && typeof item === 'object'

	if (isArray) return item.some((i) => deepSearch(i, lowerQuery))

	if (isObject)
		return Object.values(item).some((i) => deepSearch(i, lowerQuery))

	return false
}