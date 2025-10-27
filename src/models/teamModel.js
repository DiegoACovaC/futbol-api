const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '../data/teams.json');

// Leer todos los equipos
const getAllTeams = async () => {
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    return JSON.parse(data).teams;
  } catch (error) {
    throw new Error('Error reading teams data');
  }
};

// Buscar equipo por ID
const getTeamById = async (id) => {
  const teams = await getAllTeams();
  return teams.find(team => team.id === parseInt(id));
};

// Buscar equipos por país
const getTeamsByCountry = async (country) => {
  const teams = await getAllTeams();
  return teams.filter(team => 
    team.country.toLowerCase() === country.toLowerCase()
  );
};

module.exports = {
  getAllTeams,
  getTeamById,
  getTeamsByCountry
};

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

// Buscar jugadores por equipo
const getPlayersByTeam = async (teamId) => {
  const players = await getAllPlayers();
  return players.filter(player => player.teamId === parseInt(teamId));
};