import { getHTMLTitle } from '@/utils/ui'

const en = {
	status: {
		active: 'Active',
		inactive: 'Inactive'
	},
	index: {
		title: 'Cristian Morales Portfolio | Software Development Trainee',
		description:
			'Software development trainee focused on web development with skills across different platforms such as Mobile and Desktop.',
		nav: {
			links: {
				home: 'Home',
				projects: 'Projects',
				me: 'About me',
				contact: 'Contact'
			}
		},
		home: {
			available_for_hire: 'Available_for_hire',
			description:
				'I build high-quality, scalable, and visually appealing digital experiences at the intersection of engineering and visual design.',
			view_projects: 'View projects',
			contact_me: 'Contact me',
			achievements: {
				years_experience: 'Years of experience',
				projects_done: 'Projects completed',
				technologies_learned: 'Technologies learned'
			},
			me_alt:
				'Front-facing photo on a white background of Cristian Morales with a serious and deep gaze, wearing glasses that slightly reflect blue light.'
		},
		projects: {
			deployment_logs: 'Deployment logs',
			featured_projects: getHTMLTitle(
				{ text: 'Projects', separation: true },
				{ text: 'featured', gradient: true }
			),
			description:
				'Exploring the intersection between high-performance architecture and immersive visual interfaces. Each artifact reflects my knowledge and dedication ♥.'
		},
		me: {
			operational_status: 'Operational status',
			title: getHTMLTitle(
				{ text: 'Who', separation: true },
				{ text: 'am I?', gradient: true }
			),
			description:
				'I design digital ecosystems where performance meets precision. My approach goes beyond coding—I solve complex structural challenges with engineering solutions.',
			cards: {
				philosophy: {
					title: 'Philosophy',
					description:
						'Code is a liability; systems are an asset. I design for longevity and scalability.'
				},
				focus: {
					title: 'Focus',
					description:
						'Obsessive optimization of critical paths and high-availability architecture.'
				}
			},
			technical_stack: {
				title: 'Technical stack',
				description:
					'Leveraging modern primitive technologies to build distributed and resilient systems.',
				frontend_layer: 'Frontend layer',
				core_engine: 'Core engineering',
				mobile: 'Mobile',
				infrastructure: {
					title: 'Infrastructure',
					description:
						'Automated pipelines and cloud-native deployments for zero-downtime releases.'
				}
			},
			how_i_build: {
				title: getHTMLTitle(
					{ text: 'How', separation: true },
					{ text: 'do I build?', gradient: true }
				),
				cards: {
					planning: {
						title: 'Planning',
						description:
							'Discovery, user journey mapping, and requirement scope definition.'
					},
					architecture: {
						title: 'Architecture',
						description: 'System design, data modeling, and schema definition'
					},
					development: {
						title: 'Development',
						description:
							'Test-driven implementation with clean and documented code.'
					},
					optimization: {
						title: 'Optimization',
						description: 'Performance tuning, stress testing, and deployment.'
					}
				}
			}
		},
		lets_build: {
			title: getHTMLTitle(
				{ text: 'Let’s build', breakAfter: true },
				{ text: 'something great', gradient: true }
			),
			description:
				'Available for innovative collaborations and technical challenges. Send a message to start the architectural process.',
			click_here: 'Click here',
			form: {
				required: 'Field is required',

				name: {
					name: 'Name',
					placeholder: 'John Doe',
					error: {
						required: 'The field "name"  is required',
						min: 'The "name" field must have at least 2 characters'
					}
				},
				email: {
					name: 'Email',
					placeholder: 'john@gmail.com',
					error: {
						required: 'The field "email" is required',
						valid: 'The field "email" must be a valid email'
					}
				},
				message: {
					name: 'Message',
					placeholder: 'Describe the project parameters',
					error: {
						required: 'The field "message" is required',
						min: 'The field "message" must have at least 10 characters'
					}
				},
				initiate_contact: 'Initiate contact'
			},
			virtual_presence: {
				title: 'Virtual_presence',
				coordinates: 'Coordinates'
			},
			sending: 'Sending...'
		},
		footer: {
			architected_by: 'Architected_by_CMORALES'
		}
	}
}

export default en