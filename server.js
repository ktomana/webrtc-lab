var m_static = require('node-static');
var m_http = require('http');

var m_file = new(m_static.Server)();

var m_app = m_http.createServer(function(req, res) {
  m_file.serve(req, res);
})
  .listen(8080);
