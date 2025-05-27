const express = require('express');
const cors = require('cors');
const cityRoutes = require('./routes/cityRoutes');
const db = require('./config/database');
const { errorHandler } = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();

app.use(cors({ credentials: true }));
app.use(express.json());

// init DB
db.init();

app.use('/', cityRoutes);

app.use(errorHandler);
module.exports = app;
