const express = require("express");
const router = express.Router();

const monitor = require("../controllers/monitor.controller");


router.post("/monitor", monitor.createMonitor);

router.delete("/monitor/:email", monitor.deleteMonitor);   

router.put("/monitor/:email", monitor.editMonitor); 





module.exports = router;
