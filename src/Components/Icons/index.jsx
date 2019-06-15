import React from 'react';
import { FaMapMarkerAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';


export function Pin({ ...props }) {
	return <span {...props} aria-label="Pin" role="img"><FaMapMarkerAlt /></span>
}

export function Map({ ...props }) {
	return <span {...props} aria-label="Mapa" role="img"><FaMapMarkedAlt /></span>
}

export function Search({ ...props }) {
	return <span {...props} role="img" aria-label="Busca"><MdSearch /></span>
}