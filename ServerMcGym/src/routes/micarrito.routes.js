const express = require("express");
const router = express.Router();

const micarrito = require("../controllers/misProductos.controller");

router.post("/prod/:id", micarrito.add);

router.delete("/prod/:id", micarrito.deleteProducto);

router.get("/prod/:id", micarrito.getMisProductos);

module.exports = router;
