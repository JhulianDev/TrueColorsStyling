import { createBrowserRouter } from 'react-router-dom'
import HeaderV1 from '../components/sections/headers/headerV1/HeaderV1'
import Home from '../components/pages/home/Home'
import Error404 from '../components/pages/error404/Error404'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <HeaderV1 />,
		errorElement: <Error404 />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
])

export default Router
