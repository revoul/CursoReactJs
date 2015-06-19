/**
* Module dependencies
*/

import React from 'react';

export default class MyApp extends React.Components{
	constructor(props){
		super(props);
		this.state = {
			messages: []
		};
	}

	onGrowl(name){
		var message `${name}, ${name}!!`;
		var messages this.state.messages.push({ text: name });
		this.setState({messages: messages});
		return 
	}

	render(){
		var myArray = [
			{number: 1, name: 'Primero'},
			{number: 2, name: 'Segundo'},
			{number: 3, name: 'Tercero'}
		];
		return	<div className="myApp">
					<MyTabla objetos={myArray} />
					<MyChat messages={this.state.messages}/>
				</div>
	}
}