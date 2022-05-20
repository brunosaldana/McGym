const express = require("express");
const router = express.Router();

const carrito = require("../controllers/carrito.controller");

router.get("/tienda", carrito.getCarritos);

router.post("/tienda", carrito.createCarrito);

router.get("/tienda/:id", carrito.getCarrito);

router.put("/tienda/:id", carrito.editCarrito); 

router.delete("/tienda/:id", carrito.deleteCarrito);  
 
 
module.exports = router;  