/*
* Module dependencies
*/

import React from 'react/addons';
import MyMassage from './MyMessage';

const {CSSTransitionGroup} = React.addons;

export default class MyChat extends React.Component {
	render() {
		return	<ul className="myChat">
					<CSSTransitionGroup transitionName="message-animation">
					{
						this.props.messages.map((message) => {
							return <MyMassage key={message.id} message={message.text} />
						})
					}
					</CSSTransitionGroup>
				</ul>
	}
}

MyChat.defaultProps = { messages: [] };