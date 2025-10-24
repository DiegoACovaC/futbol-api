const teamModel = require('../models/teamModel');

// GET /api/teams - Obtener todos los equipos
const getAllTeams = async (req, res) => {
  try {
    const teams = await teamModel.getAllTeams();
    res.json({
      success: true,
      count: teams.length,
      data: teams
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving teams',
      error: error.message
    });
  }
};

// GET /api/teams/:id - Obtener equipo por ID
const getTeamById = async (req, res) => {
  try {
    const team = await teamModel.getTeamById(req.params.id);
    
    if (!team) {
      return res.status(404).json({
        success: false,
        message: 'Team not found'
      });
    }

    res.json({
      success: true,
      data: team
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving team',
      error: error.message
    });
  }
};

module.exports = {
  getAllTeams,
  getTeamById
};