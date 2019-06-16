import React from 'react';
import { mount } from 'enzyme';

import NotFound from './index';

describe('<NotFound />', () => {
	it('should mount properly', () => {
		const wrapper = mount(<NotFound />);

		expect(wrapper).toMatchSnapshot();
	});
});