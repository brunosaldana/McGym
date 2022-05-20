const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);


// Middlewares
app.use(cors()); 
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Routes
app.use(require("./routes/correo.routes"));
app.use(require("./routes/carrito.routes"));
app.use(require("./routes/mcgym.routes"));
app.use(require("./routes/cliente.routes"));
app.use(require("./routes/monitor.routes"));
app.use(require("./routes/tecnico.routes"));
app.use(require("./routes/tarea.routes"));
app.use(require("./routes/vistatarea.routes"));
app.use(require("./routes/login.routes"));
app.use(require("./routes/actividad.routes"));
app.use(require("./routes/misActividades.routes"));
app.use(require("./routes/emplog.routes"));


module.exports = app;
