var static = require('node-static');
var http = require('http');

var file = new(static.Server)();

var argv = [];
process.argv.forEach(function (val, index, array) {
  argv[index] = val;
});

var adres = '127.0.0.1'
if (argv.length > 2) {
  adres = argv[2]
}
console.log('adres '+ adres);

var app = http.createServer(function (req, res) {
  file.server(req, res);
})
  .listen(8081,adres);

var io = require('socket.io').listen(app);

io.sockets.on('connection', function (socket) {
  socket.on('komunikat', function (message) {
    socket.broadcast.emit('komunikat', message);
  });
});
