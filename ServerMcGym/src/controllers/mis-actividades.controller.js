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

reserva.deleteReserva= async (req, res, next) => {
  await Reserva.findByIdAndRemove(req.params.id); 
  res.json({ status: "reserva Deleted" });
};


module.exports = reserva;



