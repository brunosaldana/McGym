const express = require("express");
const router = express.Router(); 

const tarea = require("../controllers/vistatarea.controller");

router.get("/vistatareas", tarea.getvistaTareas); 

module.exports = router;   