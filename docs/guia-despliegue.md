# Guía de Despliegue - API de Fútbol 

## Requisitos del Sistema
- Node.js 18.x o superior
- npm 9.x o superior
- Git

## Instalación Local

### 1. Clonar el Repositorio
```bash
git clone https://github.com/DiegoACovaC/futbol-api.git
cd futbol-api
```

### 2. Instalación

-Instalar Dependencias:
 npm install
 
 -Ejecutar la Aplicación:
 npm start
 
 -Verificar Funcionamiento:
 curl http://localhost:3000
 
### 3. Uso de la API
-Endpoints disponible
Obtener información de la API:
curl http://localhost:3000/

Listar todos los equipos:
curl http://localhost:3000/api/teams

Obtener equipo específico:
curl http://localhost:3000/api/teams/1-3

Listar todos los jugadores:
curl http://localhost:3000/api/players

Obtener jugador específico:
curl http://localhost:3000/api/players/1-3

### 4. Ejecución de Tests
Ejecutar todos los tests:
npm test

Ejecutar tests con cobertura:
npm test -- --coverage

### 5. Desarrollo
npm run dev

### 6. Estructura del proyecto
