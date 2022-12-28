import React from 'react';
import ReactDOM from 'react-dom/client';
//import Homepage from './Homepage'
import ShoppingPage from './Components/Shop/ShoppingPage';
import './index.css'

const Web = () =>{
	return (
		<>
		<ShoppingPage/>
		</>
		);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Web />);