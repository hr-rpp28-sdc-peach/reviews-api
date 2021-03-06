const express = require('express');

const bodyParser = require('body-parser');
const db = require('../db/queries.js');
let app = express();
const ExpressRedisCache = require('express-redis-cache');
const reviewCache = ExpressRedisCache({});
const metaCache = ExpressRedisCache({});
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/reviews', reviewCache.route(), (req, res) => {
  var options = req.query;
  if (options.page === undefined) {
    options.page = 1;
  }
  if (options.count === undefined) {
    options.count = 5;
  }
  db.getReviews(options, (error, results) => {
    if (error) {
      res.status(502).send(error);
    } else {

      var response  = {
        'product': req.query.product_id.toString(),
        'page': (options.page - 1) * options.count,
        'count': options.count,
        'results': []
      };

      results.forEach((row) => {
        if (row.reported === false) {

          var revResponse = row.response;
          if (revResponse === 'null') {
            revResponse = '';
          }
          var revDate = new Date(row.add_date).toISOString();

          response.results.push({
            'review_id': row.id,
            'rating': row.rating,
            'summary': row.summary,
            'recommend': row.recommended,
            'response': revResponse,
            'body': row.body,
            'date': revDate,
            'reviewer_name': row.reviewer_name,
            'helpfulness': row.helpfulness,
            'photos': row.photos
          });
        }
      });
      res.status(200).send(response);
    }
  })
});

app.get('/reviews/meta', metaCache.route(), (req, res) => {
  db.getMeta(req.query, (error, results) => {
    if (error) {
      res.status(502).send(error);
    } else {
      res.status(200).send(results);
    }
  });

});

app.post('/reviews', (req, res) => {
  // console.log(req.body);
  db.addReview(req.body, (error, results) => {
    if (error) {
      res.status(502).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  db.helpful(req.params, (error, results) => {
    if (error) {
      res.status(502).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

app.put('/reviews/:review_id/report', (req, res) => {
  db.report(req.params, (error, results) => {
    if (error) {
      res.status(502).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = app;