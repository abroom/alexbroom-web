require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const morgan = require('morgan');
const path = require('path');
const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API, domain: process.env.MAILGUN_DOMAIN});

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Body Parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressSanitizer());

// Always return the main index.html, so react-router render the route in the client
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/contact', function(req, res) {
  if (!req.is('json')) {
    res.status(400).send('Bad Request');
    return;
  }

  var name = req.sanitize(req.body.name);
  var email = req.sanitize(req.body.email);
  var subject = req.sanitize(req.body.subject);
  var message = req.sanitize(req.body.message);

  if ((name === undefined) || (email === undefined) ||
      (subject === undefined) || (message === undefined)) {
    res.status(400).send('Bad Request');
    return;
  }

  var data = {
    to: 'contact@alexbroom.com',
    from: name + ' <' + email + '>',
    subject: subject,
    text: message
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.log('mailgun send error:\n' + error);
      res.status(400).send(error);
    } else {
      console.log(body);
      res.send('POST request to Contact');
    }
  });
});

module.exports = app;
