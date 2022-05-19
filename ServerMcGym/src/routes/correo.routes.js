const express = require("express");
const router = express();

const envio = require("../controllers/correo.controller");

router.post("/envio", envio.envioCorreo);
router.post("/envio", envio.createToken);


module.exports = router;
