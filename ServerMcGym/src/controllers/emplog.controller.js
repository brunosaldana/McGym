const empleados = require("../models/empleados");

const empleado = {};

empleado.isEmpleado = async (req, res) => {
  try {
    const isEmpleado = await empleados.findOne({ _id: req.body._id });
    if (isEmpleado) {
      res.json({ success: true });
      console.log("entro en id exists");
    } else {
      res.json({ success: false });
      //res.status(404).json({ message: "Empleado not found" });
    }
  } catch {
    console.log(error);
  }
};

module.exports = empleado;
