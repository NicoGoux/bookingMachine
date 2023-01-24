import {useState} from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<h2 className='text-3xl font-bold underline'>Test text</h2>
		</div>
	);
}

export default App;
