/*
* Module dependencies
*/

import React from 'react';
import MyRow form './Avatar';

class MyRow extends React.Component{
	render(){					
		return	<li className="myRow">
					<Avatar number={this.props.number}/>
					{this.props.name}
				</li>
	}
}