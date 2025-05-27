const express = require("express");
const cors = require("cors");
const db = require("./config/database");
const { errorHandler } = require("./middlewares/errorHandler");
require("dotenv").config();

const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());

// Initialisation de la base avec les deux tables nécessaires (à garder)
db.init();
// exemple de requete sql à supprimer
db.all("select * from city").then((rows) => {
  console.table(rows);
});

app.use(errorHandler);
module.exports = app;
