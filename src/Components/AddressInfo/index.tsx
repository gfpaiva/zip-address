import * as React from 'react';
import * as PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import { AddressInfoProps, Geolocation } from '../../../types';

import { MAPS_API_KEY } from '../../Utils/API';

import { Map, Pin } from '../Icons';

import './AddressInfo.scss';

const Marker = () => <div className="address-info__marker"><Pin /></div>

export default function AddressInfo({ street, neighborhood, city, uf, zip, geolocation }:AddressInfoProps) {
	return (
		<div className="address-info bg-secondary color-primary">
			<address className="address-info__address">
				<h3 className="address-info__street my-0">
					<Map />&nbsp;
					{street}
				</h3>

				<p className="address-info__detail">
					{neighborhood} <br />
					{city} - {uf} <br />
					{zip}
				</p>
			</address>

			<div className="address-info__map">
				<GoogleMapReact
					center={geolocation}
					defaultZoom={16}
					bootstrapURLKeys={{ key: MAPS_API_KEY }}
				>
					<Marker />
				</GoogleMapReact>
			</div>
		</div>
	)
}

AddressInfo.propTypes = {
	street: PropTypes.string.isRequired,
	neighborhood: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	uf: PropTypes.string.isRequired,
	zip: PropTypes.string.isRequired,
	geolocation: PropTypes.object.isRequired
}