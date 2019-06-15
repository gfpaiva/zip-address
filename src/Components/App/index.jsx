import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import SearchForm from '../SearchForm';

import './App.scss';

export default function App() {
	return (
		<main className="app">
			<Header />
			<section className="app__content container">
				<SearchForm />
			</section>
			<Footer />
		</main>
	)
}