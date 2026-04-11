# 💪 MiFit - Plataforma de Entrenamiento

Una plataforma integral de fitness diseñada para ayudarte a alcanzar tus objetivos de entrenamiento con programas personalizados, seguimiento de ejercicios y una comunidad activa.

## 🎯 Objetivo del Proyecto

MiFit es una aplicación web que proporciona:

- **Programas de Entrenamiento Personalizados**: Rutinas diseñadas para diferentes niveles (principiante, intermedio, avanzado)
- **Catálogo de Ejercicios**: Amplio repertorio de ejercicios para diferentes grupos musculares
- **Entrenamiento por Músculo**: Entrenamientos específicos para pecho, espalda, pierna, glúteos, abdominales, etc.
- **Seguimiento de Progreso**: Los usuarios pueden registrar y monitorear sus entrenamientos
- **Comunidad**: Espacio para compartir consejos, logros y experiencias con otros usuarios
- **Gestión de Perfil**: Editar información personal y ver estadísticas de entrenamiento

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18**: Biblioteca JavaScript para construir interfaces de usuario dinámicas
- **Vite**: Herramienta de construcción rápida y moderna para aplicaciones web
- **CSS3**: Estilos personalizados con un diseño moderno y responsive
- **React Router**: Navegación entre diferentes páginas y componentes
- **ES6+**: JavaScript moderno para mejor mantenibilidad y rendimiento

### Backend (API)
- **Node.js**: Entorno de ejecución para JavaScript en el servidor
- **Express**: Framework minimalista para crear APIs REST
- **JSON**: Formato de datos para almacenamiento y comunicación
- **ESLint**: Validación de código y mejores prácticas

### Base de Datos
- **Archivos JSON**: Almacenamiento de entrenamientos y ejercicios

## 📁 Estructura del Proyecto

```
MiFit/
├── mifit-frontend/          # Aplicación React
│   ├── src/
│   │   ├── componentes/     # Componentes reutilizables
│   │   ├── pages/           # Páginas principales
│   │   ├── styles/          # Estilos CSS
│   │   ├── App.jsx          # Componente principal
│   │   └── main.jsx         # Punto de entrada
│   ├── package.json
│   └── vite.config.js
├── mifit-api/               # API REST con Node.js
│   ├── controller.js        # Lógica de negocio
│   ├── router.js            # Rutas de la API
│   ├── schema.js            # Esquemas de datos
│   ├── middlewares.js       # Middlewares personalizados
│   └── package.json
└── BD/                      # Base de datos en JSON
    ├── BDTrainning.json     # Entrenamientos
    └── ejercicios.json      # Catálogo de ejercicios
```

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js (v14 o superior)
- npm o yarn

### Frontend
```bash
cd mifit-frontend
npm install
npm run dev
```

### Backend
```bash
cd mifit-api
npm install
npm start
```

La aplicación estará disponible en `http://localhost:5173`

## 📖 Características Principales

### 🏋️ Entrenamientos
- Programas de calistenia (principiante, intermedio, avanzado)
- Entrenamientos Full Body e HIIT
- Rutinas específicas por grupos musculares
- Entrenamientos de torso y pierna

### 💾 Gestión de Entrenamientos
- Añadir nuevos entrenamientos personalizados
- Ver detalles completos de cada entrenamiento
- Seguimiento de ejercicios realizados
- Historial de entrenamientos

### 👥 Comunidad
- Compartir experiencias y logros
- Consejos de entrenamiento
- Interacción entre usuarios

### 👤 Perfil de Usuario
- Editar información personal
- Ver estadísticas de entrenamiento
- Gestionar preferencias

## 🎨 Diseño
- Interfaz limpia y moderna
- Diseño responsive para móviles y desktop
- Paleta de colores atractiva
- Navegación intuitiva

## 📝 Licencia
Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor
Desarrollado como proyecto de fitness integrado.

---

**¡Comienza tu viaje hacia un mejor estado físico con MiFit!** 💪
