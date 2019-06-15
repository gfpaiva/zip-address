import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import routes from '../../Utils/Routes';

import './App.scss';

export default function App() {
	return (
		<main className="app">
			<Header />
			<section className="app__content container">
				<Switch>
					{routes.map(route => (
						<Route {...route} />
					))}
				</Switch>
			</section>
			<Footer />
		</main>
	)
}