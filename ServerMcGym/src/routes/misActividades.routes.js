const express = require("express");
const router = express.Router();

const actividad = require("../controllers/mis-actividades.controller");

router.get("/misActividades/:id", actividad.getMisActividades);
router.post("/misActividades/:id", actividad.createMisActividad);
router.delete("/misActividades/:id", actividad.deleteReserva);  

// router.put("/misActividades/:id", actividad.putReserva); 

module.exports = router;
