import {actions, assign, createMachine} from 'xstate';
import {fetchCountries} from '../Utils/api';

const fillCountries = {
	id: 'loading countries',
	initial: 'loading',
	states: {
		loading: {
			invoke: {
				id: 'getCountries',
				src: () => fetchCountries,
				onDone: {
					target: 'success',
					actions: assign({
						countries: (context, event) =>
							event.data.map((country) => {
								return country.name.common;
							}),
					}),
				},
				onError: {
					target: 'failure',
					actions: assign({
						error: 'Fallo el request',
					}),
				},
			},
		},
		success: {},
		failure: {
			after: {
				5000: {
					target: 'loading',
				},
			},
		},
	},
};

const bookingMachine = createMachine(
	{
		predictableActionArguments: true,
		id: 'buy plane tickets',
		initial: 'initial',
		context: {
			passengers: [],
			selectedCountry: '',
			countries: [],
			error: '',
		},
		states: {
			initial: {
				on: {
					START: {
						target: 'search',
					},
				},
			},
			search: {
				on: {
					CONTINUE: {
						target: 'passengers',
						actions: assign({
							selectedCountry: (context, event) => event.selectedCountry,
						}),
					},
					CANCEL: {
						target: 'initial',
						actions: 'cleanPassengers',
					},
				},
				...fillCountries,
			},

			passengers: {
				on: {
					DONE: {
						target: 'tickets',
						cond: 'moreThanOnePassengers',
					},
					CANCEL: {
						target: 'initial',
						actions: 'cleanPassengers',
					},
					ADD: {
						target: 'passengers',
						actions: assign((context, event) =>
							context.passengers.push(event.newPassenger)
						),
					},
				},
			},

			tickets: {
				after: {
					10000: {
						target: 'initial',
						actions: 'cleanPassengers',
					},
				},
				on: {
					FINISH: {
						target: 'initial',
						actions: 'cleanPassengers',
					},
				},
			},
		},
	},
	{
		actions: {
			cleanPassengers: assign({
				passengers: [],
			}),
		},

		guards: {
			moreThanOnePassengers: (context) => {
				return context.passengers.length > 0;
			},
		},
	}
);

export {bookingMachine};
