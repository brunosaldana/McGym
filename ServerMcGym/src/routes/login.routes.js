const express = require("express");
const router = express.Router();

const login = require("../controllers/login.controller");

router.post("", login.getsLogin);

 
module.exports = router;  