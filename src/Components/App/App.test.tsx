import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import AppProvider from '../../Providers/App.Context'
import App from './index';

describe('<App />', () => {
	it('should mount properly', () => {
		const wrapper = mount(
			<AppProvider>
				<Router>
					<App />
				</Router>
			</AppProvider>
		);

		expect(wrapper.find('main')).toMatchSnapshot();
	});
});