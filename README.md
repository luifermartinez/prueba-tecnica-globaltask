# Prueba técnica para GlobalTask

## Descripción

Este proyecto es una aplicación de Node.js que utiliza Express.js y TypeScript. Proporciona un conjunto de APIs para gestionar productos.

## Requisitos

- Node.js 18.17.1

## Tecnologías utilizadas

- TypeScript 5.3.2
- Express.js 4.18.2
- Axios 1.6.2
- Class Transformer 0.5.1
- Class Validator 0.14.0
- Dotenv 16.3.1
- ts-node-dev 2.0.0

### Endpoints

- `GET /v1/products` - Devuelve todos los productos
- `GET /v1/ products/:id` - Devuelve un producto por su id

## Instalación

1. Clonar el repositorio

```sh
git clone https://github.com/luifermartinez/prueba-tecnica-globaltask
```

2. Instalar dependencias

```sh
npm install
```

3. Crear archivo .env

```sh
cp .env.example .env
```

## Ejecución en modo desarrollo

1. Iniciar el servidor de desarrollo

```sh
npm run dev
```

## Ejecución en modo producción

1. Compilar el proyecto

```sh
npm run tsc
```

2. Iniciar el servidor

```sh
npm run start
```

## Autor

👤 **Luis Martinez**

[![Github](https://img.shields.io/badge/-luifermartinez-black?style=flat&logo=github&logoColor=white)](https://github.com/luifermartinez)
[![LinkedIn](https://img.shields.io/badge/-Luis%20Martinez-blue?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luifer132/)
[![Email](https://img.shields.io/badge/-Luis%20Martinez-red?style=flat&logo=gmail&logoColor=white)](mailto:thelm132@gmail.com)

## 🤝 Contribuciones

Las contribuciones, problemas y solicitudes de características son bienvenidas.
