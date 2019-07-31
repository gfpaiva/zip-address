import * as React from 'react';
import { mount } from 'enzyme'

import AddressInfo from './index';

describe('<AddressInfo />', () => {
	it('should mount properly', () => {
		const wrapper = mount(
			<AddressInfo
				street="Test Sreet"
				neighborhood="Test Neighborhood"
				city="Test City"
				uf="Test UF"
				zip="Test ZIP"
				geolocation={{lat: 0, lng: 0}}
			/>
		);

		expect(wrapper.find('.address-info__address')).toMatchSnapshot();
	});
});