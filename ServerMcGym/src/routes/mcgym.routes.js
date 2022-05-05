const express = require("express");
const router = express.Router();

const employee = require("../controllers/mcgym.controller");

router.get("/empleados", employee.getEmployees); 

router.post("/empleados/", employee.createEmployee);

router.get("/empleados/:id", employee.getEmployee);

router.put("/empleados/:id", employee.editEmployee);

router.delete("/empleados/:id", employee.deleteEmployee);   


module.exports = router; 