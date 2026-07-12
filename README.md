# HelpDesk FullStack - Backend API

## Descripción

Este proyecto corresponde al desarrollo del Backend del Sistema HelpDesk utilizando Node.js, Express y MongoDB.

La aplicación permite administrar tickets mediante una API REST implementando operaciones CRUD.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman
- Git
- GitHub

---

## Dependencias

- express
- mongoose
- dotenv
- cors
- nodemon

---

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/elviszambrano8344-ops/helpdesk-fullstack.git
```

2. Entrar al proyecto

```bash
cd backend
```

3. Instalar dependencias

```bash
npm install
```

4. Crear el archivo `.env`

```env
MONGODB_URI=mongodb://localhost:27017/helpdesk
PORT=3000
```

5. Ejecutar el servidor

```bash
npm run dev
```

---

## Endpoints

GET /api/tickets

GET /api/tickets/:id

POST /api/tickets

PUT /api/tickets/:id

DELETE /api/tickets/:id

---

## Estructura

backend/

src/

config/

controllers/

models/

routes/

server.js

package.json

---

## Autor

Elvis Javier Zambrano Reyna

Universidad Técnica de Manabí

Tecnologías de la Información

Periodo Abril - Agosto 2026
