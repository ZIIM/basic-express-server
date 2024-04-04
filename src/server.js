'use strict'

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const logger = require('./middelware/logger');
const validator = require('./middelware/validator');
const handlePerson = require('./handlePerson');
const errorHandler = require('./error-handlers/errorHandler');

app.use(logger); // the log mid
app.use(validator); // validator mid

app.get('/person', handlePerson)
app.use(errorHandler);

module.exports = {
    app,
    start: (port) => {
      app.listen(port, () => {
        console.log('Server is running!' + port);
      });
    }
  };