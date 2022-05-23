const mongoose = require("mongoose");

const { Schema } = mongoose;

const carritoSchema = new Schema(
  {
    name : {type: String, required: true},
    descripcion : {type: String, required: true},
    precio : {type: String, required: true},

  }, 
  {  
    versionKey: false,  
    timestamps: true, 
  }   
); 
    
module.exports = mongoose.model("Carrito", carritoSchema);    