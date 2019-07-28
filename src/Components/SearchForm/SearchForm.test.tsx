import * as React from 'react';
import * as wait from 'waait';
import { mount } from 'enzyme';

import getAddressByZip from '../../../__mocks__/getAddressByZip';
import getGeolocation from '../../../__mocks__/getGeolocation';

import AppProvider from '../../Providers/App.Context'

import SearchForm from './index';

describe('<SearchForm />', () => {
	it('should mount properly', () => {
		const wrapper = mount(
			<AppProvider>
				<SearchForm />
			</AppProvider>
		);

		expect(wrapper).toMatchSnapshot();
	});

	it('should fill input', () => {
		const wrapper = mount(
			<AppProvider>
				<SearchForm />
			</AppProvider>
		);

		const inputValue = '00000-000'

		wrapper
			.find('input#zipCode')
			.simulate('change', {
				persist: () => {},
				target: { value: inputValue, name: 'zipCode' }
			});

		const newValue = wrapper.find('input#zipCode').props().defaultValue

		expect(newValue).toBe(inputValue);
	});

	it('should submit form', async () => {
		fetchMock
			.once(JSON.stringify(getAddressByZip))
			.once(JSON.stringify(getGeolocation))

		const wrapper = mount(
			<AppProvider>
				<SearchForm />
			</AppProvider>
		);

		const inputValue = '00000-000'

		wrapper
		.find('input#zipCode')
		.simulate('change', {
			persist: () => {},
			target: { value: inputValue, name: 'zipCode' }
		});

		wrapper
			.find('form')
			.simulate('submit');

		await wait();
		wrapper.update();

		expect(wrapper.find('AddressInfo')).toHaveLength(1);
	});

	it('should submit form and get errors properly', async () => {
		fetchMock
			.mockRejectOnce()

		const wrapper = mount(
			<AppProvider>
				<SearchForm />
			</AppProvider>
		);

		const inputValue = '00000-000'

		wrapper
		.find('input#zipCode')
		.simulate('change', {
			persist: () => {},
			target: { value: inputValue, name: 'zipCode' }
		});

		wrapper
			.find('form')
			.simulate('submit');

		await wait();
		wrapper.update();

		expect(wrapper.find('[data-test="error-message"]')).toHaveLength(1);
	});
});