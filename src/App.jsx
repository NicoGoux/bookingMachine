import {useState} from 'react';
import {BaseLayout} from './Containers/BaseLayout';

function App() {
	return (
		<div
			className='flex items-center justify-center w-full h-screen bg-[#fed6e3] bg-cover'
			style={{backgroundImage: `url(${'/background-travel-2.jpg'})`}}
		>
			<BaseLayout />
		</div>
	);
}

export {App};
