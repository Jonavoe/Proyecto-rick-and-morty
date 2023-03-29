const axios = require('axios');

const getFav = async (req, res) => {
	try {
		const response = await axios.get('http://localhost:3001/rickandmorty/fav');
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error al obtener los favoritos' });
	}
};

module.exports = { getFav };
