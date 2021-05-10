// Dépendances
const express = require('express');
const bodyParser = require('body-parser');

// Routes CRUD
const authRoute = require('./routes/auth');

const app = express();
app.use(bodyParser.json());

// API Path
app.use('/auth', authRoute);

module.exports = app;