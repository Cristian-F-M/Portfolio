import { createBrowserRouter } from 'react-router'
import Layout from '@/layouts/layout'
import App from '@/App'

const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{
				index: true,
				Component: App
			}
		]
	}
])

export default router