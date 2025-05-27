const db = require("../config/database");

exports.getAllCities = async (req, res) => {
  try {
    const cities = await db.all(
      "SELECT insee, name, zipcode, population FROM city"
    );
    if (!cities || cities.length === 0) {
      const error = new Error("Aucune ville trouvée dans la base de données");
      error.status = 404;
      return next(error);
    }
    res.json(cities);
  } catch (err) {
    next(err);
  }
};
