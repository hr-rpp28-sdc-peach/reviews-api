const config = require('../config.js');
const Pool = require('pg').Pool
const pool = new Pool(config.DBconnect);

const getReviews = (request, response) => {


  pool.query('SELECT * FROM reviews ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}