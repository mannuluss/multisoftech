var { Router } = require('express');
var connectionMYSQL = require("../src/mysqlconfig")
var router = Router();
var passport = require('passport');
const url = require('url');
const { encryptPassword } = require('../src/auth');


/*router.get('/login', function (req, res, next) {
    var params = req.query;
    connectionMYSQL.query(`CALL Login(${params.user},${params.password})`, function (err, result) {
        if (err) throw err;
        //res.send(result)
    });
});*/

//login
//parametros de la query {username, password}
router.post('/login', function (req, res, done) {
    passport.authenticate('local', {/*successReturnToOrRedirect: '/',*/failureRedirect: '/login', failureMessage: true },
        function (err, user, info) {
            console.log("post send ", user)
            res.send(user);
            //res.send(user).redirect('/tecnico');
            //res.redirect(url.format({ pathname: user.role == "admin" ? "/tecnico" : "/usuario", query: user }));
        })(req, res, done);
});

router.post('/signup', (req, res) => {
    let password = encryptPassword(req.body.password)
    connectionMYSQL.query(`INSERT INTO cliente (email,contrasena) VALUES ("${req.body.email}","${password}");`, function (err, result) {
        res.send({ err: err, result: result });
});
});

/* POST /logout
*/
router.post('/logout', function (req, res, next) {
    //req.logout();
    res.redirect('/');
});

module.exports = router;