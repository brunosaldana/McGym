const Cliente = require("../models/clientes");

const cliente = {};

cliente.getClientes = async (req, res, next) => {
  const clientes = await Cliente.find();
  res.json(clientes);
};

cliente.createCliente = async (req, res, next) => {
  var result = await getClientemail(req)
  if(result){
    res.send(true) 
 
  } else {
    const cliente = new Cliente({
      name: req.body.name, 
      apellido: req.body.apellido, 
      telefono: req.body.telefono,
      dni: req.body.dni,
      datanaixement: req.body.datanaixement, 
      email: req.body.email,
      password: req.body.password,
    });
    await cliente.save();
    res.json({ status: "Employee created" });

  }
}; 


cliente.getCliente = async (req, res, next) => {
  const { id } = req.params;
  const cliente = await Cliente.findById(id);
  res.json(cliente);
};

const getClientemail = async (req, res) => {
  const cliente = await Cliente.findOne( {email: req.body.email} );
  if(cliente){
    return true
  } else {
    return false
  }
};


cliente.editCliente = async (req, res, next) => {
  const { id } = req.params;
  await Cliente.findByIdAndUpdate(id, {$set: req.body});
  res.json({ status: "Cliente Updated" });
};

cliente.deleteCliente= async (req, res, next) => {
  await Cliente.findByIdAndRemove(req.params.id); 
  res.json({ status: "Cliente Deleted" });
};


module.exports = cliente; 