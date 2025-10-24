const express = require('express');
const cors = require('cors');
const teamRoutes = require('./routes/teamRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/teams', teamRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenido a la API de Fútbol ⚽',
    version: '1.0.0',
    endpoints: {
      teams: '/api/teams',
      teamById: '/api/teams/:id'
    }
  });
});

module.exports = app;