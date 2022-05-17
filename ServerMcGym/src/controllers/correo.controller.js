const {request, response} = require ('express');
const nodeMailer = require('nodemailer');
const enlace = "http://localhost:4200/forgot2";

const envioCorreo = (req=request,res=response) =>{
    let body = req.body;


    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: '587',
        auth:{
            user:'fit.mcgym@gmail.com',
            pass: 'Hola1234'
        }
    });

    const opciones = {
        from: 'Mcgym',
        subject: "Email de recuperación de contraseña McGym. ",
        to: body.email,
        text: "Estimado cliente. " +
        "Hemos recibido un correo en el que sugiere un cambio de contraseña. " +
        " En este enlace podrás hacerlo: " + enlace

    };
    config.sendMail(opciones,function(error,result){
        if (error) return res.json({ok:false,msg:error});

        return res.json({
            ok:true,
            msg:result
        })
    })
}

module.exports={
    envioCorreo
}




