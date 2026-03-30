import { defineAction } from 'astro:actions'
import { z } from 'astro/zod'
import { sendEmail } from '@/utils/mailter'

const scheme = z.object({
	name: z
		.string({ error: 'Name field is required' })
		.min(2, { error: 'Name field must have at least 2 characters' }),
	email: z.email({ error: 'Email field must be a valid email' }),
	message: z
		.string({ error: 'Message field is required' })
		.min(10, { error: 'Message field must have at least 10 characters' })
})

export const contact = {
	sendEmail: defineAction({
		accept: 'form',
		input: scheme,
		handler: async ({ name, email, message }) => {
			const { succes } = await sendEmail({ name, email, message })

			if (succes) return { succes, message: 'Mail sent successfully' }
			return { succes, message: 'We were unable to send the email' }
		}
	})
}