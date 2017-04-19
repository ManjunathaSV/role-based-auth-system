'use strict';
const bodyParser = require('body-parser');
const express  = require('express');
const calls = require('./calls');
const config = require('../config/config.js');
const app = express();
const q = require('q');
const MongoService = require('./utils/mongodb-service.js');

app.use(bodyParser.json());

/**set seedData=true in the config file, will load the sample data into database **/
require('./utils/seed-sample-data.js')(config.seedData);

/**Sets up all the api calls**/
calls.setupCalls(app);

app.listen(config.port, config.host, function(){
  console.log('Started listening at '+config.host+' with port '+config.port);
})
module.exports = app;