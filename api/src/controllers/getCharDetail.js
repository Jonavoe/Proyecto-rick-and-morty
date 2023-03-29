const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async (req, res) => {
	try {
		const params = req.params;
		const charId = params.id;

		const response = await axios.get(`${URL}${charId}`);
		const {
			id,
			name,
			species,
			image,
			gender,
			status,
			origin,
			created,
			location,
		} = response.data;
		const character = {
			id,
			name,
			species,
			image,
			gender,
			status,
			origin,
			created,
			location,
		};
		res.status(200).json(character);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'error' });
	}
};

module.exports = { getCharDetail };
