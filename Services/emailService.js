const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    service: 'Gmail',
    auth: {
      user: 'bulbogc@gmail.com', 
      pass: 'amwu sigc xbcd znwa ' 
    }
  });

const sendRecoveryTokenByEmail = async  (email, token) => {
    const mailOptions = {
      from: 'bulbogc@gmail.com', 
      to: email, 
      subject: 'Recuperação de conta',
      text: "Hello world?", 
      html: `<p>Seu token de recuperação é: ${token}</p>`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erro ao enviar e-mail de recuperação:', error);
      } else {
        console.log('E-mail de recuperação enviado com sucesso:', info.response);
      }
    });
  };
 


  module.exports = {
    sendRecoveryTokenByEmail
}