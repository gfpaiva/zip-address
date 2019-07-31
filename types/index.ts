// ADDRESS COMPONENT
export interface Geolocation {
	lat:number
	lng:number
}

export interface AddressInfoProps {
	street:string,
	neighborhood:string,
	city:string,
	uf:string,
	zip:string,
	geolocation:Geolocation
}

// BUTTON COMPONENT
export enum ButtonTypes {
	submit = 'submit',
	button = 'button',
	reset = 'reset'
}

export interface ButtonProps {
	big?:boolean,
	className?:string,
	children:JSX.Element|String,
	type?:ButtonTypes,
	disabled?:boolean,
}

// SEARCH FORM
export interface FormError {
	zipCode?:string
}