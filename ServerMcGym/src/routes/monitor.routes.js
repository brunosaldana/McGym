const express = require("express");
const router = express.Router();

const monitor = require("../controllers/monitor.controller");

router.post("/monitor", monitor.createMonitor);

module.exports = router;
