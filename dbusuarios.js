var connection = require('./dbconfig');
const mysql = require('mysql');

async function getUsuarios(){
    try{
        let pool = await mysql.connect(connection);
        let usuarios = await pool.request().query("SELECT * FROM USUARIOS");
        return usuarios.recordsets;
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    getUsuarios: getUsuarios
}