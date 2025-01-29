const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

const app = express();

// Habilitar CORS (con configuraciones por defecto o personalizadas)
app.use(cors());

// Middleware para procesar JSON
app.use(express.json());

// Rutas
app.use("/api", productRoutes);

module.exports = app;
