const express = require("express");
const router = express.Router();

const monitor = require("../controllers/monitor.controller");


router.get("/monitores", monitor.getMonitores);

router.post("/monitor", monitor.createMonitor);

router.delete("/monitor/:email", monitor.deleteMonitor);   




module.exports = router;
