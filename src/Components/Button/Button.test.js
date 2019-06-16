import React from 'react';
import { mount } from 'enzyme';

import Button from './index';

describe('<Button />', () => {
	it('should mount properly', () => {
		const wrapper = mount(
			<Button>
				Test
			</Button>
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('shoud mount with big property', () => {
		const wrapper = mount(
			<Button big>
				Test
			</Button>
		);

		expect(wrapper.find('button').hasClass('button--big')).toBeTruthy();
	});

	it('shoud mount with custom className', () => {
		const wrapper = mount(
			<Button className="button--test">
				Test
			</Button>
		);

		expect(wrapper.find('button').hasClass('button--test')).toBeTruthy();
	});
});