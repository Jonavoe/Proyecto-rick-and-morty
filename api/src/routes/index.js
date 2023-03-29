const express = require('express');
const { Router } = require('express');
const { deleteFav } = require('../controllers/deleteFav');
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');
const { getFav } = require('../controllers/getFav');
const { postFav } = require('../controllers/postFav');

const router = new Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);
router.get('/rickandmorty/fav', postFav);
router.get('/rickandmorty/fav/:id', deleteFav);
router.get('/rickandmorty/fav', getFav);

module.exports = router;
