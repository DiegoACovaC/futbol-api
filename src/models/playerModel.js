const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '../data/teams.json');

// Leer todos los jugadores
const getAllPlayers = async () => {
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    return JSON.parse(data).players;
  } catch (error) {
    throw new Error('Error reading players data');
  }
};

// Buscar jugador por ID
const getPlayerById = async (id) => {
  const players = await getAllPlayers();
  return players.find(player => player.id === parseInt(id));
};

module.exports = {
  getAllPlayers,
  getPlayerById
};