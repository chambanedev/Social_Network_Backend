// Dépendances
const express = require('express');

// Importations
const ctrlUser = require('../controllers/user');

const router = express.Router();

// CRUD
router.get('/:id', ctrlUser.showUser);
router.get('/', ctrlUser.allUsers);
router.put('/:id', ctrlUser.updateUser);
router.delete('/:id', ctrlUser.deleteUser);

module.exports = router;