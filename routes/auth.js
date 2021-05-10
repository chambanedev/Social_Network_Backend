// Dépendances
const express = require('express');

// Importations
const ctrlAuth = require('../controllers/auth');

const router = express.Router();


// CRUD
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;