const express = require("express");
const micarrito = require("../controllers/mi-carrito.controller");
const router = express.Router();


router.get("/miCarrito/:id", micarrito.getMicarrito);
router.post("/miCarrito/:id", micarrito.createMicarrito);
router.delete("/miCarrito/:id", micarrito.deleteMicarrito);  


module.exports = router;
