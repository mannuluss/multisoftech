var { Router } = require('express');
var connectionMYSQL = require("../src/mysqlconfig")
var router = Router();

//crear registro de dispositivo

//registro de lo accion echa en el dispositivo
//recibe tres parametros en el body (tecnico, accion, solicitud)
router.post('/acciones', function (req, res) {
    console.log(req.body)
    const { tecnico, accion, solicitud } = req.body;
    // connectionMYSQL.query("CALL GetAllBooks()", function (err, result) {
    //     if (err) throw err;
         res.send("aaa")
    // });
});

//muestra cada una de las acciones por el tecnico

//cuales marcas son las ingresadas a mantenimiento de mayor a menor

//que producto se usa para cada accion



module.exports = router;