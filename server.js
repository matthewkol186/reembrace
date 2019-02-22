const fs = require('fs')
let keys;

try {
    if (fs.existsSync('./playground/twilio/keys.js')) {
        keys = require('./playground/twilio/keys.js') // create a keys.js in same folder, populate with keys accordingly
    }
} catch(err) {
    keys = {
        accountSid: processs.env.twilioAccountSid,
        authToken: process.env.twilioAuthToken
    }
}

const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const port = process.env.PORT || 1337;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(port, () => {
  console.log('Express server listening on port ' + port);
});
