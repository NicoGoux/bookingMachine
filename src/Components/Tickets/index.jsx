import React from 'react';

function Tickets({send, context}) {
	const finish = () => {
		send('FINISH', {passengers: []});
	};

	return (
		<div className='state-card'>
			<p className=''>Gracias por volar con book a fly 💚</p>
			<div className='ticket'>
				<div className='ticket-country'>{context.selectedCountry}</div>
				<div className='ticket-passenger'>
					<div>
						{context.passengers.map((passenger, index) => (
							<p className='capitalize' key={`ticket-person-${index}`}>
								{passenger}
							</p>
						))}
					</div>
					<span className='relative left-12 m-0 text-3xl'>✈</span>
				</div>
			</div>
			<button onClick={finish} className='Tickets-finalizar button'>
				Finalizar
			</button>
		</div>
	);
}

export {Tickets};
