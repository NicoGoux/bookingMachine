import React from 'react';
import {Passengers} from '../../Components/Passengers';
import {Search} from '../../Components/Search';
import {Tickets} from '../../Components/Tickets';
import {Welcome} from '../../Components/Welcome';

function StepsLayout({state, send}) {
	const renderContent = () => {
		if (state.matches('initial')) return <Welcome send={send} />;
		if (state.matches('search')) return <Search send={send} context={state.context} />;
		if (state.matches('passengers')) return <Passengers send={send} context={state.context} />;
		if (state.matches('tickets')) return <Tickets send={send} context={state.context} />;
	};

	return <div>{renderContent()}</div>;
}

export {StepsLayout};
