// Dépendances
const express = require('express');

// Importations
const ctrlPost = require('../controllers/post');

const router = express.Router();


// CRUD
router.post('/createPost', ctrlPost.createPost);
router.get('/:id', ctrlPost.showPost);

module.exports = router;