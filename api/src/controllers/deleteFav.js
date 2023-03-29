let fav = require('../utils/fav');

const deleteFav = async (req, res) => {
	try {
		const { id } = req.params;
		fav = fav.filter((char) => char.id == id);
		res.status(200).json({ staus: 'ok' });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ staus: 'error filtrar' });
	}
};

module.exports = { deleteFav };
