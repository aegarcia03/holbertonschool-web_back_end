const express = require('express');


const app = express();
const PORT = 1245;

const routes = require('./routes/index.js');

app.use('/',routes);

app.listen(PORT);

module.exports = app;
