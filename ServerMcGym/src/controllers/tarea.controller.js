const Tarea = require("../models/tareas");

const tarea = {};

tarea.getTareas = async (req, res, next) => {
  const tareas = await Tarea.find();
  res.json(tareas);
};

  tarea.createTarea = async (req, res, next) => {
      const tarea = new Tarea({
        namemon: req.body.namemon,
        nametec: req.body.nametec,
        fecha: req.body.fecha,
        hora: req.body.hora,
        incidencia: req.body.incidencia
      });
      await tarea.save();
      res.json({ status: "Tarea created" });
  
    };


tarea.getTarea = async (req, res, next) => {
  const { id } = req.params;
  const tarea = await Tarea.findById(id);
  res.json(tarea);
};


const getTareamail = async (req, res) => {
  const tarea = await Tarea.findOne( {name: req.body.name} );
  if(tarea){
    return true
  } else {
    return false
  }
};


tarea.editTarea = async (req, res, next) => {
  const { id } = req.params;
  await Tarea.findByIdAndUpdate(id, {$set: req.body});
  res.json({ status: "Tarea Updated" });
};

tarea.deleteTarea = async (req, res, next) => {
  await Tarea.findByIdAndRemove(req.params.id); 
  res.json({ status: "Tarea Deleted" });
};


module.exports = tarea; 