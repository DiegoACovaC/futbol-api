const request = require('supertest');
const app = require('../src/app');

describe('Teams API', () => {
  // Test para la rraíz
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toContain('API de Fútbol');
  });

  // Test para obtener todos los equipos
  test('GET /api/teams should return all teams', async () => {
    const response = await request(app).get('/api/teams');
    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  // Test para obtener un equipo específico
  test('GET /api/teams/1 should return Real Madrid', async () => {
    const response = await request(app).get('/api/teams/1');
    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.name).toBe('Real Madrid');
  });

  // Test para equipo no encontrado
  test('GET /api/teams/999 should return 404', async () => {
    const response = await request(app).get('/api/teams/999');
    expect(response.statusCode).toBe(404);
    expect(response.body.success).toBe(false);
  });
});