const mongoose = require("mongoose");

const { Schema } = mongoose;

const tokenSchema = new Schema(
  {
    token : {type: String, required: true},
    email : {type: String, required: true},



  }, 
  {  
    versionKey: false, 
    timestamps: true,     
  }  
); 
    
module.exports = mongoose.model("Token", tokenSchema);    