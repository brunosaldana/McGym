const Micarrito = require("../models/carrito");

const micarrito = {};



micarrito.getproducts = async (req, res, next) => {
  const productos = await Micarrito.find();
  console.log(res)
  res.json(productos);
};

micarrito.createMicarrito = async (req, res, next) => {
  const micarrito = new Micarrito({
    name: req.body.name,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    cliId: req.params.id,
  });
  await micarrito.save();
  res.json({ status: "micarrito created" });
};

micarrito.deleteMicarrito= async (req, res, next) => {
  await Micarrito.findByIdAndRemove(req.params.id); 
  res.json({ status: "reserva Deleted" });
};


module.exports = micarrito;



