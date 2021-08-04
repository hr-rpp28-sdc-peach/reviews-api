const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/queries.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/reviews', (req, res) => {
  var options = req.query;
  db.getReviews(options, (error, results) => {
    if (error) {
      res.status(502).send(error);
    } else {
      res.status(200).send(results.rows);
    }
  })
});

app.get('/reviews/meta', (req, res) => {
  res.send('Get request received at /reviews/meta')
});

app.post('/reviews', (req, res) => {
  res.send('Post request received at /reviews')
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  res.send('Put request received at /reviews/:review_id/helpful');
});

app.put('/reviews/:review_id/report', (req, res) => {
  res.send('Put request received at /reviews/:review_id/report');
});

module.exports = app;