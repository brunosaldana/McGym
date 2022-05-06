const Actividad = require("../models/actividades");

const actividad = {};

actividad.getActividades = async (req, res, next) => {
  const actividades = await Actividad.find();
  res.json(actividades);
};

actividad.createActividad = async (req, res, next) => {
  var result = await getActividadmail(req)
  if(result){
    res.send(true) 
 
  } else {
    const actividad = new Actividad({
      name: req.body.name, 
      impartemon: req.body.impartemon, 
      dia: req.body.dia,
      hora: req.body.hora,
      duracion: req.body.duracion, 
    });
    await actividad.save();
    res.json({ status: "Employee created" });

  }
}; 


actividad.getActividad = async (req, res, next) => {
  const { id } = req.params;
  const actividad = await Actividad.findById(id);
  res.json(actividad);
};

const getActividadmail = async (req, res) => {
  const actividad = await Actividad.findOne( {name: req.body.name} );
  if(actividad){
    return true
  } else {
    return false
  }
};


actividad.editActividad = async (req, res, next) => {
  const { id } = req.params;
  await Actividad.findByIdAndUpdate(id, {$set: req.body});
  res.json({ status: "Actividad Updated" });
};

actividad.deleteActividad= async (req, res, next) => {
  await Actividad.findByIdAndRemove(req.params.id); 
  res.json({ status: "Actividad Deleted" });
};


module.exports = actividad; 