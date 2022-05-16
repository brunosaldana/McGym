const express = require("express");
const router = express.Router();

const empLogin = require("../controllers/emplog.controller");


router.post("/emp/:email", empLogin.isEmpleado);
router.post("/mon/:email", empLogin.isMonitor);
router.post("/tec/:email", empLogin.isTecnico);



  

module.exports = router;
