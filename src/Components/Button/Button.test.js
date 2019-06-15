import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import Button from './index';

afterEach(cleanup);

describe('<Button />', () => {
	it('should mount properly', () => {
		const { container } = render(
			<Button>
				Test
			</Button>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('shoud mount with big property', () => {
		const { getByTestId } = render(
			<Button big>
				Test
			</Button>
		);

		expect(getByTestId('button')).toHaveClass('button--big');
	});

	it('shoud mount with custom className', () => {
		const { getByTestId } = render(
			<Button className="button--test">
				Test
			</Button>
		);

		expect(getByTestId('button')).toHaveClass('button--test');
	});
});