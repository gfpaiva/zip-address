import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Components/Button';
import { Map, Pin } from '../../Components/Icons';

import './Home.scss';

export default function Home() {
	return (
		<div className="home text-center">
			<Map className="home__map-icon" />

			<h2 className="home__title">Busca CEP</h2>

			<p className="home__description">
				Bem-vindo <span role="img" aria-label="Rosto sorrindo">😀</span> <br />
				Consulte detalhes de um endereço e sua localização no mapa.
			</p>

			<Button>
				<Link to="/search">
					<Pin />&nbsp;
					Clique aqui para começar
				</Link>
			</Button>
		</div>
	)
}