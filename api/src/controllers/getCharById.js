const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = (req, res) => {
	const params = req.params;
	const charId = params.id;

	axios
		.get(`${URL}${charId}`)
		.then((response) => {
			const character = {
				id: response.data.id,
				name: response.data.name,
				species: response.data.species,
				image: response.data.image,
				gender: response.data.gender,
			};
			res.json(character);
		})
		.catch((error) => {
			console.error(error);
			res.status(500).json({ message: 'error' });
		});
};

module.exports = { getCharById };

// axios
//     .get(`https://rickandmortyapi.com/api/character/${ID}`)
//     .then((response) => {
//       const { id, image, name, gender, species } = response.data;
//       const character = {
//         id: id,
//         image: image,
//         name: name,
//         gender: gender,
//         species: species,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
//
