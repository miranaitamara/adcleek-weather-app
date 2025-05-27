const axios = require('axios');
require('dotenv').config();

exports.fetchForecast = async (codeInsee) => {
  const apiKey = process.env.METEO_API_KEY;
  const url = `https://api.meteo-concept.com/api/forecast/daily/0?token=${apiKey}&insee=${codeInsee}`;

  const response = await axios.get(url);
  return response.data;
};
