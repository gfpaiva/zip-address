import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
import { Formik } from 'formik';
import { MdSearch } from 'react-icons/md';

import { useAppContext } from '../../Providers/App.Context';
import { getAddressByZip, getGeolocation } from '../../Utils/API';

import Button from '../Button';

import './SearchForm.scss';
import AddressInfo from '../AddressInfo';

export default function SearchForm() {
	const { loading, setLoading } = useAppContext();
	const [ map, setMap ] = useState({
		visible: false,
		coords: {
			lat: 0,
			lng: 0
		},
		address: {}
	});
	const [ hasError, setHasError ] = useState(false);

	return (

		<>
			<Formik
				initialValues={{zipCode: ''}}
				validate={values => {
					let errors = {}

					if(!/\d{5}-\d{3}/.test(values.zipCode)) errors.zipCode = 'Digite um CEP válido';

					return errors;
				}}
				onSubmit={async ({ zipCode }, { resetForm }) => {
					setMap({ visible: false });
					setHasError(false);

					try {
						setLoading(true);

						const address = await getAddressByZip(zipCode);
						const Geolocation = await getGeolocation(address.logradouro);
						const latLong = Geolocation.results[0].geometry.location;

						setMap({
							visible: true,
							coords: {
								...latLong
							},
							address
						});

						setLoading(false);
						resetForm();
					} catch(err) {
						setHasError(true);
						setLoading(false);
					}
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleSubmit
				}) => (
					<form className="search-form bg-secondary color-primary" onSubmit={handleSubmit}>
						<h2 className="search-form__title">Consultar endereço</h2>

						<div className="search-form__container">
							<label htmlFor="zipCode">
								CEP:
							</label>

							<span className="search-form__input-container">
								<MaskedInput
									autoComplete="off"
									className={`${(errors.zipCode && touched.zipCode) ? 'search-form__input--error ' : ''}search-form__input`}
									guide={true}
									id="zipCode"
									mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
									name="zipCode"
									onChange={handleChange}
									placeholder="_____-___"
									type="tel"
									value={values.zipCode}
								/>
								{errors.zipCode && <small className="search-form__input-message search-form__input-message--error">{errors.zipCode && touched.zipCode && errors.zipCode}</small>}
							</span>

							<Button
								big
								className="search-form__button"
								type="submit"
								disabled={loading}
							>
								<span role="img" aria-label="Search">
									<MdSearch />
								</span>
							</Button>
						</div>
					</form>
				)}
			</Formik>

			{/* INFO AND MAP */}
			{map.visible && (
				<AddressInfo
					street={map.address.logradouro}
					neighborhood={map.address.bairro}
					city={map.address.localidade}
					uf={map.address.uf}
					zip={map.address.cep}
					geolocation={map.coords}
				/>
			)}

			{/* ERROR HANDLING */}
			{hasError && <p className="text-center"><strong>Ocorreu um erro. <br /> Verifique se o CEP digitado é válido, ou, tente novamente mais tarde.</strong></p>}
		</>
	)
}
