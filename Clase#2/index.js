/*
* Module dependencies
*/

import express from 'express';
import http from 'http';
import engine from 'socket.io';
import dbapi from './db-api';

const port = 3000;
const app = express();

//Configurar la ruta de archivos estáticos, __dirname cogera el public absoluto del proyecto
app.use('/', express.static(__dirname + '/public'));

//console.log('__dirname: ' + __dirname);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

let server = http.createServer(app).listen(port, () => {
	console.log(`El servidor está escuchando en el puerto: ${port}`);
});

const io = engine.listen(server);

io.on('connection', (socket) => {
	socket.on('message', (msg) => {
		io.emit('message', msg);
	});
});