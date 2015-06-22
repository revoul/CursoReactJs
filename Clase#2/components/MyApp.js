/**
* Module dependencies
*/

import React from 'react';
import uid from 'uid';
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
		let text = `${name}, ${name}!!`;
		let message = {id: uid(), text: text};
		this.state.messages.push(message);
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
}