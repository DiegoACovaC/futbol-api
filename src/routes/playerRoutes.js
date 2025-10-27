const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// GET /api/players
router.get('/', playerController.getAllPlayers);

// GET /api/players/:id
router.get('/:id', playerController.getPlayerById);

module.exports = router;