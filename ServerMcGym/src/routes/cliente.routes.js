const express = require("express");
const router = express.Router();

const cliente = require("../controllers/cliente.controller");

router.get("/clientes", cliente.getClientes);

router.post("/clientes", cliente.createCliente);

router.get("/clientes/:id", cliente.getCliente);

router.put("/clientes/:id", cliente.editCliente); 

router.delete("/clientes/:id", cliente.deleteCliente);  
 
 
module.exports = router;  