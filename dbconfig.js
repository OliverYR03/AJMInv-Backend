var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : '542345',
  database : 'ajminv'
});
 
connection.connect();

module.exports = config;