const config = require('../config.js');
const { Pool } = require('pg');
const pool = new Pool(config.DBconnect);

module.exports.getReviews = (options, callback) => {
  var revData;

  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM reviews WHERE product_id = ${options.product_id}`, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  }).then((results) => {
    revData = results.rows;
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
    console.log('photoArr');
    console.log(photoArr);
    console.log('revData');
    console.log(revData);

    for (var i = 0; i < photoArr.length; i++) {
      revData[i].photos = photoArr[i];
    }

    callback(null, revData);
  }).catch((err) => {
    callback(err);
  });
}