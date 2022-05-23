const { request, response } = require("express");
const nodeMailer = require("nodemailer");
const enlace = "http://157.90.225.116:4200/forgot2/";
var jwt = require("jsonwebtoken");
const Token = require("../models/token");
const token = {};

token.envioCorreo = (req = request, res = response) => {
  let body = req.body;
  const accessTokenSecret = "youraccesstokensecret";
  var accessToken = jwt.sign({ email: req.body.email }, accessTokenSecret);
  console.log("emailcito");
  let config = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: "587",
    auth: {
      user: "Fit.mcgym@gmail.com",
      pass: "Hola1234",
    },
  });

  const opciones = {
    from: "Mcgym",
    subject: "Email de recuperación de contraseña McGym. ",
    to: body.email,
    text:
      "Estimado cliente. " +
<<<<<<< HEAD
      "Hemos recibido un correo en el que sugiere un pequenio cambio de contraseña. " +
=======
      "Hemos recibido un correo en el que sugire un pequajsvdjabsdabsdjaeño cambio de contraseña. " +
>>>>>>> 650f7874264117c4c9ff399490af30e068678035
      " En este enlace podrás hacerlo: " +
      enlace +
      accessToken,
  };
  config.sendMail(opciones, function (error, result) {
    if (error) return res.json({ ok: false, msg: error });

    return res.json({
      ok: true,
      msg: result,
    });
  });
};

// token.createToken = async (req, res, next) => {
//   console.log("tokencito");
//   const token = new Token({
//     token: this.accessToken,
//     email: req.body.email,
//   });
//   await token.save();
//   res.json({ status: "Token creado" });
// };

module.exports = token;
