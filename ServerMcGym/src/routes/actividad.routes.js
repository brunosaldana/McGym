const express = require("express");
const router = express.Router();

const actividad = require("../controllers/actividad.controller");

router.get("/actividades", actividad.getActividades);

router.post("/actividades", actividad.createActividad);

router.get("/actividades/:id", actividad.getActividad);

router.put("/actividades/:id", actividad.editActividad); 

router.delete("/actividades/:id", actividad.deleteActividad);  
 
 
module.exports = router;  