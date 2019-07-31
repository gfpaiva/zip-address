import { Home, NotFound, Search } from '../Pages';
import { FunctionComponent, ComponentClass } from 'react';

interface Route {
	exact?:boolean,
	path?:string,
	component:ComponentClass|FunctionComponent,
	key:string
}

const routes:Route[] = [
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