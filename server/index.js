const express = require('express');
const bodyParser = require('body-parser');
let app = express();
// const db = require('../database/index.js');
const config = require('../config.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/reviews', (req, res) => {
  res.send('Hello World!')
});

app.get('/reviews/meta', (req, res) => {
  res.send('Hello World!')
});

app.post('/reviews', (req, res) => {
  res.send('Hello World!')
});

app.put('/reviews', (req, res) => {
  console.log(req);
  res.send('Hello World!');
  // PUT /reviews/:review_id/helpful
  // PUT /reviews/:review_id/report
});

let port = config.PORT;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});