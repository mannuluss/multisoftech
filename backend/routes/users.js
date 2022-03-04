var { Router } = require('express');
var connectionMYSQL = require("../src/mysqlconfig")
var router = Router();


router.get('/getall', function (req, res, next) {
  connectionMYSQL.query("CALL GetAllBooks()", function (err, result) {
    if (err) throw err;
    res.send(result[0])
  });
});

//crear solicitud de dispositivo
router.post('/solicitud', function (req, res, next) {
  connectionMYSQL.query("CALL GetAllBooks()", function (err, result) {
    if (err) throw err;
    res.send(result[0])
  });
});

//crear dispositivo en la lista de dispositivos
router.post('/create/dispositivo', function (req, res, next) {
  connectionMYSQL.query("CALL GetAllBooks()", function (err, result) {
    if (err) throw err;
    res.send(result[0])
  });
});


module.exports = router;
