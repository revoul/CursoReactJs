/*
* Module dependencies
*/

import React from 'react';
import MyApp from './components/MyApp';

var myArray = [
	{number: 1, name: 'Primero'},
	{number: 2, name: 'Segundo'},
	{number: 3, name: 'Tercero'}
];

React.render(
	<MyApp objetos={myArray} />,
	document.getElementById('container')
 );
