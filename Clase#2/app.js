/*
* Module dependencies
*/

import React from 'react';
import MyTabla from './components/MyTabla';

var myArray = [
	{number: 1, name: 'Primero'},
	{number: 2, name: 'Segundo'},
	{number: 3, name: 'Tercero'}
];

React.render(
	<MyTabla objetos={myArray} />, document.getElementById('container')
 );
