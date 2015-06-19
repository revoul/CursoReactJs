/*
* Module dependencies
*/

import React from 'react';
import Avatar from './Avatar';

export default class MyRow extends React.Component{
	onClick(ev){
		this.props.growl.call(this, this.props.name)
	}

	render(){		
		return	<li className="myRow" onClick={this.onClick.bind(this)}>
					<Avatar number={this.props.number}/>
					{this.props.name}
				</li>
	}
}