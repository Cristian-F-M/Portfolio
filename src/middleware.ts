// // src/middleware.ts
import { defineMiddleware } from 'astro:middleware'
import { defaultLanguage, languages, type ui } from './i18n/ui'

export const onRequest = defineMiddleware(({ url }, next) => {
	if (url.pathname.startsWith('/_')) return next()

	const lang = url.pathname.split('/')[1] as keyof typeof ui

	console.log(url)

	if (!lang || !Object.keys(languages).includes(lang)) {
		return Response.redirect(new URL(`/${defaultLanguage}/`, url))
	}

	return next()
})