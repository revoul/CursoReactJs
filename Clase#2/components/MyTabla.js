/*
* Module dependencies
*/

import React from 'react';
import MyRow from './MyRow';

export default class MyTabla extends React.Component{
	growl(){
		
	}
	render(){
		return <ul className="myTabla">
					{
						this.props.objetos.map((objeto) => {
							return <MyRow
							key={objeto.number}
							name={objeto.name}
							number={objeto.number}
							growl={this.growl.bind(this)}/>
						})
					}
				</ul>
	}
}