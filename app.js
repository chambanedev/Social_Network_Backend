// Dépendances
const express = require('express');
const bodyParser = require('body-parser');

// Routes CRUD
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');

const app = express();
app.use(bodyParser.json());

// API Path
app.use('/auth', authRoute);
app.use('/user', userRoute);

module.exports = app;