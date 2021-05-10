// Dépendances
const express = require('express');

// Importations
const ctrlUser = require('../controllers/user');

const router = express.Router();

// CRUD
router.get('/:id', ctrlUser.showUser);

module.exports = router;