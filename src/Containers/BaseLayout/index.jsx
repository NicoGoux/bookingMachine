import React from 'react';
import {useMachine} from '@xstate/react';
import {bookingMachine} from '../../Machines/bookingMachine';
import {StepsLayout} from '../StepsLayout';
import {Nav} from '../../Components/Nav';

function BaseLayout() {
	const [state, send] = useMachine(bookingMachine);

	return (
		<div className='w-full max-w-[450px] h-fit rounded-lg bg-violet-100 bg-opacity-80'>
			<Nav state={state} send={send} />
			<StepsLayout state={state} send={send} />
		</div>
	);
}

export {BaseLayout};
