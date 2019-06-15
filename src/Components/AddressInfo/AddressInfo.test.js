import React from 'react';
import 'jest-dom/extend-expect';
import { render } from '@testing-library/react';

import AddressInfo from './index';

describe('<AddressInfo />', () => {
	it('should mount properly', () => {
		const { container } = render(
			<AddressInfo
				street="Test Sreet"
				neighborhood="Test Neighborhood"
				city="Test City"
				uf="Test UF"
				zip="Test ZIP"
				geolocation={{lat: 0, lng: 0}}
			/>
		);

		expect(container.firstChild).toMatchSnapshot();
	});
});