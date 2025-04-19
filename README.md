# 🎮 Consumo de API de Juegos Gratuitos

Bienvenido a una aplicación desarrollada con **React** que consume datos en tiempo real desde la [API FreeToGame](https://www.freetogame.com/api-doc). Esta app te permite explorar, filtrar y visualizar juegos gratuitos de diversas plataformas.

[Ver el repositorio en GitHub](https://github.com/Leonardo1599/Consumo-de-Api-Gratuita)

---

## 🚀 Características principales

- 🎲 **Listado dinámico de juegos**
- 🎯 **Filtros por plataforma, categoría y orden**
- 🔍 **Vista detallada de cada juego**
- 📱 **Diseño responsivo adaptable a móviles y escritorio**

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Descripción |
|------------|-------------|
| ⚛️ React | Framework principal para construir la interfaz |
| 📡 Axios | Cliente HTTP para conectarse a la API |
| 🎨 CSS | Estilización responsiva y moderna |
| 🌐 FreeToGame API | Fuente externa de datos con juegos gratuitos |

---

## 📁 Estructura del proyecto

```plaintext
src/
├── components/
│   ├── JuegosList.jsx       # Lista principal de juegos
│   ├── JuegoDetalle.jsx     # Vista individual de un juego
│   ├── Filtros.jsx          # Componentes de filtros
├── services/
│   └── api.js               # Lógica centralizada para llamadas a la API
├── styles/
│   ├── JuegosList.css
│   ├── JuegoDetalle.css
│   └── Filtros.css
├── App.jsx                  # Punto central de la app
├── App.css                  # Estilos globales
└── index.js                 # Punto de entrada
```

---

## 🛠️ Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar la aplicación en tu entorno local:

```bash
# Clona el repositorio
git clone https://github.com/Leonardo1599/Consumo-de-Api-Gratuita.git

# Entra al directorio del proyecto
cd Consumo-de-Api-Gratuita

# Instala las dependencias necesarias
npm install

# Inicia la aplicación en modo desarrollo
npm start
```

---

## 📚 Documentación de referencia

- [FreeToGame API Docs](https://www.freetogame.com/api-doc)
- [React Oficial](https://reactjs.org/)
- [Axios HTTP](https://axios-http.com/)
