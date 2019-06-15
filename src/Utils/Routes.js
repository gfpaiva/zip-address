import { Home, NotFound, Search } from '../Pages';

const routes = [
	{
		exact: true,
		path: '/',
		component: Home,
		key: 'home'
	},
	{
		exact: true,
		path: '/search',
		component: Search,
		key: 'search'
	},
	{
		component: NotFound,
		key: 'notFound'
	}
];

export default routes;