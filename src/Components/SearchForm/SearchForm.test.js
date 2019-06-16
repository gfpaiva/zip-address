import React from 'react';
import wait from 'waait';
import { mount} from 'enzyme';

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
		fetch
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
		fetch
			.mockRejectOnce('ERRO')

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