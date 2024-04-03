'use strict';

require('dotenv').config();


// start the server here!!
const app = require('./src/server_start.js');
const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log('LISTENING');
});