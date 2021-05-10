// Dépendances
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// Routes CRUD
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const CommentRoute = require('./routes/comment');

const app = express();
app.use(express.json());

// Sécurisation 
app.use(helmet());


// Cors config
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));

// Routes de l'API 
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/comment', CommentRoute);

module.exports = app;