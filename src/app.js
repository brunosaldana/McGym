const express = require ('express')
const morgan = require('morgan')
const { propfind } = require('./routes/empleados.routes')

const app = express();


app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))
app.use(require('./routes/empleados.routes'))



module.exports = app;
