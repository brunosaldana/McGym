const express = require("express");
const router = express.Router();

const tecnico = require("../controllers/tecnico.controller");




router.post("/tecnico", tecnico.createTecnico);

router.delete("/tecnico/:email", tecnico.deleteTecnico);   




module.exports = router;
