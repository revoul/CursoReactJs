/*
* Module dependencies
*/

import React from 'react/addons';
import MyMassage from './MyMessage';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class MyChat extends React.Component {
	render() {
		return	<ul className="myChat">
					<ReactCSSTransitionGroup transitionName="message-animation">
					{
						this.props.messages.map((message) => {
							return <MyMassage key={message.id} message={message.text} />
						})
					}
					</ReactCSSTransitionGroup>
				</ul>
	}
}

MyChat.defaultProps = { messages: [] };