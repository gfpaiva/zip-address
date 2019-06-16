import React from 'react';
import { mount } from 'enzyme';

import AppProvider from '../../Providers/App.Context'

import Search from './index';

describe('<Search />', () => {
	it('should mount properly', () => {
		const wrapper = mount(
			<AppProvider>
				<Search />
			</AppProvider>
		);

		expect(wrapper).toMatchSnapshot();
	});
});