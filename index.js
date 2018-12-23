'use strict';

const mongoose = require('mongoose');
const server = require('./api/server');
const { PORT, DB_URI } = require('./api/utils/constants');

await mongoose.connect(DB_URI)

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    console.log(`Database Connected at ${DB_URI}`)
});
