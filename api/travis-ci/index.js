const express = require('express');
const app = express();

app.get('/', function (res, req) {
    res.send('Hello world');
})

const server = app.listen(3000, function () {
    console.log('App running on port 3000');
});

module.exports = server;