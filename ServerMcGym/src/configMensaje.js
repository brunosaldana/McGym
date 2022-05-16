const nodemailer = require(nodemailer);


module.exports = (formulario) => {


 var transporter = nodemailer.createTransport({
 service: gmail,
 auth: {
 user: 'brsase@fp.insjoaquimmir.cat',
 pass: 'mati1234'
 }
 });

const mailOptions = {
 from: `”${formulario.nombre} 👻” <${formulario.email}>`,
 to: 'dudo@fp.insjoaquimmir.com',
 subject: 'prueba',
 html: ' Prueba'
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}
