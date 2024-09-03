# 📚 Proyecto de Prueba: Aplicación de Gestión de Libros

## Descripción

Este es un proyecto de prueba para una aplicación web desarrollada en Node.js con el framework Express. La aplicación permite gestionar una colección de libros mediante una interfaz de usuario. Las funcionalidades principales incluyen:

- **➕ Agregar** nuevos libros a la colección.
- **✏️ Editar** la información de libros existentes.
- **🔄 Actualizar** los detalles de los libros.
- **❌ Borrar** libros de la colección.

Este proyecto tiene como objetivo demostrar la capacidad de crear una aplicación básica utilizando Node.js y Express, y proporcionar una base para aprender sobre el desarrollo de aplicaciones web con estas tecnologías

🔍 **Este proyecto está diseñado como una práctica usando Node.js y Express.** El objetivo es proporcionar una base para aprender y experimentar con estas tecnologías

- **`books-project/`**
  - **`config/`** - Configuraciones de la aplicación
    - `db.js` - Configuración de la base de datos
  - **`controllers/`** - Controladores para manejar la lógica de negocio
    - `addBooks.js` - Controlador para agregar libros
    - `deleteBooks.js` - Controlador para borrar libros
    - `getBooks.js` - Controlador para obtener libros
    - `index.js` - Archivo principal de controladores
    - `putBooks.js` - Controlador para actualizar libros
  - **`models/`** - Modelos para definir la estructura de los datos
    - `book.js` - Modelo para el libro
  - **`api.http`** - Archivo para probar los endpoints (opcional)
  - **`App.js`** - Archivo principal que arranca la aplicación
  - **`README.md`** - Este archivo
