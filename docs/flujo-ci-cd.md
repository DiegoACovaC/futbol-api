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

## Diagrama de flujo CI

<img width="1024" height="745" alt="image" src="https://github.com/user-attachments/assets/d6822118-c685-4cf4-8c8c-4f6a4d8979b9" />
