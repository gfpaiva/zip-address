import React from 'react';
import { render } from '@testing-library/react';

import Footer from './index';

describe('<Footer />', () => {
	it('should mount properly', () => {
		const { container } = render(<Footer />);

		expect(container.firstChild).toMatchSnapshot();
	})
});