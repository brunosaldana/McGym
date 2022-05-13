const Tecnico = require("../models/tecnicos");

const tecnico = {};

tecnico.createTecnico = async (req, res, next) => {
  const tecnico = new Tecnico({
    name: req.body.name,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    dni: req.body.dni,
    datanaixement: req.body.datanaixement,
    email: req.body.email,
    password: req.body.password,
    ocupacion: req.body.ocupacion,
  });
  await tecnico.save();
  res.json({ status: "Tecnico created" });
};

tecnico.deleteTecnico= async (req, res, next) => {
  await Tecnico.findOneAndRemove({email: req.params.email}); 
  res.json({ status: "Tecnico Deleted" });
};


module.exports = tecnico;
