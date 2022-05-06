const Cliente = require("../models/clientes");

const login = {};

login.getsLogin = async (req, res) => {
  try{
    const userExists = await Cliente.findOne({email: req.body.email, password: req.body.password});
    if(userExists){
      res.json(userExists)
    }
    else{
      res.status(401).send(false)
    }
  }
  catch{
    console.log(error)
  }
};



module.exports = login; 