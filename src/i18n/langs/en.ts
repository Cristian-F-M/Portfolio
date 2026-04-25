import { getHTMLTitle } from '../../utils/ui'

const en = {
	status: {
		active: 'Active',
		inactive: 'Inactive'
	},
	language: 'English',
	index: {
		title: 'Cristian Morales Portfolio | Software Development Trainee',
		description:
			'Software development trainee focused on web development with skills across different platforms such as Mobile and Desktop.',
		nav: {
			links: {
				home: 'Home',
				projects: 'Projects',
				me: 'Me',
				contact: 'Contact'
			}
		},
		home: {
			available_for_hire: 'Available_for_hire',
			description:
				'I build high-quality, scalable, and visually appealing digital experiences at the intersection of engineering and visual design.',
			view_projects: 'View artifacts',
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
			view_artifact: 'View artifact',
			generic_image_alt: 'Image of the project, showing the app in action',
			description:
				'Exploring the intersection between high-performance architecture and immersive visual interfaces. Each artifact reflects my knowledge and dedication ♥.',
			see_more_artifacts: 'See more artifacts',
			projects: {
				'todo-cm': {
					title: 'Todo CM',
					description:
						'Todo CM is a task management application that goes beyond the conventional, featuring folder organization, notifications after a set time or on a specific date, theme switching, automatic or manual theme creation, among other functions.'
				},
				solitario: {
					title: 'Solitaire',
					description:
						'Classic solitaire game developed in JavaScript that includes move counting, as well as undo and redo options. It allows you to pause and resume the game at any time, as well as restart the current game or start a new one.'
				},
				touch: {
					title: 'Touch',
					description:
						'Creating complex file structures has never been easier. @cmorales_/touch is a powerful CLI tool that lets you generate nested directories and files using a simple and intuitive syntax.'
				},
				'fast-emoji': {
					title: 'Fast Emoji',
					description:
						'If you want easy access to emojis, Fast Emoji is for you. Just press Ctrl + . and a panel will appear where you can start typing; results will automatically be filtered according to your search. You can use the mouse or keyboard arrows to choose the emoji you want, and with a click or by pressing Enter, the emoji will be inserted and the search text will be removed. If you want to cancel, simply press Esc.'
				}
			},
			'404': {
				title: 'We could not find the searched project 😔...',
				description: ''
			},
			open_project: {
				cli: 'Get CLI Tool',
				desktop: 'Download Desktop App"',
				web: 'Open Live App',
				mobile: 'Dowload Mobile App'
			},
			operational_system: 'Operational_System',
			view_on_github: 'View on GitHub'
		},
		me: {
			operational_status: 'Operational_status',
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
		},
		side_menu: {
			language_select: 'Language_engine',
			appearance_engine: 'appearance_engine',
			show_more: 'Show more',
			show_less: 'Show less'
		}
	}
}

export default en