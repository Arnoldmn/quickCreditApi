const express = require('express');
const app = express();

app.get('/', function (res, req) {
    res.send('Hello world');
})

app.get('/api/v1/signup', function () {

});

app.get('/api/v1/signin', function () {

});

app.get('./api/v1/signin:id', function () {

});

const server = app.listen(3000, function () {
    console.log('App running on port 3000');
});

module.exports = server;