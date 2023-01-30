import React, {useState} from 'react';

function Passengers({send, context}) {
	const [value, setValue] = useState('');

	const onChangeInput = (event) => {
		setValue(event.target.value);
	};

	const submit = (event) => {
		event.preventDefault();
		send('ADD', {newPassenger: value});
		setValue('');
	};

	const goToTicket = () => {
		send('DONE');
	};

	const passengers = context.passengers;

	return (
		<form onSubmit={submit} className='state-card'>
			<p className='title'>Agrega a las personas que van a volar ✈️</p>
			<div className={`h-fit ${passengers.length === 0 && 'hidden'}`}>
				{passengers.map((person, idx) => (
					<p key={`person-${idx}`}>
						{idx + 1} - {person}
					</p>
				))}
			</div>

			<input
				className='input'
				id='name'
				name='name'
				type='text'
				placeholder='Escribe el nombre completo'
				required
				value={value}
				onChange={onChangeInput}
			/>
			<div className='w-full flex items-center justify-between gap-4'>
				<button className='secondary-button w-full' type='submit'>
					Agregar Pasajero
				</button>
				<button
					className='button w-full'
					type='button'
					onClick={goToTicket}
					// disabled={passengers.length === 0}
				>
					Ver mi ticket
				</button>
			</div>
		</form>
	);
}

export {Passengers};
