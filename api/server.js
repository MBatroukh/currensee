'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/groups', require('./routes/groups'));
// app.use('/items', require('./routes/items').router);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        const errors = [
            { message: 'unauthorized' },
        ];

        res.status(401).json({ errors });
    }
});

module.exports = app;
