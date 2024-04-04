'use strict';

const logger = (req,res,next) => {
    console.log('logger.js: Request Method: ' + req.method);
    console.log('logger.js: Request Path: ' + req.path);
    next();
}

module.exports = logger;