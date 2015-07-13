/*
 * Module dependencies
*/

import usuarios from './usuarios';

export default {
	usuarios: {
		find: function(callback){
			setTimeout(() => {
				callback(usuarios);
			}, 3000);
		}
	}
}