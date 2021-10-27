import React from 'react';
import './Input.css';

const Input = ({ className = 'input', onEnterNumber, value }) => {
	return (
		<input
			type='number'
			value={value}
			className={className}
			onChange={onEnterNumber}
		/>
	);
};

export default Input;
