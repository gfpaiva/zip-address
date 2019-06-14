import React from 'react';

import './App.scss';
import logo from './luizalabs.png';

export default function App() {
	return (
		<>
			<h1>Olá mundo!</h1>
			<p>Teste para o <img src={logo} alt="Luiza Labs" title="Luiza Labs" /></p>
		</>
	)
};