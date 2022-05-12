const mongoose = require("mongoose");

const { Schema } = mongoose;

const tareaSchema = new Schema(
  {
    namemon : {type: String, required: true},
    nametec : {type: String, required: true},
    fecha : {type: String, required: true},
    hora : {type: String, required: true},  
    incidencia : {type: String, required: true}

  }, 
  {  
    versionKey: false,  
    timestamps: true, 
  }  
); 
    
module.exports = mongoose.model("Tarea", tareaSchema);    