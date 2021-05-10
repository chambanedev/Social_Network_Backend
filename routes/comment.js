// Dépendances
const express = require('express');

// Importations
const ctrlComment = require('../controllers/comment');

const router = express.Router();

// CRUD
router.post('/createComment', ctrlComment.createComment);
router.get('/:id', ctrlComment.showComment);
router.get('/', ctrlComment.allComments);
router.put('/:id', ctrlComment.updateComment);
router.delete('/:id', ctrlComment.deleteComment);

module.exports = router;