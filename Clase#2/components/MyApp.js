/**
* Module dependencies
*/

import React from 'react';
import MyTabla from './MyTabla';
import MyChat from './MyChat';

export default class MyApp extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			messages: []
		};
		this.onGrowl = this.onGrowl.bind(this);
	}

	onGrowl(name){
		let message = `${name}, ${name}!!`;
		this.state.messages.push({ text: message });
		//let messages = this.state.messages;
		//this.setState({messages: messages});
		this.setState({messages : this.state.messages});
	}

	render(){
		let myArray = [
			{number: 1, name: 'Primero'},
			{number: 2, name: 'Segundo'},
			{number: 3, name: 'Tercero'}
		];
		return	<div className="myApp">
					<MyTabla objetos={myArray} onGrowl={this.onGrowl} />
					<MyChat messages={this.state.messages} />
				</div>
	}

//1:57
}