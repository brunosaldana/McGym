const mongoose = require("mongoose");

const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    id : {type: Number, required: true},
    name : {type: String, required: true},
    ocupacion : {type: String, required: true},
    email : {type: String, required: true},


  },
  {
    versionKey: false,  
    timestamps: true,
  }
);

module.exports = mongoose.model("Empleado", employeeSchema);