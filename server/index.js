const app = require('./app.js');
const config = require('../config.js');
let port = config.PORT;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});