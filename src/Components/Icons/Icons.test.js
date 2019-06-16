import React from 'react';
import { mount } from 'enzyme'

import { Map, Pin, Search }from './index';

describe('<Icons />', () => {
	it('should mount Map Icon properly', () => {
		const wrapper = mount(<Map />);

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount Pin Icon properly', () => {
		const wrapper = mount(<Pin />);

		expect(wrapper).toMatchSnapshot();
	});

	it('should mount Seach Icon properly', () => {
		const wrapper = mount(<Search />);

		expect(wrapper).toMatchSnapshot();
	});
});