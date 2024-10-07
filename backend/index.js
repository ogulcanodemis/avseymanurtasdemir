const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-mail', (req, res) => {
  const { to, subject, text } = req.body;

  // Nodemailer yapılandırması
  const transporter = nodemailer.createTransport({
    host: 'mail.avseymanurtasdemir.com',  // SMTP sunucu adresi
    port: 587,                  // SMTP portu (TLS için 587, SSL için 465)
    secure: false,              // TLS için false, SSL için true
    auth: {
      user: 'info@avseymanurtasdemir.com',   // Kurumsal e-posta adresi
      pass: 'zripNe;*3Nm.'  // Kurumsal e-posta şifresi
    },
    tls: {      
      rejectUnauthorized: false  // Self-signed sertifika sorunları varsa bu satır eklenebilir
    }
  });

  const mailOptions = {
    from: 'mail.avseymanurtasdemir.com',  // Gönderici adresi (kurumsal e-posta)
    to: to,                     // Alıcı adresi
    subject: subject,           // E-posta konusu
    text: text                  // E-posta içeriği
  };

  // Mail gönderme
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Hata: Mail gönderilemedi.');
    } else {
      console.log('Mail gönderildi: ' + info.response);
      res.status(200).send('Mail başarıyla gönderildi.');
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor.`);
});
