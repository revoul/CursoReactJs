/**
* Module dependencies
*/

import React from 'react';
import MyTabla from './MyTabla';
import MyChat from './MyChat';
import uid from 'uid';
import $ from 'jquery';
import io from 'socket.io-client';

export default class MyApp extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			messages: [],
			myArray: []
		};
		this.onGrowl = this.onGrowl.bind(this);
		this.user = uid(10);
	}

	componentWillMount(){
		$.get('/usuarios', (usuarios) => {
			this.setState({
				myArray: usuarios
			});
		});
		this.socket = io('http://localhost:3000');
		this.socket.on('message', (message) => {
			if(message.user !== this.user){
				this.newMessage(message);
			}
		});
	}

	onGrowl(name){
		let text = `${name}, ${name}!!`;
		let message = {
			id: uid(),
			text: text,
			user: this.user
		};
		this.newMessage(message);
		this.socket.emit('message', message);


		this.state.messages.push(message);
		this.setState({messages : this.state.messages});
	}

	newMessage(message){
		this.state.messages.push(message);
		let messages = this.state.messages;		
		this.setState({messages: messages});//para renderizar de nuevo
	}

	render(){
		if(this.state.myArray.length){
			return	<div className="myApp">
						<MyTabla objetos={this.state.myArray} onGrowl={this.onGrowl} />
						<MyChat messages={this.state.messages} />
					</div>
		}else{
			return <p>Cargando . . .</p>
		}
	}
}