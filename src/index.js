import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import AppProvider from './Providers/App.Context';

import './index.scss';

ReactDOM.render(
	<AppProvider>
		<App />
	</AppProvider>
	, document.getElementById('app')
);