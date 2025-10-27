# Documentación de Endpoints - API de Fútbol 

## Información General
- **Base URL:** `http://localhost:3000`
- **Formato de Respuesta:** JSON
- **Autenticación:** No requerida (por ahora MVP)

---

# Endpoints Disponibles
1. Ruta de Bienvenida  
**GET**  
Proporciona información básica de la API y endpoints disponibles.  
Ejemplo de respuesta:

```json
{
  "message": "Bienvenido a la API de Fútbol ⚽",
  "version": "1.0.0",
  "endpoints": {
    "teams": "/api/teams",
    "teamById": "/api/teams/:id"
  }
}
```
---

2. Obtener Todos los Equipos  
**GET /api/teams**  
Retorna todos los equipos de fútbol almacenados en el sistema.  
Respuesta exitosa (200):
```
{
  "teams": [
    {
      "id": 1,
      "name": "Real Madrid",
      "country": "Spain",
      "league": "La Liga",
      "founded": 1902,
      "stadium": "Santiago Bernabéu",
      "coach": "Xabi Alonso"
    },
    {
      "id": 2,
      "name": "FC Barcelona",
      "country": "Spain", 
      "league": "La Liga",
      "founded": 1899,
      "stadium": "Spotify Camp Nou",
      "coach": "Hans-Dieter Flick"
    },
    {
      "id": 3,
      "name": "Atletico Madrid",
      "country": "Spain",
      "league": "La Liga",
      "founded": 1903,
      "stadium": "Wanda Metropolitano",
      "coach": "Diego Simeone"
    }
  ],
  "players": [
    {
      "id": 1,
      "name": "Jude Bellingham",
      "age": 22,
      "position": "Midfielder",
      "nationality": "English",
      "teamId": 1,
      "goals": 15
    },
    {
      "id": 2,
      "name": "Pedri",
      "age": 20,
      "position": "Midfielder",
      "nationality": "Spanish",
      "teamId": 2,
      "goals": 20
    },
    {
      "id": 3,
      "name": "Julian Álvarez",
      "age": 23,
      "position": "Forward",
      "nationality": "Argentinian",
      "teamId": 3,
      "goals": 30
    }
  ]
}
```
---

3. Obtener Equipo por ID  
**GET /api/teams/:id**  
Retorna un equipo específico basado en su ID.  

**Parámetros:**  
- `id` (integer) - ID único del equipo  

**Ejemplo de uso:** `GET /api/teams/1`  
**Respuesta Exitosa (200):**
```
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Real Madrid",
    "country": "Spain",
    "league": "La Liga",
    "founded": 1902,
    "stadium": "Santiago Bernabéu",
    "coach": "Carlo Ancelotti"
  }
}
```
---

4. Obtener Todos los Equipos  
**GET /api/teams**  
Retorna todos los equipos de fútbol almacenados en el sistema.  
Respuesta exitosa (200):
```
"players": [
    {
      "id": 1,
      "name": "Jude Bellingham",
      "age": 22,
      "position": "Midfielder",
      "nationality": "English",
      "teamId": 1,
      "goals": 15
    },
    {
      "id": 2,
      "name": "Pedri",
      "age": 20,
      "position": "Midfielder",
      "nationality": "Spanish",
      "teamId": 2,
      "goals": 20
    },
    {
      "id": 3,
      "name": "Julian Álvarez",
      "age": 23,
      "position": "Forward",
      "nationality": "Argentinian",
      "teamId": 3,
      "goals": 30
    }
  ]
}
```

---

5. Obtener Equipo por ID  
**GET /api/teams/:id**  
Retorna un equipo específico basado en su ID.
**Parámetros:**  
- `id` (integer) - ID único del equipo  

**Ejemplo de uso:** `GET /api/teams/1`  
**Respuesta Exitosa (200):**
```
{
  "success": true,
  "data": {
    "id": 1,
      "name": "Jude Bellingham",
      "age": 22,
      "position": "Midfielder",
      "nationality": "English",
      "teamId": 1,
      "goals": 15
  }
}
```

---

6. Códigos de Estado HTTP

- 200 - Éxito  
- 404 - Recurso no encontrado  
- 500 - Error interno del servidor

