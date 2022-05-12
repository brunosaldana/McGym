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
app.use(require("./routes/mcgym.routes"));
app.use(require("./routes/cliente.routes"));
app.use(require("./routes/monitor.routes"));
app.use(require("./routes/tarea.routes"));
app.use(require("./routes/login.routes"));
app.use(require("./routes/actividad.routes"));
app.use(require("./routes/misActividades.routes"));


module.exports = app;
