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