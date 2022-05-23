const Producto = require("../models/miCarrito");

const producto = {};

producto.getMisProductos = async (req, res) => {
  const productos = await Producto.find({ cliId: req.params.id });
  console.log(productos);
  res.json(productos);
};

producto.add = async (req, res, next) => {
  const reserva = new Producto({
    name: req.body.name,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    cliId: req.params.id,
  });
  await reserva.save();
  res.json({ status: "producto created" });
};

producto.deleteProducto= async (req, res, next) => {
  await Producto.findByIdAndRemove(req.params.id);
  res.json({ status: "Producto Deleted" });
};

// reserva.putReserva = async (req, res, next) => {
//   const { id } = req.params;
//   await Reserva.findByIdAndUpdate(id, {$set: req.body});
//   res.json({ status: "Reserva Updated" });
// };

// reserva.addReserva = async (req, res, next) => {
//     const reserva = new Actividad({
//       name: req.body.name,
//       impartemon: req.body.impartemon,
//       dia: req.body.dia,
//       hora: req.body.hora,
//       duracion: req.body.duracion,
//     });
//     await reserva.save();
//     res.json({ status: "reserva created" });
// };

module.exports = producto;
