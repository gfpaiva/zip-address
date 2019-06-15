import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import { Map, Pin, Search }from './index';

afterEach(cleanup);

describe('<Icons />', () => {
	it('should mount Map Icon properly', () => {
		const { container } = render(<Map />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should mount Pin Icon properly', () => {
		const { container } = render(<Pin />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should mount Seach Icon properly', () => {
		const { container } = render(<Search />);

		expect(container.firstChild).toMatchSnapshot();
	});
});