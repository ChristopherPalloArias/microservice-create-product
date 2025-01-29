const express = require("express");
const { createProduct } = require("../controllers/productController");
const router = express.Router();

// Ruta para crear producto
router.post("/products", createProduct);

// Ruta de salud
router.get("/health", (req, res) => {
  return res.status(200).json({
    status: "OK",
    message: "Microservicio corriendo correctamente",
  });
});

module.exports = router;
