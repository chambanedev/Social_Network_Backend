// Dépendances
const express = require('express');

// Importations
const ctrlComment = require('../controllers/comment');

const router = express.Router();

// CRUD
router.post('/createComment', ctrlComment.createComment);

module.exports = router;