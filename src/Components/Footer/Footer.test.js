import React from 'react';
import { mount } from 'enzyme';
import Footer from './index';

describe('<Footer />', () => {
	it('should mount properly', () => {
		const wrapper = mount(
			<Footer />
		);

		expect(wrapper).toMatchSnapshot();
	})
});