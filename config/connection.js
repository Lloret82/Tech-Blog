// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();
var mysql = require("mysql");

let sequelize;

//use jawsdb if availible else create new database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}



module.exports = sequelize;