import React from 'react';
import 'jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';


import AppProvider from '../../Providers/App.Context'
import App from './index';

describe('<App />', () => {
	it('should mount properly', () => {
		const { container } = render(
			<AppProvider>
				<Router>
					<App />
				</Router>
			</AppProvider>
		);

		expect(container.firstChild).toMatchSnapshot();
	});
});