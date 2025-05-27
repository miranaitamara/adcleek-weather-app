const db = require('../config/database');
const weatherService = require('../services/weatherService');
const weatherUtils = require('../utils/weatherUtils');

exports.getAllCities = async (req, res) => {
  try {
    const cities = await db.all(
      'SELECT insee, name, zipcode, population FROM city'
    );
    if (!cities || cities.length === 0) {
      const error = new Error('Aucune ville trouvée dans la base de données');
      error.status = 404;
      return next(error);
    }
    res.json(cities);
  } catch (err) {
    next(err);
  }
};

exports.getForecastByInsee = async (req, res) => {
  const codeInsee = req.params.codeInsee;

  try {
    const forecast = await weatherService.fetchForecast(codeInsee);
    if (!forecast || !forecast.forecast) {
      const error = new Error(
        `Aucune prévision trouvée pour le code INSEE ${codeInsee}`
      );
      error.status = 404;
      return next(error);
    }
    const weatherCode = forecast.forecast.weather;
    forecast.icon = weatherUtils.getIconByCode(weatherCode);
    res.json(forecast);
  } catch (err) {
    next(err);
  }
};
