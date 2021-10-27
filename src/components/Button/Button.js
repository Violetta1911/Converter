import React from 'react';
import './Button.css';

const Button = ({ onCalc, title, disabled, className }) => {
	return (
		<button className={className} onClick={onCalc} disabled={disabled}>
			{title}
		</button>
	);
};

export default Button;
