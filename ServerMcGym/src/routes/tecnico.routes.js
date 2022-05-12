const express = require("express");
const router = express.Router();

const tecnico = require("../controllers/tecnico.controller");




router.post("/tecnico", tecnico.createTecnico);



module.exports = router;
