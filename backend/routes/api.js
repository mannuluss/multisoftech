var { Router } = require('express');
var connectionMYSQL = require("../src/mysqlconfig")
var router = Router();
var passport = require('passport');
const url = require('url');
const { encryptPassword } = require('../src/auth');

//crear detalles del dispositivo
router.post('/createDetalle', function (req, res, next) {
    var paramsproperty = `${req.body.idDispositivo},"${req.body.desc}",${req.body.idAccion}`;
    connectionMYSQL.query(`CALL crearDetalle(${paramsproperty})`, function (err, result) {
        if (err) return next(err);
        res.send({ id: result[0][0].Identity })
    });
});

//obtener las solicitudes de un usuario o un tecnico
router.get('/solicitudes', function (req, res, next) {
    let role = req.query.role == "tecnico" ? "Tecnico" : "Cliente";
    connectionMYSQL.query(`CALL obtenerSolicitud${role}(${req.query.id})`, function (err, result) {
        if (err) return next(err);
        let resultado = result[0].map(value => { value.estado_solicitud = value.estado_solicitud == 0 ? "recibido" : "finalizado"; return value; })
        res.send(resultado)
    });
});

//crear dispositivo en la lista de dispositivos
router.post('/createDispositivo', function (req, res, next) {
    var paramsproperty = `${req.body.nserie},${req.body.idcliente},"${req.body.specs}","${req.body.tipo_device}","${req.body.ref}","${req.body.maker}"`;
    connectionMYSQL.query(`CALL crearDispositivo(${paramsproperty})`, function (err, result) {
        if (err) return next(err);
        res.send({ id: result[0][0].Identity  })
    });
});

//crear solicitud
router.post('/createSolicitud', function (req, res, next) {
    //consulta de los tecnicos para asignar al primero que este desocupado o tenga menos cosas por hacer
    connectionMYSQL.query("SELECT * from personal");
    var idtecnico = 1
    var state = 0 //estado inicial (en revision)
    //connectionMYSQL.ParamsProcedure(req.body, ["state","idcliente", "iddetalle", "idtecnico", "date"])
    var paramsproperty = `"${state}","${req.body.idcliente}","${req.body.iddetalle}","${idtecnico}"`;
    connectionMYSQL.query(`CALL crearSolicitud(${paramsproperty})`, function (err, result) {
        if (err) return next(err);
        res.send({ id: result[0][0].Identity  })
    });
});

//login
//parametros de la query {email, password}
router.post('/login', function (req, res, done) {
    passport.authenticate('local', { failureRedirect: '/login', failureMessage: true },
        function (err, user, info) {
            if (err) console.log(err)
            //console.log("post send ", user)
            res.send(user);
            //res.send(user).redirect('/tecnico');
            //res.redirect(url.format({ pathname: user.role == "admin" ? "/tecnico" : "/usuario", query: user }));
        })(req, res, done);
});

router.post('/signup', (req, res) => {
    let password = encryptPassword(req.body.password)
    var pwd = encryptPassword(req.body.password);
    var paramsquery = `"${req.body.name}","${req.body.surname}","${req.body.email}","${pwd}"`;
    connectionMYSQL.query(`CALL crearCliente(${paramsquery})`, function (err, result) {
        res.send({ err: err, result: result });
    });
});

router.post('/logout', function (req, res, next) {
    //req.logout();
    res.send({ state: "ok" });
    //res.redirect('/');
});

module.exports = router;