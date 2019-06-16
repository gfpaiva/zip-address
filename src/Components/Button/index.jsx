import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default function Button({ big, className, children, ...rest }) {
	return (
		<button
			className={`${big ? 'button--big ' : ''}${className ? `${className} ` : '' }button bg-primary color-secondary`}
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
		PropTypes.node
	]).isRequired,
	big: PropTypes.bool,
	className: PropTypes.string
}