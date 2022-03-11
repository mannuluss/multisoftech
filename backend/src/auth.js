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

function searchRoleUser(email, func) {
    connectionMYSQL.query(`SELECT * FROM cliente where email = "${email}";`, (err, result) => {
        console.log(result)
        if (result.length != 0)
            return func("usuario", err, result)
        else {
            connectionMYSQL.query(`SELECT * FROM personal where email = "${email}";`, (err, res) => {
                if (err) return func("err", err, res)
                if (res.length != 0)
                    return func("tecnico", err, res)
                else
                    return func("err", err, res)
            })
        }
    });
}

function verify(req, email, password, cb) {
    //req.body.email
    //req.body.password
    searchRoleUser(email, (role, err, result) => {
        if (err || role == "err") return cb(err);
        if (comparePassword(password, result[0].contrasena)) {
            let id = (role == "tecnico" ? result[0].id_personal:result[0].id_cliente)
            cb(null, { id: id, email: result[0].email, role: role });
        } else return cb(null, { msj: 'Incorrect username or password.' });
    });
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