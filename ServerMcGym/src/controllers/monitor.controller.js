const Employee = require("../models/monitores");

const monitor = {};

 
monitor.createMonitor = async (req, res, next) => {
    const monitor = new Employee({
      name: req.body.name, 
      apellido: req.body.apellido, 
      telefono: req.body.telefono,
      dni: req.body.dni,
      datanaixement: req.body.datanaixement, 
      email: req.body.email,
      password: req.body.password,
      ocupacion: req.body.ocupacion
    });
    await monitor.save();
    res.json({ status: "Monitor created" });

  
}; 


module.exports = monitor;

