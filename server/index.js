const express = require('express')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { user, pass, service, foreward, from } = require('./emailConfig.js');
const app = express();
const port = 3000;

const transporter = nodemailer.createTransport({
  service,
  auth: { user, pass }
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('SMTP connected...');
  }
});

app.use(express.static('dist'))
  .use(bodyParser.json());

app.post('/contact', (req, res) => {
  let mailOptions = {
    from,
    to: foreward,
    subject: 'portfolio contact-me',
    text: `From: ${req.body.name}, ${req.body.email}, Message: ${req.body.message}`,
    html: `<h5>From</h5><p>${req.body.name}</p><h5>Reply</h5><p>${req.body.email}</p><h5>Message</h5><p>${req.body.message}</p>`
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send()
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));