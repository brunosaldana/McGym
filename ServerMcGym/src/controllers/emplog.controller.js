const empleados = require("../models/empleados");
const monitores = require("../models/monitores");
const tecnicos = require("../models/tecnicos");
const clientes = require("../models/clientes");

const empleado = {};

empleado.isEmpleado = async (req, res) => {
  try {
    console.log(req.body.email);
    console.log(req.params);
    const isEmpleado = await empleados.findOne({ email: req.params.email });
    if (isEmpleado) {
      console.log("entro en id exists");
      return res.status(200).send({ ...isEmpleado });
    } else {
      //res.json({ success: false });
      return res
        .status(404)
        .send({ message: "Empleado not found", empleado: false });
    }
  } catch {
    console.log(error);
  }
};

empleado.isMonitor = async (req, res) => {
  try {
    console.log(req.body.email);
    console.log(req.params);
    const isMonitor = await monitores.findOne({ email: req.params.email });
    if (isMonitor) {
      console.log("entro en id exists");
      return res.status(200).send({ ...isMonitor });
    } else {
      //res.json({ success: false });
      return res
        .status(404)
        .send({ message: "Monitor not found", empleado: false });
    }
  } catch {
    console.log(error);
  }
};

empleado.isTecnico = async (req, res) => {
  try {
    console.log(req.body.email);
    console.log(req.params);
    const isTecnico = await tecnicos.findOne({ email: req.params.email });
    if (isTecnico) {
      console.log("entro en id exists");
      return res.status(200).send({ ...isTecnico });
    } else {
      //res.json({ success: false });
      return res
        .status(404)
        .send({ message: "Tecnico not found", empleado: false });
    }
  } catch {
    console.log(error);
  }
};

empleado.isCliente = async (req, res) => {
  try {
    console.log(req.body.email);
    console.log(req.params);
    const isCliente = await clientes.findOne({ email: req.params.email });
    if (isCliente) {
      console.log("entro en id exists");
      return res.status(200).send({ ...isCliente });
    } else {
      //res.json({ success: false });
      return res
        .status(404)
        .send({ message: "Cliente not found", empleado: false });
    }
  } catch {
    console.log(error);
  }
};

empleado.resPass = async (req, res, next) => {
  var a = await clientes.findOneAndUpdate({email: req.params.email}, {password: req.params.password});
  var a = await empleados.findOneAndUpdate({email: req.params.email}, {password: req.params.password});
  
  res.json({ status: "Cliente Updated" });
};

module.exports = empleado;


