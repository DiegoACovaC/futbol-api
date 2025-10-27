# futbol-api

# Pasos:

## 1.Alcance y Arquitectura del Proyecto:

-Funcionalidad seleccionada: API RESTful para gestión de equipos y jugadores de fútbol

-Patrón de arquitectura: MVC (Model-View-Controller)

-Justificación de MVC: Dirigirse **docs/arquitectura.md**

-Documentación: Completada en **docs/arquitectura.md**

---

## 2.Servicios Web Desarrollados:

-Framework utilizado: Express.js para Node.js

-Endpoints implementados:

GET / - Ruta de bienvenida e información de la API

GET /api/teams - Obtener todos los equipos

GET /api/teams/:id - Obtener equipo específico por ID

-Buenas prácticas implementadas:

Manejo de errores (404 para recursos no encontrados, 500 para errores internos)

Respuestas JSON consistentes

Estructura de respuestas estandarizada (success, data, message)

Validación básica de datos

-Documentación: Completada en docs/endpoints.md

---

## 3.Integración Básica Configurada:

Control de versiones: Git implementado

Estructura del repositorio:

Scripts en package.json:

npm start - Iniciar servidor

npm test - Ejecutar tests con Jest

npm run dev - Desarrollo con nodemon

Entorno de desarrollo: Node.js + dependencias configuradas

---

## 4.Integración Continua Implementada:

Herramienta CI: GitHub Actions

Pipeline configurado: .github/workflows/nodejs-ci.yml

Automatización:

Ejecución en push y pull requests a main

Tests automatizados con Jest

Multi-versión Node.js (18.x, 20.x)

Instalación automática de dependencias

Verificación de que el servidor inicia

Etapas del pipeline:

Checkout del código

Setup Node.js

Instalación dependencias (npm install)

Ejecución tests (npm test)

Documentación: Pendiente en docs/flujo-ci-cd.md

---

