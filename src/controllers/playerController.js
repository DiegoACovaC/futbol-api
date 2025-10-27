const playerModel = require('../models/playerModel');

const getAllPlayers = async (req, res) => {
  try {
    const players = await playerModel.getAllPlayers();
    res.json({
      success: true,
      count: players.length,
      data: players
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving players',
      error: error.message
    });
  }
};

const getPlayerById = async (req, res) => {
  try {
    const player = await playerModel.getPlayerById(req.params.id);
    
    if (!player) {
      return res.status(404).json({
        success: false,
        message: 'Player not found'
      });
    }

    res.json({
      success: true,
      data: player
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving player',
      error: error.message
    });
  }
};

module.exports = {
  getAllPlayers,
  getPlayerById
};