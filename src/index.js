import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './Components/App';

import AppProvider from './Providers/App.Context';

import './_redirects';
import './index.scss';

ReactDOM.render(
	<AppProvider>
		<Router>
			<App />
		</Router>
	</AppProvider>
	, document.getElementById('app')
);