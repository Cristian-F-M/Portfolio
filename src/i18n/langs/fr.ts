import { getHTMLTitle } from '../../utils/ui'

const fr = {
	status: {
		active: 'Actif',
		inactive: 'Inactif'
	},
	language: "Français",
	index: {
		title:
			'Portfolio de Cristian Morales | Stagiaire en développement logiciel',
		description:
			'Stagiaire en développement logiciel axé sur le développement web avec des compétences sur différentes plateformes comme Mobile et Bureau.',
		nav: {
			links: {
				home: 'Accueil',
				projects: 'Projets',
				me: 'À propos',
				contact: 'Contact'
			}
		},
		home: {
			available_for_hire: 'Disponible_pour_travailler',
			description:
				'Je crée des expériences numériques de haute qualité, évolutives et esthétiquement attrayantes à l’intersection de l’ingénierie et du design visuel.',
			view_projects: 'Voir projets',
			contact_me: 'Contacter',
			achievements: {
				years_experience: 'Années d’expérience',
				projects_done: 'Projets réalisés',
				technologies_learned: 'Technologies apprises'
			},
			me_alt:
				'Photo frontale sur fond blanc de Cristian Morales avec un regard sérieux et profond, expression sérieuse et portant des lunettes reflétant légèrement une lumière bleue.'
		},
		projects: {
			deployment_logs: 'Logs de déploiement',
			featured_projects: getHTMLTitle(
				{ text: 'Projets', separation: true },
				{ text: 'en vedette', gradient: true }
			),
			description:
				'Explorer l’intersection entre une architecture haute performance et des interfaces visuelles immersives. Chaque artefact reflète mes connaissances et mon engagement ♥.'
		},
		me: {
			operational_status: 'Statut_opérationnel',
			title: getHTMLTitle(
				{ text: 'Qui', separation: true },
				{ text: 'suis-je ?', gradient: true }
			),
			description:
				'Je conçois des écosystèmes numériques où la performance rencontre la précision. Mon approche va au-delà du simple code—je résous des défis structurels complexes avec des solutions d’ingénierie.',
			cards: {
				philosophy: {
					title: 'Philosophie',
					description:
						'Le code est un inconvénient ; les systèmes sont un atout. Je conçois en pensant à la longévité et à l’évolutivité.'
				},
				focus: {
					title: 'Focus',
					description:
						'Optimisation obsessionnelle des chemins critiques et des architectures à haute disponibilité.'
				}
			},
			technical_stack: {
				title: 'Stack technique',
				description:
					'Exploiter les technologies modernes pour construire des systèmes distribués et résilients.',
				frontend_layer: 'Couche frontend',
				core_engine: 'Ingénierie principale',
				mobile: 'Mobile',
				infrastructure: {
					title: 'Infrastructure',
					description:
						'Pipelines automatisés et déploiements cloud natifs pour des lancements sans interruption.'
				}
			},
			how_i_build: {
				title: getHTMLTitle(
					{ text: 'Comment', separation: true },
					{ text: 'je construis ?', gradient: true }
				),
				cards: {
					planning: {
						title: 'Planification',
						description:
							'Découverte, cartographie du parcours utilisateur et définition du périmètre des exigences.'
					},
					architecture: {
						title: 'Architecture',
						description:
							'Conception du système, modélisation des données et définition du schéma'
					},
					development: {
						title: 'Développement',
						description:
							'Implémentation basée sur les tests avec un code propre et documenté.'
					},
					optimization: {
						title: 'Optimisation',
						description:
							'Optimisation des performances, tests de charge et déploiement.'
					}
				}
			}
		},
		lets_build: {
			title: getHTMLTitle(
				{ text: 'Construisons', breakAfter: true },
				{ text: 'quelque chose de grand', gradient: true }
			),
			description:
				'Disponible pour des collaborations innovantes et des défis techniques. Envoyez un message pour démarrer le processus.',
			click_here: 'Cliquez ici',
			form: {
				required: 'Le champ est requis',
				name: {
					name: 'Nom',
					placeholder: 'John Doe',
					error: {
						required: 'Le champ "nom" est requis',
						min: 'Le champ "nom" doit contenir au moins 2 caractères'
					}
				},
				email: {
					name: 'Email',
					placeholder: 'john@gmail.com',
					error: {
						required: 'Le champ "email" est requis',
						valid: 'Le champ "email" doit être valide'
					}
				},
				message: {
					name: 'Message',
					placeholder: 'Décrivez les paramètres du projet',
					error: {
						required: 'Le champ "message" est requis',
						min: 'Le champ "message" doit contenir au moins 10 caractères'
					}
				},
				initiate_contact: 'Démarrer le contact'
			},
			virtual_presence: {
				title: 'Présence_virtuelle',
				coordinates: 'Coordonnées'
			},
			sending: 'Envoi...'
		},
		footer: {
			architected_by: 'Développé_par_CMORALES'
		},
		side_menu: {
			language_select: 'Sélectionner_langue',
			appearance_engine: 'Moteur_d’apparence',
			show_more: 'Voir plus',
			show_less: 'Voir moins'
		}
	}
}

export default fr