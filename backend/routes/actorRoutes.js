const express = require('express');
const router = express.Router();
const { createActor } = require('../controllers/actorController');

// Ruta para crear un actor
router.post('/');

module.exports = router;
