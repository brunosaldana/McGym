const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    name : {type: String, required: true},
    ocupacion : {type: String, required: true},
    edad : {type: Number, required: true},
    dni : {type: Number, required: true},
    correo : {type: String, required: true},
    direccion : {type: String, required: true},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Empleado", employeeSchema);