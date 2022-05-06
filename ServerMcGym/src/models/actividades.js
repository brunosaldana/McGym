const mongoose = require("mongoose");

const { Schema } = mongoose;

const actividadSchema = new Schema(
  {
    name : {type: String, required: true},
    impartemon : {type: String, required: true},
    dia : {type: String, required: true},
    hora : {type: String, required: true},
    duracion : {type: String, required: true},



  }, 
  {  
    versionKey: false,  
    timestamps: true, 
  }  
); 
    
module.exports = mongoose.model("Actividad", actividadSchema);    