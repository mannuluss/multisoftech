const mysql = require("mysql");
var connectionMYSQL = mysql.createConnection(process.env.MYSQL_URI);
// connectionMYSQL.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected with MYSQL!");
// });

module.exports = connectionMYSQL;