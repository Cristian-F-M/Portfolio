import * as z from 'zod'

export const contactScheme = z.object({
	name: z
		.string('index:sections.lets_build.form.name.error.required')
		.min(2, 'index:sections.lets_build.form.name.error.min'),
	email: z.email('index:sections.lets_build.form.email.error.valid'),
	message: z
		.string('index:sections.lets_build.form.message.error.required')
		.min(10, 'index:sections.lets_build.form.message.error.min')
})