'use strict';

var http = require('http');

var req = http.request({ host: 'localhost', port: 4000, path: '/' }, function (res) {
  res.setTimeout(6000, function () {
    console.log('res timeout');
  });
  res.on('socket', function (socket) {
    res.connection.setTimeout(8000);
    socket.setTimeout(7000, function () {
      console.log('res socket timeout');
    });
  });
  var data = '';
  res.on('data', function (chunk) {
    data += chunk;
  });
  res.on('end', function () {
    console.log(res.statusCode, data);
  });
});
req.setTimeout(2000, function () {
  console.log('req timeout');
});
req.on('socket', function (socket) {
  req.connection.setTimeout(4000);
  socket.setTimeout(3000, function () {
    console.log('req socket timeout');
  });
});
req.on('error', function (err) {
  console.error(err);
});
req.end();

var misc = require('../misc');

function timer() {
  console.info(misc.watch.toString());
}

timer();
setInterval(timer, 5000)