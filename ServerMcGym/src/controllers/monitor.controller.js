const Monitor = require("../models/monitores");

const monitor = {};


monitor.createMonitor = async (req, res, next) => {
  const monitor = new Monitor({
    name: req.body.name,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    dni: req.body.dni,
    datanaixement: req.body.datanaixement,
    email: req.body.email,
    password: req.body.password,
    ocupacion: req.body.ocupacion,
  });
  await monitor.save();
  res.json({ status: "Monitor created" });
};

monitor.deleteMonitor= async (req, res, next) => {
  await Monitor.findOneAndRemove({email: req.params.email}); 
  res.json({ status: "Monitor Deleted" });
};

monitor.editMonitor = async (req, res, next) => {
  await Monitor.findOneAndUpdate({email: req.params.email});
  res.json({ status: "Monitor Updated" });
};

module.exports = monitor;
