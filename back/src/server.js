const http = require('http');

http
	.createServer((req, res) => {
		res.setHeader('Access-Control-Allow-Origin', '*');

		const { url } = req;
		console.log(url);

		if (url.includes('/')) {
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			return res.end('Server Corriendo');
		}

		if (url.includes('/character')) {
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			return res.end('Hola');
		}

		res.writeHead();
		return res.end();
	})
	.listen(3001, 'localhost');
