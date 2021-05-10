// Dépendances
const express = require('express');

// Importations
const ctrlPost = require('../controllers/post');

const router = express.Router();


// CRUD
router.post('/createPost', ctrlPost.createPost);
router.get('/:id', ctrlPost.showPost);
router.get('/', ctrlPost.allPosts);
router.put('/:id', ctrlPost.updatePoste);
router.delete('/:id', ctrlPost.deletePost);

module.exports = router;