const express = require('express');
const router = express.Router();
const { createMovie } = require('../controllers/movieController');

// Ruta para crear una película
router.post('/');

module.exports = router;
