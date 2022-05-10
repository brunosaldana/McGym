const Cliente = require("../models/clientes");

const login = {};

login.getsLogin = async (req, res) => {
  try {
    const userExists = await Cliente.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (userExists) {
      res.json(userExists);
      console.log("user exists");
    } else {
      res.status(401).send(false);
    }
  } catch {
    console.log(error);
  }
};

login.getsId = async (req, res) => {
  try {
    const IdExists = await Cliente.findOne({ _id: req.body._id });
    if (IdExists) {
      res.json(IdExists);
      console.log("entro en id exists");
    } else {
      res.status(401).send(false);
    }
  } catch {
    console.log(error);
  }
};

module.exports = login;
