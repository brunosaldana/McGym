const express = require("express");
const router = express.Router();

const tarea = require("../controllers/tarea.controller");

router.get("/tareas", tarea.getTareas); 

router.post("/tareas/", tarea.createTarea);

router.get("/tareas/:id", tarea.getTarea);

router.put("/tareas/:id", tarea.editTarea);

router.delete("/tareas/:id", tarea.deleteTarea);   


module.exports = router;  