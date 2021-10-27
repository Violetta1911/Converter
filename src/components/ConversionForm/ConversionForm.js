import React from 'react';
import './ConversionForm.css';
import Select from '../Select/Select';
import Input from '../Input/Input';
import Button from '../Button/Button';

const ConversionForm = ({
	onEnterNumber,
	convertValues,
	distanceUnits,
	weightUnits,
	physicalQTY,
	onSelectPhysicalQTY,
	onSetupUnitConvertTo,
	onSetupUnitConvertForm,
	unitTo,
	unitFrom,
	result,
	onCalc,
	number,
}) => {
	const renderUnitsDistance = distanceUnits.map((item) => (
		<option key={Math.random()}>{item.unit}</option>
	));
	const renderUnitsWeight = weightUnits.map((item) => (
		<option key={Math.random()}>{item.unit}</option>
	));
	return (
		<form className='convform' onSubmit={(e) => e.preventDefault()}>
			<Select className='select-physicalQTY' onSelect={onSelectPhysicalQTY}>
				<option key={Math.random()} value='' selected disabled hidden>
					{physicalQTY}
				</option>
				{convertValues.map((param) => (
					<option key={Math.random()}>{param}</option>
				))}
			</Select>

			<div className='select-items'>
				<label className='select-item'>
					<Input onEnterNumber={(event) => onEnterNumber(event)} />
					<Select
						className='select-unit'
						onSelect={onSetupUnitConvertForm}
						disabled={
							physicalQTY === 'choose physical quantity' ? true : false
						}>
						<option key={Math.random()} value='' selected disabled hidden>
							{unitFrom}
						</option>
						{physicalQTY === 'distance'
							? renderUnitsDistance
							: renderUnitsWeight}
					</Select>
				</label>
				<p>=</p>
				<label className='select-item'>
					<Input
						onEnterNumber={(event) => onEnterNumber(event)}
						value={result}
					/>
					<Select
						className='select-unit'
						onSelect={onSetupUnitConvertTo}
						disabled={
							physicalQTY === 'choose physical quantity' ? true : false
						}>
						<option key={Math.random()} value='' selected disabled hidden>
							{unitTo}
						</option>
						{physicalQTY === 'distance'
							? renderUnitsDistance
							: renderUnitsWeight}
					</Select>
				</label>
			</div>
			<Button
				className='btn-calc'
				title='calculate'
				onCalc={onCalc}
				disabled={unitTo && unitFrom && number ? false : true}
			/>
		</form>
	);
};

export default ConversionForm;
