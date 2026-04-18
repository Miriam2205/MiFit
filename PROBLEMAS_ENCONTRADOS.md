# Problema: Variables de entorno no conectaban con el servidor

## ¿Cuál era el problema?

El frontend no podía conectarse a la API en Vercel porque la variable de entorno `VITE_EXPRESS` no estaba configurada correctamente en Vercel.

## ¿Qué pasaba?

- En local tenía `VITE_EXPRESS=http://localhost:3000` (funciona bien)
- Pero cuando subía a Vercel, seguía intentando conectar a `localhost:3000` en lugar de `https://mifit-api.vercel.app`
- Esto hacía que el frontend no pudiera hablar con la API en Vercel

## ¿Por qué pasaba?

Porque no había configurado la variable de entorno en Vercel. Las variables `.env` locales no se suben a Vercel automáticamente.

## ¿Cómo lo solucioné?

1. Fui a Vercel → Proyecto mifit-frontend
2. Entré en Settings → Environment Variables
3. Agregué la variable: `VITE_EXPRESS = https://mifit-api.vercel.app`
4. Hice un redeploy del proyecto

## Ahora funciona

El frontend ahora consigue conectar con la API en Vercel correctamente.

