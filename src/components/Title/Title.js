import React from 'react';
import './Title.css';

const Title = ({ title, className }) => {
	return (
		<h1 className={className}>
			Convert {title !== 'choose physical quantity' ? title : 'physical'} units
		</h1>
	);
};

export default Title;
