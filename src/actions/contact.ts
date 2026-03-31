import { defineAction } from 'astro:actions'
import { z } from 'astro/zod'
import { sendEmail } from '@/utils/mailter'

const scheme = z.object({
	name: z
		.string({ error: 'error.name.required' })
		.min(2, { error: 'error.name.min' }),
	email: z.email({ error: 'error.email.valid' }),
	message: z
		.string({ error: 'error.message.required' })
		.min(10, { error: 'error.message.min' })
})

export const contact = {
	sendEmail: defineAction({
		accept: 'form',
		input: scheme,
		handler: async ({ name, email, message }) => {
			const { success } = await sendEmail({ name, email, message })

			if (success) return { success, message: 'Mail sent successfully' }
			return { success, message: 'We were unable to send the email' }
		}
	})
}