let fav = require('../utils/fav');

const postFav = (req, res) => {
	const existingChar = fav.find((char) => char.id == req.body.id);

	if (existingChar) {
		return res
		.status(400)
		.json({ message: 'Personaje ya agregado a favoritos' });
	} else {
		fav.push(req.body);
		return res.status(200).json(fav);
	}
};

module.exports = { postFav };
