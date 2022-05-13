const {request, response} = require ('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req=request,res=response) =>{
    let body = req.body;


    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: '587',
        auth:{
            user:'brsase@fp.insjoaquimmir.cat',
            pass: 'mati1234'
        }
    });


    const opciones = {
        from: 'Mcgym',
        subject: body.asunto,
        to: body.email,
        text: body.mensaje

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