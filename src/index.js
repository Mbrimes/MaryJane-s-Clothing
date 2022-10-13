import React from 'react';
import ReactDOM from 'react-dom/client';

class Red extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			brand: "Ford",
			model: "Mustang",
			color: "Red",
			year: 2001
		};
	}
	render() {
		return(
		<div>
			<h1>My {this.state.brand}</h1>
			<h2>
			it is a {this.state.color} {this.state.model} from {this.state.year}.
			</h2>
		</div>
		);
	}
}
const ross=ReactDOM.createRoot(document.getElementById('zxx'));
ross.render(<Red/>);