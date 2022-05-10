const Reserva = require("../models/misActividades");

const reserva = {};



reserva.getMisActividades = async (req, res) => {
  const reservas = await Reserva.find({cliId: req.params.id});
  res.json(reservas);
};

reserva.createMisActividad = async (req, res, next) => {
  const reserva = new Reserva({
    name: req.body.name,
    impartemon: req.body.impartemon,
    dia: req.body.dia,
    hora: req.body.hora,
    duracion: req.body.duracion,
    cliId: req.params.id,
  });
  await reserva.save();
  res.json({ status: "reserva created" });
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

module.exports = reserva;



