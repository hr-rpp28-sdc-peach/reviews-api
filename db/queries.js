const config = require('../config.js');
const { Pool } = require('pg');
const pool = new Pool(config.DBconnect);

/////GET REVIEWS FOR ONE PRODUCT
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
        callback(error);
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
            callback(err);
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

/////GET METADATA FOR THE REVIEWS FROM ONE PRODUCT
module.exports.getMeta = (options, callback) => {
  var response = {
    'product_id': options.product_id,
    'ratings': {},
    'recommend': {
      true: 0,
      false: 0
    },
    'characteristics': {}
  };

  var charStorage = {};

  var reviewIdStatements = [];

  pool.query(`SELECT * FROM reviews WHERE product_id = ${options.product_id}`)
  .then((results) => {
    results.rows.forEach((row) => {
      reviewIdStatements.push(`review_id = ${row.id}`);
      //set rating on the response
      if (response.ratings[row.rating] === undefined) {
        response.ratings[row.rating] = 1;
      } else {
        response.ratings[row.rating]++;
      }
      //set recommend on the response
      if (row.recommended === 't') {
        response.recommend[true]++;
      } else {
        response.recommend[false]++;
      }
    });
    return results.rows;
  }).then((reviewResults) => {
    return pool.query(`SELECT * FROM characteristics WHERE product_id = ${options.product_id}`);
  }).then((charResults) => {
    charResults.rows.forEach((row) => {
      charStorage[row.id] = {
        'name': row.characterisitc_name,
        'values': []
      }
    });
    if (reviewIdStatements.length === 0) {
      return [];
    } else {
      var reviewIdString = reviewIdStatements.join(' OR ');
      var queryString = 'SELECT * FROM characteristics_reviews WHERE ' + reviewIdString;
      return pool.query(queryString);
    }
  }).then((charValResults) => {
    if (charValResults.length > 0) {
      charValResults.rows.forEach((row) => {
        charStorage[row.characteristic_id].values.push(row.characteristic_value);
      });
    }
    for (var key in charStorage) {
      var total = 0;
      var count = 0;
      charStorage[key].values.forEach((value) => {
        total += value;
        count++
      });
      var avg;
      if (count === 0) {
        avg = null;
      } else {
        avg = (total / count).toFixed(4);
      }
      var charName = charStorage[key].name;
      response.characteristics[charName] = {
        'id': key,
        'value': avg
      }
    }
    callback(null, response);
  }).catch((error) => {
    callback(error);
  });
}

/////ADD A REVIEW
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
      characteristicArr.push(new Promise((resolve, reject) => {
        var charQueryString = `INSERT INTO characteristics_reviews (characteristic_id, review_id, characteristic_value) VALUES (${key}, ${reviewId}, ${characteristics[key]})`;
        pool.query(charQueryString, (error, results) => {
          if (error) {
            console.log(error);
          } else {
            resolve(results);
          }
        });
      })
    );
  }
  return Promise.all(characteristicArr);
  }).then((results) => {
    callback(null, results);
  }).catch((error) => {
    callback(error);
  });
}

/////REPORT A REVIEW
module.exports.report = (options, callback) => {
  pool.query(`UPDATE reviews SET reported = true WHERE id = ${options.review_id}`, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
}

/////MARK A REVIEW AS HELPFUL
module.exports.helpful = (options, callback) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT helpfulness FROM reviews WHERE id = ${options.review_id}`, (error, results) => {
      if (error) {
        callback(error);
      } else {
        resolve(results.rows);
      }
    });
  }).then((helpfulness) => {
    pool.query(`UPDATE reviews SET helpfulness = ${helpfulness[0].helpfulness + 1} WHERE id = ${options.review_id}`, (error, results) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  })
}