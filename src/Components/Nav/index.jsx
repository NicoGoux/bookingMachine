import React from 'react';

function Nav({state, send}) {
	const goToWelcome = () => {
		send('CANCEL');
	};
	return (
		<nav className='flex justify-between items-center p-4 w-full h-fit bg-violet-100 rounded-t-lg'>
			<h1 className='m-0 font-bold text-3xl text-[#293684]'>Book a fly ✈</h1>
			{!state.matches('initial') && !state.matches('tickets') && (
				<button onClick={goToWelcome} className='secondary-button'>
					Cancelar
				</button>
			)}
		</nav>
	);
}

export {Nav};
