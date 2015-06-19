/*
* Module dependencies
*/

import React from 'react';

export default class MyMessage extends React.Component {
	render() {
		return <li className="message">{this.props.message.text}</li>
	}
}