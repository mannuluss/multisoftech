require('dotenv').config();//configura las variables de entorno (.env)
//var app = require('./app');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var authpassport = require("./auth")

var app = express();

function errorHandler(err, req, res, next) {
    res.status(500);
    res.send({ error: err });
}

app.use(errorHandler);
app.use(logger('dev'));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(authpassport.initialize())
//app.use(authpassport.session())

app.use('public', express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../views')));


//Rutas de la API
var usersRouter = require('../routes/users');
var apiRouter = require("../routes/api");
var tenicoRouter = require("../routes/tecnico")
var adminRouter = require("../routes/admin")

app.use('/api', apiRouter);
app.use('/api/admin', adminRouter);
app.use('/api/users', usersRouter);
app.use('/api/tecnico', tenicoRouter);

//configurando rutas del servidor web
app.get(["/tecnico", "/usuario", "/usuario/registro", "/tecnico/registro"], (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

//iniciando servicio
const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {
    console.log("[*] API start in http://locahost:" + port)
});