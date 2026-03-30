import nodemailer from 'nodemailer'
import { loadEnvFile } from 'node:process'

loadEnvFile()

const { SMTP_USER, SMTP_PASS, MY_EMAIL } = process.env

if (!SMTP_PASS || !SMTP_USER) throw new Error('No SMTP config provided')

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS
	}
})

export async function sendEmail({
	name,
	email,
	message
}: {
	name: string
	email: string
	message: string
}) {
	const body = `${message}


	\r${name}\n\r${email}`

	try {
		const info = await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: MY_EMAIL,
			subject: 'I want to get your development services',
			text: body
		})

		if (info.accepted) {
			return { succes: true }
		}

		return { succes: false }
	} catch (err) {
		console.log(err)
		return { succes: false }
	}
}