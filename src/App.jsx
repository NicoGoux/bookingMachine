import {useState} from 'react';
import {BaseLayout} from './Containers/BaseLayout';

function App() {
	return (
		<div className='background-plane flex items-center justify-center w-full h-screen bg-[#fed6e3] bg-cover'>
			<BaseLayout />
		</div>
	);
}

export {App};
