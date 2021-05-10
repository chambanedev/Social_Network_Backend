// Dépendances
const express = require('express');
const bodyParser = require('body-parser');

// Routes CRUD
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');

const app = express();
app.use(bodyParser.json());

// API Path
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/post', postRoute);

module.exports = app;