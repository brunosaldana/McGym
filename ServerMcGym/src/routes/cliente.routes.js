const express = require("express");
const router = express.Router();

const cliente = require("../controllers/cliente.controller");

router.get("/Clientes", cliente.getClientes);

router.post("/Clientes", cliente.createCliente);

router.get("/Clientes/:id", cliente.getCliente);

router.put("/Clientes/:id", cliente.editCliente); 

router.delete("/Clientes/:id", cliente.deleteCliente);     

 
module.exports = router; 