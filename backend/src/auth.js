var passport = require('passport');
var LocalStrategy = require('passport-local');
const connectionMYSQL = require('./mysqlconfig');

function verify(req, username, password, cb) {
    /*db.get('SELECT rowid AS id, * FROM users WHERE username = ?', [username], function (err, row) {
        if (err) { return cb(err); }
        if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

        crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function (err, hashedPassword) {
            if (err) { return cb(err); }
            if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
                return cb(null, false, { message: 'Incorrect username or password.' });
            }
            return cb(null, row);
        });
    });*/

    /*connectionMYSQL.query("CALL login(?,?)", [req.body.username, req.body.password], (err, result) => {
        if (err) return cb(err);
        else return cb(null, result[0]);
    })*/
    console.log("verify ", req.body);
    //req.body.username
    //req.body.password
    cb(null, { id: Math.E, username: "mannulus", role: "admin" });
}

passport.use(new LocalStrategy({ passReqToCallback: true }, verify));

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (user, cb) {
    cb(null, user);
});

module.exports = passport;