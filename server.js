'use strict'

var connect = require('connect');
var serveStatic = require('serve-static');

var port = process.env.NODE_ENV === 'development' ? 3000 : 80;

connect()
  .use(serveStatic(__dirname))
  .listen(port, function(){
    console.log('Server running on', port);
})
