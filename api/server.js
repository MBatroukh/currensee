'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/groups', require('./routes/groups'));
// app.use('/collectables', require('./routes/collectables'));

app.use((err, req, res, next) => {
    res.status(401).json({ err: err.message })
});


module.exports = app;
