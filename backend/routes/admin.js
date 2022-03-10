var { Router } = require('express');
var connectionMYSQL = require("../src/mysqlconfig")
const { encryptPassword } = require("../src/auth")
var router = Router();

//creacion de usuario
router.post('/crearPersonal', function (req, res, next) {
    var pwd = encryptPassword(req.body.password);
    var paramsquery = `"${req.body.name}","${req.body.surname}","${req.body.email}","${pwd}"`;
    /*connectionMYSQL.query(`CALL crearCliente(${paramsquery})`, function (err, result) {
        if (err) throw err;
        res.send(result)
    });*/
});

//solicitudes que hay y el tenico encargado

module.exports = router;