/*
* Module dependencies
*/

import React from 'react';
import MyMassage from './MyMassage';

export default class MyChat extends React.Component {
	render() {
		return	<ul className="myChat">
				{
					this.props.messages.map((message) => {
						return <MyMassage message={message} />
					});
				}
				</ul>
	}
}