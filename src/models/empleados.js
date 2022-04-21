const { type } = require('express/lib/response')
const { Schema, model } = require('mongoose')

const empleadosSchema = new Schema({
    name : {type: String, required: true},
    ocupacion : {type: String, required: true},
    edad : {type: Number, required: true},
    dni : {type: Number, required: true},
    correo : {type: String, required: true},
    direccion : {type: String, required: true},
},{
    timestamps:true,
    versionKey: false,

})

module.exports = model ('empleados', empleadosSchema)