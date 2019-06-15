import React from 'react';
import 'jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import AppProvider from '../../Providers/App.Context'

import Header from './index';

afterEach(cleanup);

describe('<Header />', () => {
	it('should mount properly', () => {
		const { container } = render(
			<AppProvider>
				<Header />
			</AppProvider>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('shoud add loader class when context loading true', () => {
		const { getByTestId } = render(
			<AppProvider initialState={true}>
				<Header />
			</AppProvider>
		);

		expect(getByTestId('header')).toHaveClass('header--loading');
	});
});