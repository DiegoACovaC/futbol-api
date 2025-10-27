const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// GET /api/teams
router.get('/', teamController.getAllTeams);

// GET /api/teams/:id
router.get('/:id', teamController.getTeamById);

module.exports = router;