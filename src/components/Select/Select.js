import React from 'react';
import './Select.css';

const Select = ({ className, children, onSelect, disabled }) => {
	return (
		<select
			className={className}
			onChange={(event) => onSelect(event)}
			disabled={disabled}>
			{children}
		</select>
	);
};
export default Select;
