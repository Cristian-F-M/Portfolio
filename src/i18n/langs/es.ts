import { getHTMLTitle } from '../../utils/ui'

const es = {
	status: {
		active: 'Activo',
		inactive: 'Inactivo'
	},
	language: "Español",
	index: {
		title:
			'Portafolio de Cristian Morales | Trainee en el desarrollo de software',
		description:
			'Trainee en el desarrollo de software enfocado en el desarrollo web con habilidades en diferentes plataformas como Móvil, Escritorio.',
		nav: {
			links: {
				home: 'Inicio',
				projects: 'Proyectos',
				me: 'Sobre mí',
				contact: 'Contacto'
			}
		},
		home: {
			available_for_hire: 'Disponible_para_trabajar',
			description:
				'Creo experiencias digitales de alta calidad, escalables y estéticamente atractivas en la intersección de la ingeniería y el diseño visual.',
			view_projects: 'Ver proyectos',
			contact_me: 'Contactar',
			achievements: {
				years_experience: 'Años de experiencia',
				projects_done: 'Proyectos hechos',
				technologies_learned: 'Tecnologias aprendidas'
			},
			me_alt:
				'Foto frontal en fondo blanco de Cristian Morales con mirada sería y profunda, expresión sería y usa gafas que reflejan un poco la luz azul.'
		},
		projects: {
			deployment_logs: 'Deployment logs',
			featured_projects: getHTMLTitle(
				{ text: 'Proyectos', separation: true },
				{ text: 'destacados', gradient: true }
			), // Proyectos destacados
			description:
				'Explorando la intersección entre la arquitectura de alto rendimiento y las interfaces visuales inmersivas. Cada artefacto es una muestra de mi conocimiento y dedicación ♥.'
		},
		me: {
			operational_status: 'Estado_operativo',
			title: getHTMLTitle(
				{ text: '¿Quién', separation: true },
				{ text: 'soy?', gradient: true }
			), // ¿Quién soy?
			description:
				'Diseño ecosistemas digitales donde el rendimiento se une a la precisión. Mi enfoque va más allá de la simple programación—resuelvo desafíos estructurales complejos con soluciones de ingeniería.',
			cards: {
				philosophy: {
					title: 'Filosofia',
					description:
						'El código es una desventaja; los sistemas son un activo. Diseño pensando en la longevidad y la escalabilidad.'
				},
				focus: {
					title: 'Enfocar',
					description:
						'Optimización obsesiva de las rutas críticas y la arquitectura de alta disponibilidad.'
				}
			},
			technical_stack: {
				title: 'Stack técnico',
				description:
					'Aprovechar las tecnologías primitivas modernas para construir sistemas distribuidos y resilientes.',
				frontend_layer: 'Capa frontend',
				core_engine: 'Ingenieria principal',
				mobile: 'Móvil',
				infrastructure: {
					title: 'Infraestructura',
					description:
						'Pipelines automatizados e implementaciones nativas en la nube para lanzamientos sin tiempo de inactividad.'
				}
			},
			how_i_build: {
				title: getHTMLTitle(
					{ text: '¿Cómo', separation: true },
					{ text: 'construyo?', gradient: true }
				), // '¿Cómo construyo?',
				cards: {
					planning: {
						title: 'Planeación',
						description:
							'Descubrimiento, mapeo del recorrido del usuario y definición del alcance de los requisitos.'
					},
					architecture: {
						title: 'Arquitectura',
						description:
							'Diseño del sistema, modelado de datos y definición del esquema'
					},
					development: {
						title: 'Desarrollo',
						description:
							'Implementación basada en pruebas con código limpio y documentado.'
					},
					optimization: {
						title: 'Optimización',
						description:
							'Optimización del rendimiento, pruebas de estrés e implementación.'
					}
				}
			}
		},
		lets_build: {
			title: getHTMLTitle(
				{ text: 'Construyamos', breakAfter: true },
				{ text: 'algo grande', gradient: true }
			), // Construyamos algo grande
			description:
				'Disponible para colaboraciones innovadoras y desafíos técnicos. Envía un mensaje para comenzar el proceso arquitectónico.',
			click_here: 'Haz clic aquí',
			form: {
				required: 'El campo es requerido',

				name: {
					name: 'Nombre',
					placeholder: 'John Doe',
					error: {
						required: 'El campo "nombre" es requerido',
						min: 'El campo "nombre" debe tener al menos 2 carácteres'
					}
				},
				email: {
					name: 'Correo electrónico',
					placeholder: 'john@gmail.com',
					error: {
						required: 'El campo "correo electrónico" es requerido',
						valid: 'El campo "correo electrónico" debe ser un correo válido'
					}
				},
				message: {
					name: 'Mensaje',
					placeholder: 'Describe lo parametros del proyecto',
					error: {
						required: 'El campo "Mensaje" es requerido',
						min: 'El campo "Mensaje" debe tener al menos 10 carácteres'
					}
				},
				initiate_contact: 'Iniciar contacto'
			},
			virtual_presence: {
				title: 'Presencia_virtual',
				coordinates: 'Coordenadas'
			},
			sending: 'Enviando...'
		},
		footer: {
			architected_by: 'Desarrollado_por_CMORALES'
		},
		side_menu: {
			language_select: 'Selecionar_idioma',
			appearance_engine: 'Motor_de_apariencia',
			show_more: 'Ver más',
			show_less: 'Ver menos'
		}
	}
}

export default es