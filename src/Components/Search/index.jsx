// import React, {useState} from 'react';

// function Search({state, send}) {
// 	const [flight, setFlight] = useState('');

// 	const goToPassengers = () => {
// 		send('CONTINUE', {selectedCountry: flight});
// 	};

// 	const handleSelectChange = (event) => {
// 		setFlight(event.target.value);
// 	};

// 	const options = state.context.countries;

// 	return (
// 		<div className='state-card'>
// 			<p className='title'>Busca tu destino</p>
// 			<select
// 				id='country'
// 				className='Search-select'
// 				value={flight}
// 				onChange={handleSelectChange}
// 			>
// 				<option value='' disabled defaultValue>
// 					Escoge un país
// 				</option>
// 				{options.map((option) => (
// 					<option value={option.name.common} key={option.name.common}>
// 						{option.name.common}
// 					</option>
// 				))}
// 			</select>
// 			<button
// 				onClick={goToPassengers}
// 				disabled={flight === ''}
// 				className='Search-continue button'
// 			>
// 				Continuar
// 			</button>
// 		</div>
// 	);
// }

// export {Search};

import React, {useState} from 'react';

function Search({send, context}) {
	const [flight, setFlight] = useState('');

	const goToPassengers = () => {
		send('CONTINUE', {selectedCountry: flight});
	};

	const handleSelectChange = (event) => {
		setFlight(event.target.value);
	};

	return (
		<div className='state-card'>
			<p className='title'>Busca tu destino</p>
			<select id='country' className='input' value={flight} onChange={handleSelectChange}>
				<option value='' disabled defaultValue>
					Escoge un país
				</option>
				{context.countries.map((option) => (
					<option value={option} key={option}>
						{option}
					</option>
				))}
			</select>
			<button onClick={goToPassengers} disabled={flight === ''} className='button self-end'>
				Continuar
			</button>
		</div>
	);
}

export {Search};
