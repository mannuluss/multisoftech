var { Router } = require('express');
var connectionMYSQL = require("../src/mysqlconfig")
var router = Router();

//creacion de usuario
router.get('/createuser', function (req, res, next) {
    var params = req.query;
    connectionMYSQL.query(`CALL Login(${params.user},${params.password})`, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
});

//solicitudes que hay y el tenico encargado

module.exports = router;