const mongoose = require("mongoose");

const { Schema } = mongoose;

const misActividadesSchema = new Schema(
  {
    name : {type: String, required: true},
    impartemon : {type: String, required: true},
    dia : {type: String, required: true},
    hora : {type: String, required: true},  
    duracion : {type: String, required: true},
    cliId : {type: String, required: true}


  }, 
  {  
    versionKey: false,  
    timestamps: true, 
  }  
); 
    
module.exports = mongoose.model("misActividades", misActividadesSchema);    