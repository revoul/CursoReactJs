/*
* Module dependencies
*/

import React from 'react';
import Avatar from './Avatar';

export default class MyRow extends React.Component{
	render(){					
		return	<li className="myRow">
					<Avatar number={this.props.number}/>
					{this.props.name}
				</li>
	}
}