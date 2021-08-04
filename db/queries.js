const config = require('../config.js');
const { Pool } = require('pg');
const pool = new Pool(config.DBconnect);

module.exports.getReviews = (options, callback) => {

  pool.query(`SELECT * FROM reviews WHERE product_id = ${options.product_id}`, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
}