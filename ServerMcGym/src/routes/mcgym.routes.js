const express = require("express");
const router = express.Router();

const employee = require("../controllers/mcgym.controller");

router.get("/Empleados", employee.getEmployees); 

router.post("/Empleados/", employee.createEmployee);

router.get("/Empleados/:id", employee.getEmployee);

router.put("/Empleados/:id", employee.editEmployee);

router.delete("/Empleados/:id", employee.deleteEmployee);   


module.exports = router; 