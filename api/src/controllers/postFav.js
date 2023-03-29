let fav = require('../utils/fav');

const postFav = async (req, res) => {
	try {
		const existingChar = fav.find((char) => char.id == req.body.id);
		if (existingChar) {
			return res
				.status(400)
				.json({ message: 'Personaje ya agregado a favoritos' });
		} else {
			fav.push(req.body);
			return res.status(200).json(fav);
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: 'error al buscar favoritos' });
	}
};

module.exports = { postFav };
