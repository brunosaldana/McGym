const mongoose = require("mongoose");

const { Schema } = mongoose;

const clienteSchema = new Schema(
  {
    name : {type: String, required: true},
    apellido : {type: String, required: true},
    telefono : {type: Number, required: true},
    datanaixement : {type: String, required: true},  
    dni : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},


  }, 
  {  
    versionKey: false,  
    timestamps: true, 
  }   
); 
    
module.exports = mongoose.model("Cliente", clienteSchema);    