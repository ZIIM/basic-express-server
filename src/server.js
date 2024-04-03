'use strict'

const express = require('express');
const cors = require('cors');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');

const app = express();
app.use(cors());

app.get('/person', , (req, res, next) =>{
    console.log('message from validator', ,req.);
    res.send('string goes here ');
})

app.use(serverError);
app.use(notFound);

module.exports = app;