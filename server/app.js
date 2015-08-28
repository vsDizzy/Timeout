/// <reference path="typings/tsd.d.ts" />
'use strict';

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  console.log('get');
  setTimeout(function () {
    console.log('ok')
    res.send('ok');
  }, 300000);
});
var server = app.listen(4000, function () {
  var address = server.address();
  console.log('Server started at', address.address, address.port);
});

var misc = require('../misc');

function timer() {
  console.info(misc.watch.toString());
}

timer();
setInterval(timer, 5000)