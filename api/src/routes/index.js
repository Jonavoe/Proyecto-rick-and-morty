const express = require('express');
const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');

const router = new Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);

module.exports = router;