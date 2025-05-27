const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

router.get('/cities', cityController.getAllCities);
router.get('/cities/:codeInsee/forecast', cityController.getForecastByInsee);

module.exports = router;
