# Documentación de Endpoints - API de Fútbol 

## Información General
- **Base URL:** `http://localhost:3000`
- **Formato de Respuesta:** JSON
- **Autenticación:** No requerida (por ahora)

---

# Endpoints Disponibles
1. Ruta de Bienvenida  
**GET**  
Proporciona información básica de la API y endpoints disponibles.  
Ejemplo de respuesta:

---

2. Obtener Todos los Equipos  
**GET /api/teams**  
Retorna todos los equipos de fútbol almacenados en el sistema.  
Respuesta exitosa (200)
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

---

3. Obtener Equipo por ID  
**GET /api/teams/:id**  
Retorna un equipo específico basado en su ID.  

**Parámetros:**  
- `id` (integer) - ID único del equipo  

**Ejemplo de uso:** `GET /api/teams/1`  
**Respuesta Exitosa (200):**

---

4. Códigos de Estado HTTP

- 200 - Éxito  
- 404 - Recurso no encontrado  
- 500 - Error interno del servidor
"""
