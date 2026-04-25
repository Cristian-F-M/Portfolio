import { getHTMLTitle } from '../../utils/ui'

const pt = {
	status: {
		active: 'Ativo',
		inactive: 'Inativo'
	},
	language: 'Português',
	index: {
		title:
			'Portfólio de Cristian Morales | Trainee em desenvolvimento de software',
		description:
			'Trainee em desenvolvimento de software focado em desenvolvimento web com habilidades em plataformas como Mobile e Desktop.',
		nav: {
			links: {
				home: 'Início',
				projects: 'Projetos',
				me: 'Sobre mim',
				contact: 'Contato'
			}
		},
		home: {
			available_for_hire: 'Disponível_para_trabalho',
			description:
				'Crio experiências digitais de alta qualidade, escaláveis e visualmente atraentes na interseção entre engenharia e design.',
			view_projects: 'Ver projetos',
			contact_me: 'Contato',
			achievements: {
				years_experience: 'Anos de experiência',
				projects_done: 'Projetos realizados',
				technologies_learned: 'Tecnologias aprendidas'
			},
			me_alt:
				'Foto frontal em fundo branco de Cristian Morales com olhar sério e profundo, usando óculos com leve reflexo azul.'
		},
		projects: {
			deployment_logs: 'Logs de deploy',
			featured_projects: getHTMLTitle(
				{ text: 'Projetos', separation: true },
				{ text: 'em destaque', gradient: true }
			),
			view_artifact: 'Ver projeto',
			generic_image_alt: 'Imagem do projeto mostrando o app em funcionamento',
			description:
				'Explorando a interseção entre arquitetura de alto desempenho e interfaces visuais imersivas. Cada projeto reflete meu conhecimento e dedicação ♥.',
			see_more_artifacts: 'Ver mais projetos',
			projects: {
				'todo-cm': {
					title: 'Todo CM',
					description:
						'Todo CM é um aplicativo de gerenciamento de tarefas que vai além do convencional, com organização por pastas, notificações após um tempo determinado ou em uma data específica, troca de temas, criação automática ou manual de temas, entre outras funcionalidades.'
				},
				solitario: {
					title: 'Paciência',
					description:
						'Jogo clássico de paciência desenvolvido em JavaScript que inclui contagem de movimentos, além de opções para desfazer e refazer jogadas. Permite pausar e retomar a partida a qualquer momento, além de reiniciar o jogo atual ou iniciar uma nova partida.'
				},
				touch: {
					title: 'Touch',
					description:
						'Criar estruturas de arquivos complexas nunca foi tão fácil. @cmorales_/touch é uma poderosa ferramenta CLI que permite gerar diretórios e arquivos aninhados usando uma sintaxe simples e intuitiva.'
				},
				'fast-emoji': {
					title: 'Fast Emoji',
					description:
						'Se você quer acessar emojis facilmente, Fast Emoji é para você. Basta pressionar Ctrl + . e um painel será exibido onde você pode começar a digitar; os resultados serão automaticamente filtrados de acordo com sua busca. Você pode usar o mouse ou as setas do teclado para escolher o emoji desejado, e com um clique ou pressionando Enter, o emoji será inserido e o texto de busca será removido. Se quiser cancelar, basta pressionar Esc.'
				}
			},
			'404': {
				title: 'Não foi possível encontrar o projeto pesquisado 😔...',
				description: ''
			},
			open_project: {
				cli: 'Obter ferramenta CLI',
				desktop: 'Baixar aplicativo desktop',
				web: 'Abrir aplicativo online',
				mobile: 'Baixar aplicativo mobile'
			},
			operational_system: 'Sistema Operacional',
			view_on_github: 'Ver no GitHub'
		},
		me: {
			operational_status: 'Status_operacional',
			title: getHTMLTitle(
				{ text: 'Quem', separation: true },
				{ text: 'sou eu?', gradient: true }
			),
			description:
				'Projeto ecossistemas digitais onde desempenho encontra precisão. Vou além do código—resolvo desafios complexos com engenharia.',
			cards: {
				philosophy: {
					title: 'Filosofia',
					description:
						'Código é um custo; sistemas são um ativo. Projeto pensando em longevidade e escalabilidade.'
				},
				focus: {
					title: 'Foco',
					description:
						'Otimização obsessiva de caminhos críticos e arquiteturas altamente disponíveis.'
				}
			},
			technical_stack: {
				title: 'Stack técnico',
				description:
					'Aproveitando tecnologias modernas para construir sistemas distribuídos e resilientes.',
				frontend_layer: 'Camada frontend',
				core_engine: 'Engenharia principal',
				mobile: 'Mobile',
				infrastructure: {
					title: 'Infraestrutura',
					description:
						'Pipelines automatizados e deploys cloud-native sem downtime.'
				}
			},
			how_i_build: {
				title: getHTMLTitle(
					{ text: 'Como', separation: true },
					{ text: 'eu construo?', gradient: true }
				),
				cards: {
					planning: {
						title: 'Planejamento',
						description:
							'Descoberta, jornada do usuário e definição de requisitos.'
					},
					architecture: {
						title: 'Arquitetura',
						description:
							'Design de sistemas, modelagem de dados e definição de esquema'
					},
					development: {
						title: 'Desenvolvimento',
						description: 'Implementação orientada a testes com código limpo.'
					},
					optimization: {
						title: 'Otimização',
						description: 'Otimização de performance, testes de carga e deploy.'
					}
				}
			}
		},
		lets_build: {
			title: getHTMLTitle(
				{ text: 'Vamos construir', breakAfter: true },
				{ text: 'algo grande', gradient: true }
			),
			description:
				'Disponível para colaborações inovadoras e desafios técnicos. Envie uma mensagem para começar.',
			click_here: 'Clique aqui',
			form: {
				required: 'Campo obrigatório',
				name: {
					name: 'Nome',
					placeholder: 'John Doe',
					error: {
						required: 'O campo "nome" é obrigatório',
						min: 'O campo "nome" deve ter pelo menos 2 caracteres'
					}
				},
				email: {
					name: 'Email',
					placeholder: 'john@gmail.com',
					error: {
						required: 'O campo "email" é obrigatório',
						valid: 'O campo "email" deve ser válido'
					}
				},
				message: {
					name: 'Mensagem',
					placeholder: 'Descreva os parâmetros do projeto',
					error: {
						required: 'O campo "mensagem" é obrigatório',
						min: 'O campo "mensagem" deve ter pelo menos 10 caracteres'
					}
				},
				initiate_contact: 'Iniciar contato'
			},
			virtual_presence: {
				title: 'Presença_virtual',
				coordinates: 'Coordenadas'
			},
			sending: 'Enviando...'
		},
		footer: {
			architected_by: 'Desenvolvido_por_CMORALES'
		},
		side_menu: {
			language_select: 'Selecionar_idioma',
			appearance_engine: 'Motor_de_aparência',
			show_more: 'Ver mais',
			show_less: 'Ver menos'
		}
	}
}

export default pt