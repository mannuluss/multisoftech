const mysql = require("mysql");
var connectionMYSQL = mysql.createConnection(process.env.MYSQL_URI_AWS);
connectionMYSQL.connect(function (err) {
    if (err) throw err;
    console.log("Connected with MYSQL!");
});

module.exports = connectionMYSQL;