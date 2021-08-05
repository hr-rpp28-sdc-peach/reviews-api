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

module.exports.report = (options, callback) => {
  pool.query(`UPDATE reviews SET reported = true WHERE id = ${options.review_id}`, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
}