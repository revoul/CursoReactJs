/*
* Module dependencies
*/

import React from 'react';
import MyRow form './MyRow';

class MyTabla extends React.Component{
	render(){
		return <ul className="myTabla">
					{
						this.props.objetos.map((objeto) => {
							return <MyRow key={objeto.number} name={objeto.name} number={objeto.number} />
						})
					}
				</ul>
	}
}