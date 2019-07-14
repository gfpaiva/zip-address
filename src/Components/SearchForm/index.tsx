import  * as React from 'react';
import MaskedInput from 'react-text-mask';
import { Formik } from 'formik';
import { CSSTransition } from 'react-transition-group';

import { useAppContext } from '../../Providers/App.Context';
import { getAddressByZip, getGeolocation } from '../../Utils/API';

import AddressInfo from '../AddressInfo';
import Button, { ButtonTypes } from '../Button';
import { Search } from '../Icons';

import './SearchForm.scss';

export default function SearchForm() {
	// Loading from context
	const { loading, setLoading } = useAppContext();

	// Map State (Infos and visibility hanlder)
	const [ map, setMap ] = React.useState({
		visible: false,
		coords: {
			lat: 0,
			lng: 0
		},
		address: {
			logradouro: '',
			bairro: '',
			localidade: '',
			uf: '',
			cep: ''
		}
	});

	// Error state visibility handler
	const [ hasError, setHasError ] = React.useState(false);

	return (
		<>
			{/* FORM WITH VALIDATION */}
			<Formik
				initialValues={{zipCode: ''}}
				onSubmit={async ({ zipCode }, { resetForm }) => {
					if(map.address.cep === zipCode) return resetForm();

					setMap(prevState => ({
						...prevState,
						visible: false
					}));
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
				validate={values => {
					let errors = { zipCode: '' }

					if(!/\d{5}-\d{3}/.test(values.zipCode)) errors.zipCode = 'Digite um CEP válido';

					return errors;
				}}
				validateOnBlur
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
								type={ButtonTypes.submit}
								disabled={loading}
							>
								<Search />
							</Button>
						</div>
					</form>
				)}
			</Formik>

			{/* INFO AND MAP */}
			<CSSTransition
				in={map.visible}
				timeout={300}
				classNames="address-info"
				unmountOnExit
			>
				<AddressInfo
					street={map.address.logradouro}
					neighborhood={map.address.bairro}
					city={map.address.localidade}
					uf={map.address.uf}
					zip={map.address.cep}
					geolocation={map.coords}
				/>
			</CSSTransition>

			{/* ERROR HANDLING */}
			{hasError && <p data-test="error-message" className="text-center"><strong>Ocorreu um erro. <br /> Verifique se o CEP digitado é válido, ou, tente novamente mais tarde.</strong></p>}
		</>
	)
}