# Carrito de Compras con React - Proyecto de Aprendizaje

Este proyecto está diseñado para aprender los fundamentos de React mientras se construye una aplicación de carrito de compras. Utilizaremos un archivo JSON local para gestionar los productos, sin necesidad de un backend completo ni sistema de login.

## Objetivos de Aprendizaje

- Entender los componentes y la estructura de una aplicación React
- Dominar los hooks básicos (useState, useEffect)
- Introducción al Context API para estado global
- Implementar un diseño responsive con Tailwind CSS
- Manejar persistencia de datos con localStorage

## Estructura de Tareas

El proyecto está organizado en fases progresivas, comenzando con tareas más sencillas e incrementando gradualmente la complejidad.

## Fase 1: Configuración y Estructura Básica

### Tarea 1.1: Configuración del Proyecto

- [✔] Crear una nueva aplicación con Create React App
- [✔] Limpiar los archivos iniciales innecesarios
- [✔] Configurar Git y crear un repositorio

### Tarea 1.2: Instalación de Dependencias

- [✔] Instalar Tailwind CSS y configurarlo
- [✔] Instalar React Router para la navegación
- [✔] Crear la estructura de carpetas (components, pages, data, etc.)

### Tarea 1.3: Creación del JSON de Productos

- [✔] Crear archivo `products.json` con datos de ejemplo (nombre, precio, imagen, descripción, categoría)
- [✔] Preparar imágenes de productos para su uso

## Fase 2: Implementación de la Interfaz Básica

### Tarea 2.1: Diseño del Layout Principal

- [✔] Crear componente de Navbar con logo y enlace al carrito
- [✔] Diseñar un Footer simple
- [✔] Implementar un layout que incluya ambos componentes

### Tarea 2.2: Página de Inicio y Listado de Productos

- [✔] Crear página de inicio con mensaje de bienvenida
- [✔] Implementar el componente `ProductList` que muestre todos los productos
- [✔] Utilizar `useState` para almacenar la lista de productos
- [✔] Usar `useEffect` para cargar los productos desde el JSON local

### Tarea 2.3: Componente de Tarjeta de Producto

- [✔] Diseñar el componente `ProductCard` con Tailwind CSS
- [✔] Mostrar imagen, nombre, precio y botón "Añadir al carrito"
- [✔] Implementar hover effects y animaciones básicas

## Fase 3: Funcionalidad del Carrito de Compras

### Tarea 3.1: Creación del Context para el Carrito

- [✔] Implementar `CartContext` utilizando createContext
- [✔] Crear un Provider con estado inicial vacío
- [✔] Implementar una nueva pagina para trabajar con rutas de `rect-router-dom`
- [✔] Implementar funciones básicas (añadir, eliminar, actualizar cantidad)

### Tarea 3.2: Persistencia con localStorage

- [ ] Guardar el estado del carrito en localStorage
- [ ] Cargar el carrito desde localStorage al iniciar la aplicación
- [ ] Actualizar localStorage cada vez que cambie el carrito

### Tarea 3.3: Componente del Carrito

- [ ] Crear página para mostrar los productos en el carrito
- [ ] Implementar la visualización de productos añadidos
- [ ] Añadir botones para incrementar/decrementar cantidad
- [ ] Añadir botón para eliminar productos del carrito

## Fase 4: Mejoras en la Experiencia de Usuario

### Tarea 4.1: Filtrado de Productos

- [ ] Agregar filtros por categoría utilizando botones o select
- [ ] Implementar una barra de búsqueda simple
- [ ] Usar `useState` para gestionar el estado de los filtros

### Tarea 4.2: Detalles de Producto

- [ ] Crear página de detalles de producto
- [ ] Implementar navegación con React Router y parámetros URL
- [ ] Mostrar información detallada del producto seleccionado

### Tarea 4.3: Resumen del Carrito

- [ ] Añadir contador de productos en el icono del carrito
- [ ] Calcular y mostrar subtotal, IVA y total
- [ ] Implementar un botón de "Vaciar carrito"

## Fase 5: Simulación de Checkout

### Tarea 5.1: Formulario de Datos Básicos

- [ ] Crear un formulario simple para información del cliente
- [ ] Implementar validación básica de campos
- [ ] Gestionar el estado del formulario con useState

### Tarea 5.2: Página de Resumen

- [ ] Crear página de resumen de la compra
- [ ] Mostrar productos seleccionados, cantidades y precios
- [ ] Mostrar un resumen de la información del cliente

### Tarea 5.3: Confirmación

- [ ] Implementar página de confirmación de pedido
- [ ] Generar un número de pedido aleatorio
- [ ] Vaciar el carrito tras la confirmación

## Fase 6: Optimización y Mejoras

### Tarea 6.1: Optimización de Componentes

- [ ] Refactorizar el código para mejor organización
- [ ] Implementar useMemo para optimizaciones de rendimiento
- [ ] Extraer lógica reutilizable a custom hooks

### Tarea 6.2: Mejoras Visuales

- [ ] Implementar modo oscuro/claro usando Tailwind
- [ ] Añadir animaciones de transición
- [ ] Mejorar el diseño responsive para todos los dispositivos

### Tarea 6.3: Características Adicionales

- [ ] Implementar un componente de "Productos destacados"
- [ ] Añadir notificaciones toast al añadir/eliminar productos
- [ ] Crear una página de "404 Not Found" personalizada

## Tecnologías a Utilizar

- **React**: Biblioteca principal para construir la interfaz
- **React Hooks**: useState, useEffect, useContext
- **React Router**: Para la navegación entre páginas
- **Tailwind CSS**: Framework CSS para el diseño
- **localStorage**: Para persistencia del carrito
- **JSON**: Archivo local para datos de productos

## Tips para el Desarrollo

### Hooks de React

- **useState**: Úsalo para manejar estado dentro de componentes (productos, filtros, formularios)
- **useEffect**: Utilízalo para efectos secundarios como cargar datos o actualizar localStorage
- **useContext**: Para acceder al estado global del carrito desde cualquier componente

### Tailwind CSS

- Utiliza clases utilitarias para crear componentes consistentes
- Aprovecha el sistema de responsive design con prefijos como `sm:`, `md:`, etc.
- Personaliza el archivo `tailwind.config.js` para colores y temas personalizados

### LocalStorage

- Recuerda que localStorage solo acepta strings, usa `JSON.stringify()` y `JSON.parse()`
- Implementa una verificación para comprobar si localStorage está disponible
- Considera usar una estructura clara para los datos almacenados

## Recursos de Aprendizaje Recomendados

- [Documentación oficial de React](https://reactjs.org/docs/getting-started.html)
- [Tutorial de Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/docs/en/v6)

---

Este proyecto está diseñado para un aprendizaje progresivo de React. Siéntete libre de adaptar las tareas según tu ritmo de aprendizaje y explorar características adicionales a medida que te sientas cómodo.
