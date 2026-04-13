# MiFit

Aplicacion web de fitness con frontend en React y backend en Express. En esta aplicación el usuario puede registrarse, iniciar sesion, consultar  entrenamientos, añadir tus propios entrenamientos, acceso a consejos/comunidad y gestion basica del perfil de usuario.

## Demo

- mifit-frontend (Vercel): https://mifit-frontend.vercel.app
- mifit-api (Vercel): https://mifit-api.vercel.app


## Funcionalidades

- Registro e inicio de sesion de usuarios.
- Añadir entrenamientos para ver el progreso
- Consulta de listas de  entrenamientos y ejercicios.
- Navegacion por niveles y grupos musculares.
- Edicion de perfil de usuario.


## Tecnologias

### Frontend

- React
- Vite
- React Router
- CSS
- Vercel

### Backend

- Node.js
- Express
- Mongoose
- JWT

### Base de datos

- MongoDB Atlas


## Variables de entorno

### Backend mifit-api

En la carpeta `mifit-api`, creamos un archivo `.env` con estas variables y esto mismo lo pondremos en vercel en :

```env
DATABASE_URL=mongodb+srv://usuario:password@cluster0.xxxxx.mongodb.net/mifitdb?retryWrites=true&w=majority&appName=Cluster0
PORT=3000
JWT_SECRET=tu_clave_secreta
```


### Frontend mifit-frontend

En la carpeta `mifit-frontend`, creamos también un archivo `.env` para desarrollo local:

```env
VITE_EXPRESS=http://localhost:3000
```

En Vercel, en el proyecto `mifit-frontend`, configuramos el env:

```env
VITE_EXPRESS=https://mifit-api.vercel.app
```


## Ejecucion en local

Para ejecutar la API en local tenemos que abrir dos terminales: una para backend y otra para frontend.

### 1 Backend (terminal 1)

```bash
cd mifit-api
npm install
npm run dev
```

### 2 Frontend (terminal 2)

```bash
cd mifit-frontend
npm install
npm run dev
```

## Despliegue en Vercel
Para desplegar el proyecto en vercel he desplegado los dos entornos el mifit-api y mifit-frontend. 
Los pasos para desplegar el proyecto son: 

1. Desplegar `mifit-api`.
2. Configurar variables del backend (`DATABASE_URL`, `PORT`, `JWT_SECRET`).
3. Hacer redeploy del backend.
4. Desplegar `mifit-frontend`.
5. Configurar `VITE_EXPRESS` con la URL del backend en Vercel.
6. Hacer redeploy del frontend.

Despues de modificar variables de entorno en Vercel, hacemos deploy de nuevo y listo.
