const Carrito = require("../models/carrito");

const carrito = {};

carrito.getCarritos = async (req, res, next) => {
  const carrito = await Carrito.find();
  res.json(carrito);
};

carrito.createCarrito = async (req, res, next) => {
    const carrito = new Carrito({
      name: req.body.name, 
      descripcion: req.body.descripcion, 
      precio: req.body.precio, 


    });
    await carrito.save();
    res.json({ status: "Carrito creado" });
}; 


carrito.getCarrito = async (req, res, next) => {
  const { id } = req.params;
  const carrito = await Carrito.findById(id);
  res.json(carrito);
};


carrito.editCarrito = async (req, res, next) => {
  const { id } = req.params;
  await Carrito.findByIdAndUpdate(id, {$set: req.body});
  res.json({ status: "Carrito Updated" });
};

carrito.deleteCarrito= async (req, res, next) => {
  await Carrito.findByIdAndRemove(req.params.id); 
  res.json({ status: "Carrito Deleted" });
};


module.exports = carrito; 