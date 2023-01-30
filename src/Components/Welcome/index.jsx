import React from 'react';

function Welcome({send}) {
	const startBooking = () => {
		send('START');
	};

	return (
		<div className='state-card'>
			<p className='title'>¡Hoy es el día!</p>
			<p className='text-center text-base'>
				Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender las
				maravillas que hay para explorar
			</p>
			<button onClick={startBooking} className='button self-end'>
				Comenzar
			</button>
		</div>
	);
}

export {Welcome};
