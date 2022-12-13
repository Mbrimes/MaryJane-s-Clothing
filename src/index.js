import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage'
//import './index.css'

const Web = () =>{
	return (
		<>
		<Homepage/>
		</>
		);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Web />);