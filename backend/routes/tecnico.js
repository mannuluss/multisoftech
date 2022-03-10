var { Router } = require('express');
var connectionMYSQL = require("../src/mysqlconfig");
var router = Router();

//crear detalles del dispositivo
router.post('/createDetalles', function (req, res, next) {
    var paramsproperty = `${req.body.idDispositivo},"${req.body.desc}",${req.body.idAccion}`;
    connectionMYSQL.query(`CALL crearDetalle(${paramsproperty})`, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
});


//registro de lo accion echa en el dispositivo
//recibe tres parametros en el body (tecnico, accion, solicitud)
// router.post('/crearAcciones', function (req, res) {
//     console.log(req.body)
//     const { tecnico, accion, solicitud } = req.body;
//     connectionMYSQL.query("CALL crearAcciones()", function (err, result) {
//         if (err) throw err;
//         res.send(result)
//     });
// });

//muestra cada una de las acciones por el tecnico

//cuales marcas son las ingresadas a mantenimiento de mayor a menor

//que producto se usa para cada accion



module.exports = router;