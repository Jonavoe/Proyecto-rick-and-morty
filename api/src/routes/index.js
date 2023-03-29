const express = require('express');
const { Router } = require('express');
const { deleteFav } = require('../controllers/deleteFav');
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');
const { postFav } = require('../controllers/postFav');

const router = new Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);
router.get('/rickandmorty/fav', postFav);
router.get('/rickandmorty/fav/:id', deleteFav);

// router.post('/rickandmorty/fav', (req, res) => {
// 	fav.push(req.body);
// 	res.status(200).json(fav);
// });
// router.delete('/rickandmorty/fav/:id', (req, res) => {
// 	const { id } = req.params;
// 	fav = fav.filter((char) => char.id == id);
// 	res.status(200).json({staus: 'ok'});
//  });

module.exports = router;
