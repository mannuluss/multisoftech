/**
 * Module dependencies.
 */
require('dotenv').config();//configura las variables de entorno (.env)
var app = require('./app');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port,null,()=>{
    console.log("[*] API start in http://locahost:"+port)
});