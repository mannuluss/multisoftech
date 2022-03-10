var passport = require('passport');
var LocalStrategy = require('passport-local');
const connectionMYSQL = require('./mysqlconfig');
const bcrypt = require("bcrypt")


function encryptPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12));
};

function comparePassword(tocompare, password) {
    return bcrypt.compareSync(tocompare, password);
};

function verify(req, email, password, cb) {
    //req.body.email
    //req.body.password
    connectionMYSQL.query(`SELECT * FROM cliente where email = "${email}";`, (err, result) => {
        if (err) return cb(err);
        if (comparePassword(password, result[0].contrasena))
            cb(null, { id: result[0].id_cliente, email: result[0].email, role: "admin" });
        else return cb(null, { msj: 'Incorrect username or password.' });
    })
}

passport.use(new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'email',
    passwordField: 'password'
}, verify));

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (user, cb) {
    cb(null, user);
});

module.exports = passport;
module.exports.encryptPassword = encryptPassword;