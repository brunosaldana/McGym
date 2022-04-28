const mongoose = require('mongoose')

const uri = "mongodb+srv://brunosaldana:tarda1234@mcgym.1ppc0.mongodb.net/Mcgym?retryWrites=true&w=majority";

mongoose
    .connect(uri, {

        useNewUrlParser: true, 
        
        useUnifiedTopology: true 
        
        }, err => {
        if(err) throw err;
        console.log('Connected to MongoDB!!!')
        }); 
  
  module.exports = mongoose;