import { createBrowserRouter } from 'react-router'
import Layout from '@/layouts/layout'
import App from '@/App'
import ProjectId from '@/pages/projects/id'
import ProjectPage from '@/pages/projects'
import NotFound from '@/pages/projects/404'
import GlobaNotFound from '@/pages/404'

const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{
				index: true,
				Component: App
			},
			{
				path: 'projects/',
				children: [
					{
						index: true,
						Component: ProjectPage
					},
					{
						path: ':id',
						Component: ProjectId
					},
					{
						path: '404',
						Component: NotFound
					}
				]
			},
			{
				path: '*',
				Component: GlobaNotFound
			}
		]
	}
])

export default router