import React, { useState } from 'react';
import './App.css';
import Title from './components/Title/Title';
import ConversionForm from './components/ConversionForm/ConversionForm';
import data from './data.json';

const App = () => {
	const [distanceUnits, setDistanceUnits] = useState(data.parameters.distance);
	const [weightUnits, setWeightUnits] = useState(data.parameters.weight);
	const [convertValues, setConvertValues] = useState(
		Object.keys(data.parameters),
	);
	const [physicalQTY, setPhysicalQTY] = useState('choose physical quantity');
	const [unitFrom, setUnitFrom] = useState('from');
	const [unitTo, setUnitTo] = useState('to');
	const [result, setResult] = useState({});
	const [number, setNumber] = useState(null);

	const onSelectPhysicalQTY = (event) => {
		setPhysicalQTY(event.target.value);
		setUnitFrom('from');
		setUnitTo('to');
	};

	const onEnterNumber = (event) => {
		setNumber(event.target.value);
	};

	const onCalc = () => {
		let calcResult = [];
		for (let key in data.parameters) {
			if (key === physicalQTY) {
				const valueFrom = data.parameters[key].filter(
					(item) => item.unit === unitFrom,
				);
				calcResult = data.parameters[key].map((item) =>
					unitTo === item.unit && unitFrom === 'm'
						? { ...item, value: item.value * number }
						: unitTo === item.unit && unitFrom !== 'm'
						? { ...item, value: (item.value / valueFrom[0].value) * number }
						: null,
				);
			}
		}
		calcResult = calcResult.filter((item) => item);
		console.log(calcResult[0].value);
		setResult(calcResult[0].value.toFixed(2));
	};

	const onSetupUnitConvertTo = (event) => {
		setUnitTo(event.target.value);
	};
	const onSetupUnitConvertForm = (event) => {
		setUnitFrom(event.target.value);
	};

	return (
		<div className='App'>
			<Title className='header-title' title={physicalQTY} />
			<ConversionForm
				distanceUnits={distanceUnits}
				weightUnits={weightUnits}
				convertValues={convertValues}
				physicalQTY={physicalQTY}
				unitFrom={unitFrom}
				unitTo={unitTo}
				result={result}
				number={number}
				onSelectPhysicalQTY={onSelectPhysicalQTY}
				onEnterNumber={onEnterNumber}
				onSetupUnitConvertTo={onSetupUnitConvertTo}
				onSetupUnitConvertForm={onSetupUnitConvertForm}
				onCalc={onCalc}
			/>
		</div>
	);
};

export default App;
