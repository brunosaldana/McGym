const express = require("express");
const router = express.Router();

const actividad = require("../controllers/mis-actividades.controller");

router.get("/misActividades/:id", actividad.getMisActividades);
router.post("/misActividades/:id", actividad.createMisActividad);

module.exports = router;
