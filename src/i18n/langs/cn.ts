import { getHTMLTitle } from '../../utils/ui'

const zh = {
	status: {
		active: '激活',
		inactive: '未激活'
	},
	language: '中文',
	index: {
		title: 'Cristian Morales 作品集 | 软件开发实习生',
		description:
			'专注于 Web 开发的软件开发实习生，具备移动端和桌面端开发能力。',
		nav: {
			links: {
				home: '首页',
				projects: '项目',
				me: '关于我',
				contact: '联系'
			}
		},
		home: {
			available_for_hire: '可接受工作',
			description:
				'我在工程与视觉设计的交汇处构建高质量、可扩展且美观的数字体验。',
			view_projects: '查看项目',
			contact_me: '联系我',
			achievements: {
				years_experience: '经验年数',
				projects_done: '完成项目',
				technologies_learned: '掌握技术'
			},
			me_alt:
				'Cristian Morales 白色背景正面照片，表情严肃，佩戴眼镜并带有轻微蓝光反射。'
		},
		projects: {
			deployment_logs: '部署日志',
			featured_projects: getHTMLTitle(
				{ text: '精选', separation: true },
				{ text: '项目', gradient: true }
			),
			description:
				'探索高性能架构与沉浸式界面之间的交汇。每个项目都体现了我的知识与投入 ♥。'
		},
		me: {
			operational_status: '运行状态',
			title: getHTMLTitle(
				{ text: '我是谁', separation: true },
				{ text: '？', gradient: true }
			),
			description:
				'我设计性能与精度结合的数字生态系统。不只是写代码——我用工程方法解决复杂问题。',
			cards: {
				philosophy: {
					title: '理念',
					description: '代码是成本，系统是资产。我注重长期性与可扩展性。'
				},
				focus: {
					title: '专注',
					description: '对关键路径优化和高可用架构的极致追求。'
				}
			},
			technical_stack: {
				title: '技术栈',
				description: '利用现代技术构建分布式与高弹性系统。',
				frontend_layer: '前端层',
				core_engine: '核心工程',
				mobile: '移动端',
				infrastructure: {
					title: '基础设施',
					description: '自动化流水线与云原生部署，实现零停机发布。'
				}
			},
			how_i_build: {
				title: getHTMLTitle(
					{ text: '我如何', separation: true },
					{ text: '构建？', gradient: true }
				),
				cards: {
					planning: {
						title: '规划',
						description: '需求探索、用户旅程分析与范围定义。'
					},
					architecture: {
						title: '架构',
						description: '系统设计、数据建模与结构定义'
					},
					development: {
						title: '开发',
						description: '基于测试驱动的干净代码实现。'
					},
					optimization: {
						title: '优化',
						description: '性能优化、压力测试与部署。'
					}
				}
			}
		},
		lets_build: {
			title: getHTMLTitle(
				{ text: '一起构建', breakAfter: true },
				{ text: '伟大的项目', gradient: true }
			),
			description: '欢迎创新合作与技术挑战。发送消息开始合作。',
			click_here: '点击这里',
			form: {
				required: '此字段为必填',
				name: {
					name: '姓名',
					placeholder: 'John Doe',
					error: {
						required: '姓名为必填项',
						min: '姓名至少需要 2 个字符'
					}
				},
				email: {
					name: '邮箱',
					placeholder: 'john@gmail.com',
					error: {
						required: '邮箱为必填项',
						valid: '请输入有效的邮箱'
					}
				},
				message: {
					name: '消息',
					placeholder: '描述项目参数',
					error: {
						required: '消息为必填项',
						min: '消息至少需要 10 个字符'
					}
				},
				initiate_contact: '开始联系'
			},
			virtual_presence: {
				title: '虚拟存在',
				coordinates: '坐标'
			},
			sending: '发送中...'
		},
		footer: {
			architected_by: '由_CMORALES_开发'
		},
		side_menu: {
			language_select: '选择语言',
			appearance_engine: '外观引擎',
			show_more: '显示更多',
			show_less: '显示更少'
		}
	}
}

export default zh