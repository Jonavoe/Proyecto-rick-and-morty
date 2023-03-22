const http = require('http');
const characters = require('./utils/data');

http
	.createServer((req, res) => {
		res.setHeader('Access-Control-Allow-Origin', '*');

		const { url } = req;
		console.log(url);

		const characterId = url.split('/')[3];
		const character = characters.find((char) => char.id == characterId);

		if (url.includes('rickandmorty/character')) {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			return res.end(JSON.stringify(character));
		}

		res.writeHead(404, { 'Content-Type': 'text/plain' });
		return res.end('Not found');
	})
	.listen(3001, 'localhost');
