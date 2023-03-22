const axios = require('axios');

const getCharById = (res, ID) => {
	axios
		.get(`https://rickandmortyapi.com/api/character/${ID}`)
		.then((response) => {
			const { id, image, name, gender, species } = response.data;
			const character = { id:id, image:image, name:name, gender:gender, species:species };
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(character));
		})
		.catch((error) => {
			res.writeHead(500, { 'Content-Type': 'text/plain' });
			res.end(error.message);
		});
};

module.exports = getCharById;
