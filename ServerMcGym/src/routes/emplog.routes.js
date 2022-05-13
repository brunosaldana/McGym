const express = require("express");
const router = express.Router();

const empLogin = require("../controllers/emplog.controller");


router.post("/emp", empLogin.isEmpleado);



module.exports = router;
