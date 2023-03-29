const express = require('express');
const server = express();
const PORT = 3001;
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/index');

server.use(cors());
server.use(morgan('dev'));

server.use(express.json());

server.use('/', router);

server.listen(PORT, () => {
	console.log('El servidor esta corriendo ' + PORT);
});
