const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// GET /api/teams
router.get('/', teamController.getAllTeams);

// GET /api/teams/:id
router.get('/:id', teamController.getTeamById);

module.exports = router;

const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// GET /api/players
router.get('/', playerController.getAllPlayers);

// GET /api/players/:id
router.get('/:id', playerController.getPlayerById);

module.exports = router;