const Cliente = require("../models/clientes");

const cliente = {};

cliente.getClientes = async (req, res, next) => {
  const clientes = await Cliente.find();
  res.json(clientes);
};

cliente.createCliente = async (req, res, next) => {
  const cliente = new Cliente({
    name: req.body.name,
    apellido: req.body.apellido,
    telefono: req.body.telefono,
    datanaixement: req.body.datanaixement,
    dni: req.body.dni,
    email: req.body.email,
    password: req.body.password,
  });
  await cliente.save();
  res.json({ status: "Cliente created" });
};

cliente.getCliente = async (req, res, next) => {
  const { id } = req.params;
  const cliente = await Cliente.findById(id);
  res.json(cliente);
};

cliente.editCliente = async (req, res, next) => {
  const { id } = req.params;
  await Cliente.findByIdAndUpdate(id, {$set: req.body});
  res.json({ status: "Cliente Updated" });
};

cliente.deleteCliente= async (req, res, next) => {
  await Cliente.findByIdAndRemove(req.params.id); 
  res.json({ status: "Cliente Deleted" });
};


module.exports = cliente; 