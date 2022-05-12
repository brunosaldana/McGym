const vistaTarea = require("../models/vistatareas");

const vistatarea = {};

    vistatarea.getvistaTareas = async (req, res, next) => {
        const vistatareas = await vistaTarea.find();
        res.json(vistatareas);
    };




module.exports = vistatarea; 