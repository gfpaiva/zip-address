import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import Home from './index';

describe('<Home />', () => {
	it('should mount properly', () => {
		const wrapper = mount(
			<Router>
				<Home />
			</Router>
		);

		expect(wrapper.find('Home')).toMatchSnapshot();
	});
});