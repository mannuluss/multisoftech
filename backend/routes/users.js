var { Router } = require('express');
var connectionMYSQL = require("../src/mysqlconfig")
var router = Router();


router.get('/getall', function (req, res, next) {
  connectionMYSQL.query("CALL getall()", function (err, result) {
    if (err) throw err;
    res.send(result[0])
  });
});


module.exports = router;
