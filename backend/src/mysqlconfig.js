const mysql = require("mysql");
var connectionMYSQL = mysql.createConnection(process.env.MYSQL_URI_AWS);
connectionMYSQL.connect(function (err) {
    if (err) throw err;
    console.log("Connected with MYSQL!");
});

/**
 * crea un string con los parametros para la llamada de un procedemiento
 */
function ParamsProcedure(body, params){
    str = ""
    params.forEach((element,index) => {
        str += `"${body[element]}"`
        if (index < params.length-1)
            str += ","
    });
    return str;
}

module.exports = connectionMYSQL;
module.exports.ParamsProcedure = ParamsProcedure; 