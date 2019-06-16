import React from 'react';
import { mount } from 'enzyme';

import AppProvider from '../../Providers/App.Context'

import Header from './index';

describe('<Header />', () => {
	it('should mount properly', () => {
		const wrapper = mount(
			<AppProvider>
				<Header />
			</AppProvider>
		);

		expect(wrapper.find('header')).toMatchSnapshot();
	});

	it('shoud add loader class when context loading true', () => {
		const wrapper = mount(
			<AppProvider initialState={true}>
				<Header />
			</AppProvider>
		);

		expect(wrapper.find('header').hasClass('header--loading')).toBeTruthy()
	});
});