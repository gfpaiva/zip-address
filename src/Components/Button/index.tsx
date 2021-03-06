import * as React from 'react';
import * as PropTypes from 'prop-types';

import './Button.scss';

export enum ButtonTypes {
	submit = 'submit',
	button = 'button',
	reset = 'reset'
}

interface ButtonProps {
	big?:boolean,
	className?:string,
	children:JSX.Element|String,
	type?:ButtonTypes,
	disabled?:boolean,
}

export default function Button({ big, className, children , type, ...rest }:ButtonProps) {
	return (
		<button
			className={`${big ? 'button--big ' : ''}${className ? `${className} ` : '' }button bg-primary color-secondary`}
			type={type ? type : ButtonTypes.button}
			{...rest}
		>
			<span className="button__content">
				{children}
			</span>
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.string
	]).isRequired,
	big: PropTypes.bool,
	className: PropTypes.string
}