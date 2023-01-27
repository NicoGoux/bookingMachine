import React from 'react';
import {Welcome} from '../Welcome';

function StepsLayout({state, send}) {
	return (
		<div>
			<Welcome send={send} />
		</div>
	);
}

export {StepsLayout};
