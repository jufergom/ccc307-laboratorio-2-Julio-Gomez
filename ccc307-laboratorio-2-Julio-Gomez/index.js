var express = require('express');
var app = express();
var fetch = require('node-fetch');
let myPackage = require('experiencia-usuario-julio-gomez');

app.get('/get_users', function(req, res) {
    res.send('Look console');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))
});

app.get('/get_users_new', function (req, res) {
    res.send('Look console');
    myPackage();
});

app.listen(3001, function() {
    console.log('funciona');
});