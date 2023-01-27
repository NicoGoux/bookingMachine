import React from 'react';
import {useMachine} from '@xstate/react';
import {bookingMachine} from '../Machines/bookingMachine';

function BaseLayout() {
	const [state, send] = useMachine(bookingMachine);

	console.log(state);

	return (
		<div
			className='w-screen h-screen bg-center bg-cover'
			style={{backgroundImage: `url(${'/background-travel-2.jpg'})`}}
		>
			<nav />
		</div>
	);
}

export {BaseLayout};
