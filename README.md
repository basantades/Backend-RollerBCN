# Backend-RollerBCN (Node.js + Express + MongoDB)

## 📄 Descripción

Este repositorio contiene el backend para el proyecto **RollerBCN**, una aplicación desarrollada como parte del **Sprint 8** de la **IT Academy Frontend**. Proporciona una API RESTful que gestiona datos sobre eventos, ubicaciones y gráficos relacionados con el patinaje, consumidos por el frontend alojado en [https://rollerbcn.vercel.app/](https://rollerbcn.vercel.app/). El backend está construido con **Node.js**, utiliza **Express** para las rutas y se conecta a una base de datos **MongoDB** para almacenar y gestionar los datos.

## ✨ Características

- **API RESTful**: Endpoints para gestionar eventos, ubicaciones y gráficos de datos.
- **Conexión con MongoDB**: Almacena datos de eventos, ubicaciones y gráficos en colecciones dedicadas.
- **CORS Configurado**: Permite solicitudes desde el frontend en http://localhost:4200 y https://rollerbcn.vercel.app.
- **Ruta Raíz Informativa**: Muestra una página HTML sencilla con información sobre los endpoints disponibles, el repositorio y autor.
- **Despliegue en Railway**: Backend alojado en [https://backend-rollerbcn-production.up.railway.app/](https://backend-rollerbcn-production.up.railway.app/). Prueba los endpoints como /events, /ubicaciones o /charts.

## 💻 Tecnologías Utilizadas

- Node.js (v22.2.0)
- Express para la creación de rutas y manejo de solicitudes HTTP.
- MongoDB como base de datos para almacenar eventos, ubicaciones y gráficos.
- Mongoose para la gestión de esquemas y modelos en MongoDB.
- JavaScript (ESM) para la lógica del backend.
- Railway para el despliegue en producción.

## 📋 Requisitos

- **Node.js** y **npm** instalados en tu sistema. Descárgalos desde [nodejs.org](https://nodejs.org).
- **MongoDB** configurado, ya sea localmente o en la nube (e.g., MongoDB Atlas).
- Acceso a las credenciales de MongoDB (URL de conexión).

## 🛠️ Instalación

### ✔️ Requisitos previos

Asegúrate de tener **Node.js** instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org).

### ✔️ Instalación paso a paso

1️⃣ Clona este repositorio en tu máquina local:
```
git clone https://github.com/basantades/Backend-RollerBCN.git
```

2️⃣ Desvincula el repositorio del control remoto original (opcional):
```
git remote remove origin
```

Este paso es útil si planeas trabajar en tu propia versión del proyecto y no deseas mantener la conexión con el repositorio original.

3️⃣ Ingresa al directorio del proyecto:
```
cd Backend-RollerBCN
```

4️⃣ Instala las dependencias necesarias:
```
npm install
```

Esto instalará todas las dependencias necesarias, incluyendo Express y Mongoose.

## ▶️ Ejecución

Antes de iniciar el servidor, debes configurar las credenciales de MongoDB. Crea un archivo .env en la raíz del proyecto con la siguiente estructura:
```
PORT=5100
MONGO_USER=
MONGO_PASSWORD=
MONGO_DB=
```

1. Asegúrate de reemplazar los valores vacíos de MONGO_USER, MONGO_PASSWORD y MONGO_DB con las credenciales correspondientes de tu base de datos MongoDB (por ejemplo, obtenidas de MongoDB Atlas).
2. El puerto (PORT) está configurado en 5100, pero puedes cambiarlo si lo necesitas.

Para iniciar el servidor en un entorno de desarrollo, ejecuta:
```
node app.js
```

Luego, abre tu navegador o usa un cliente como Postman para probar los endpoints en http://localhost:5100/. Algunos endpoints disponibles:
- http://localhost:5100/events
- http://localhost:5100/ubicaciones
- http://localhost:5100/charts

## 🤝 Contribuciones

Si deseas colaborar en este proyecto o reportar algún problema, sigue estos pasos:

1. Crea un **issue** para reportar errores o sugerir mejoras.
2. Envía un **pull request** con tus contribuciones.
3. Asegúrate de seguir las buenas prácticas de desarrollo y de probar tus cambios antes de enviarlos.

Este README proporciona una guía básica para configurar, utilizar y contribuir al proyecto **Backend-RollerBCN**. Asegúrate de consultar la documentación oficial de Node.js, Express, MongoDB y Mongoose para obtener información más detallada y actualizaciones.