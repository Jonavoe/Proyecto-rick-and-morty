const http = require('http');
const characters = require('./utils/data');

http
	.createServer((req, res) => {
		res.setHeader('Access-Control-Allow-Origin', '*');

		const { url } = req;
		console.log(url);

		const characterId = url.split('/').at(-1);
		const character = characters.find((char) => char.id == characterId);
		if (url.includes('rickandmorty/character/')) {
			
			if (character) {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				return res.end(JSON.stringify(character));
			} else {
				res.writeHead(404, { 'Content-Type': 'application/json' });
				return res.end(JSON.stringify({ error: 'Character not found' }));
			}
		}

		// res.writeHead(404, { 'Content-Type': 'text/plain' });
		// return res.end('Not found');
	})
	.listen(3001, 'localhost');