# Flujo de Integración Continua - API de Fútbol

## Descripción
Este documento describe el pipeline de CI/CD configurado para el proyecto API de Fútbol.

## Configuración del Pipeline

### Archivo de Workflow
- **Ubicación:** .github/workflows/nodejs-ci.yml
- **Trigger:** Push y Pull Requests a main

### Jobs Configurados
1. **Build y Test**
   - Entorno: Ubuntu Latest
   - Versiones de Node.js: 18.x, 20.x
   - Ejecución en paralelo

### Pasos Ejecutados
- Checkout del código
- Setup de Node.js
- Instalación de dependencias (npm install)
- Ejecución de tests (npm test)

## Estado Actual
- Tests: 4/4 pasando
- Cobertura de código: 83.78%
- Build exitoso en todas las versiones de Node.js
