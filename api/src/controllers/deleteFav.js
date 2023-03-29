let fav = require('../utils/fav');

const deleteFav = (req, res) => {
	const { id } = req.params;
	fav = fav.filter((char) => char.id == id);
	res.status(200).json({ staus: 'ok' });
};

module.exports = { deleteFav };
