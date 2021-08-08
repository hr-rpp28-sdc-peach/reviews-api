const config = require('../config.js');
const { Pool } = require('pg');
const pool = new Pool(config.DBconnect);

module.exports.getReviews = (options, callback) => {
  var revData;
  var startIndex = (options.page - 1) * options.count;
  var sliceAt = startIndex + options.count;
  var orderBy = '';

  if (options.sort === 'helpful') {
    orderBy = 'ORDER BY helpfulness DESC'
  }

  if (options.sort === 'date') {
    orderBy = 'ORDER BY add_date DESC'
  }

  if (options.sort === 'relevant') {
    orderBy = 'ORDER BY helpfulness DESC, add_date DESC'
  }

  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM reviews WHERE product_id = ${options.product_id} ${orderBy}`, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  }).then((results) => {
    revData = results.rows.slice(startIndex, sliceAt);
    var photoArr = [];

    revData.forEach((row) => {
      photoArr.push(new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM reviews_photos WHERE review_id = ${row.id}`, (err, photos) => {
          if (err) {
            reject(err);
          } else {
            resolve(photos.rows);
          }
        });
      }));
    });

    return Promise.all(photoArr);

  }).then((photoArr) => {

    for (var i = 0; i < photoArr.length; i++) {
      revData[i].photos = photoArr[i];
    }

    callback(null, revData);
  }).catch((err) => {
    callback(err);
  });
}

module.exports.addReview = (options, callback) => {
  var queryString = `INSERT INTO reviews (product_id, rating, add_date, summary, body, recommended, reviewer_name, reviewer_email) VALUES (${options.product_id}, ${options.rating}, current_timestamp, $$${options.summary}$$, $$${options.body}$$, ${options.recommend}, $$${options.name}$$, $$${options.email}$$)RETURNING id`;
  var reviewId = null;

  return new Promise((resolve, reject) => {
    pool.query(queryString, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        resolve(results);
      }
    });
  }).then((results) => {
    reviewId = results.rows[0].id;
    var photos = options.photos;

    photos.map((photo) => {
      return new Promise((resolve, reject) => {
        var queryString = `INSERT INTO reviews_photos (review_id, photo_url) VALUES (${results.rows[0].id}, $$${photo}$$)`;
        pool.query(queryString, (error, results) => {
          if (error) {
            console.log(error);
          } else {
            resolve(results);
          }
        });
    });
  });
  return Promise.all(photos);
  }).then((photoResults) => {
    var characteristics = options.characteristics;
    var characteristicArr = [];

    for (var key in characteristics) {
      console.log(key);
      characteristicArr.push(new Promise((resolve, reject) => {
        var charQueryString = `INSERT INTO characteristics_reviews (characteristic_id, review_id, characteristic_value) VALUES (${key}, ${reviewId}, ${characteristics[key]})`;
        console.log(charQueryString);
        pool.query(charQueryString, (error, results) => {
          if (error) {
            console.log(error);
          } else {
            resolve(results);
          }
        });
      })
    );
    console.log(characteristicArr);
  }
  return Promise.all(characteristicArr);
  }).then((results) => {
    callback(null, results);
  }).catch((error) => {
    callback(error);
  });
}

module.exports.report = (options, callback) => {
  pool.query(`UPDATE reviews SET reported = true WHERE id = ${options.review_id}`, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
}

module.exports.helpful = (options, callback) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT helpfulness FROM reviews WHERE id = ${options.review_id}`, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  }).then((helpfulness) => {
    console.log(helpfulness);
    pool.query(`UPDATE reviews SET helpfulness = ${helpfulness[0].helpfulness + 1} WHERE id = ${options.review_id}`, (error, results) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  })
}