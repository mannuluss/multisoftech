var { Router } = require('express');
var connectionMYSQL = require("../src/mysqlconfig")
var router = Router();
var passport = require('passport');
const url = require('url');


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

/* POST /logout
*/
router.post('/logout', function (req, res, next) {
    //req.logout();
    res.redirect('/');
});

module.exports = router;