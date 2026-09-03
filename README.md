# Parcial 1 - SW2

Proyecto base para una API REST en Express con arquitectura por capas y Prisma.

## Objetivo

Definir una estructura limpia para un CRUD de la entidad Drone siguiendo el patrón de capas:

- Controller: recibe y responde las peticiones HTTP.
- Service: contiene la lógica de negocio.
- Repository: encapsula el acceso a Prisma / base de datos.
- Route: publica los endpoints.
- Config: carga la configuración de entorno.

## Entidad Drone

- id: String
- serial: String
- modelo: String
- fabricante: String
- peso: double

## Estructura sugerida

```text
src/
  app.js
  server.js
  config/
    index.js
  controllers/
    drone.controller.js
  services/
    drone.service.js
  repositories/
    drone.repository.js
  routes/
    drone.routes.js
  utils/
    response.js
prisma/
  schema.prisma
.env.example
```

## Endpoints del CRUD

- GET /api/drones
- GET /api/drones/:id
- POST /api/drones
- PUT /api/drones/:id
- DELETE /api/drones/:id

## Flujo recomendado

1. La ruta llama al controller.
2. El controller valida la petición y delega al service.
3. El service ejecuta la lógica de negocio.
4. El repository realiza la operación con Prisma.
5. La respuesta retorna al cliente en formato JSON.

## Variables de entorno

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/drone_db?schema=public"
PORT=3000
```

## Comandos base

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```
